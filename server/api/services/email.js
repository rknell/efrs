'use strict'
const q = require('q')
const sg = require('sendgrid')(process.env.SENDGRID_APIKEY)
const nodeMailer = require('nodemailer')
const fs = require('fs')
const Promise = require('bluebird')
const pug = require('pug')
const juice = require('juice')

function sendSendgrid (message, subject, fromEmail, fromName, toEmail, options) {
  const request = sg.emptyRequest()
  request.body = {
    content: [{
      type: 'text/html',
      value: message
    }],
    from: { email: fromEmail, name: fromName },
    personalizations: [{
      subject,
      to: toEmail.split(',').map(email => { return { email } })
    }]
  }
  request.method = 'POST'
  request.path = '/v3/mail/send'

  if (options && options.attachments && options.attachments.length) {
    if (!request.body.attachments) request.body.attachments = []
    options.attachments.forEach((attachment, index) => {
      request.body.attachments.push({
        content: Buffer.from(fs.readFileSync(attachment)).toString('base64'),
        filename: attachment.filename || `response${index}.pdf`
      })
    })
  } else if (options && options.textAttachments && options.textAttachments.length) {
    if (!request.body.attachments) request.body.attachments = []
    options.textAttachments.forEach((attachment, index) => {
      request.body.attachments.push({
        content: Buffer.from(attachment.data).toString('base64'),
        filename: attachment.fileName || `attachment${index}t.txt`,
        type: attachment.type || 'text/plain'
      })
    })
  }

  if (options && options.isTest) {
    return request
  } else {
    return new Promise((resolve, reject) => {
      sg.API(request, function (error, response) {
        if (error) reject(error)
        else resolve(response)
      })
    })
  }
}

function sendSMTP (message, subject, fromEmail, fromName, toEmail, options) {
  const config = {
    host: process.env.SMTP_HOST, // mailrelay etc
    port: 587,
    secure: false,
    tls: { ciphers: 'SSLv3', rejectUnauthorized: false },
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }

  const transporter = nodeMailer.createTransport(config)

  const mailOptions = {
    from: '"' + fromName + '" <' + fromEmail + '>', // sender address
    to: toEmail, // list of receivers
    subject: subject, // Subject line
    html: message // html body
  }

  if (options) {
    if (options && options.attachments && options.attachments.length) {
      if (!mailOptions.attachments) mailOptions.attachments = []
      options.attachments.forEach((attachment, index) => {
        mailOptions.attachments.push({
          content: Buffer.from(fs.readFileSync(attachment)),
          filename: attachment.filename || `response${index}.pdf`
        })
      })
    } else if (options && options.textAttachments && options.textAttachments.length) {
      if (!mailOptions.attachments) mailOptions.attachments = []
      options.textAttachments.forEach((attachment, index) => {
        mailOptions.attachments.push({
          content: Buffer.from(attachment.data),
          filename: attachment.fileName || `attachment${index}t.txt`,
          type: attachment.type || 'text/plain'
        })
      })
    }

    // if (options.files) {
    //   // These are files on the system to attach
    //   if (!mailOptions.attachments) mailOptions.attachments = []
    //   options.files.forEach(function (file) {
    //     console.log('attaching', { path: file }, file)
    //     mailOptions.attachments.push({ path: file })
    //   })
    // }
    //
    // if (options.attachments && options.attachments.length) {
    //   if (!mailOptions.attachments) mailOptions.attachments = []
    //   options.attachments.forEach(function (data, index) {
    //     console.log('Attaching', { filename: 'attachment' + index + data.extension, content: data.content })
    //     mailOptions.attachments.push({ filename: 'attachment' + index + data.extension, content: data.content })
    //   })
    // }
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

function dummyEmail (message, subject, fromEmail, fromName, toEmail, options) {
  console.log('Would have sent email', subject, fromEmail, fromName, toEmail)
  return q({ success: true })
}

function send (message, subject, fromEmail, fromName, toEmail, options) {
  console.log('Sending', subject, fromEmail, fromName, toEmail, options)

  if (process.env.REROUTE_EMAIL) {
    toEmail = process.env.REROUTE_EMAIL
  }

  if (process.env.DUMMY_EMAIL === 'yes' || disabled) {
    return dummyEmail(message, subject, fromEmail, fromName, toEmail, options)
  } else if (process.env.SENDGRID_APIKEY) {
    return sendSendgrid(message, subject, fromEmail, fromName, toEmail, options)
  } else if (process.env.SMTP_HOST) {
    return sendSMTP(message, subject, fromEmail, fromName, toEmail, options)
  } else {
    console.log('Email not setup.')
    return Promise.resolve({ message: 'Email not setup' })
  }
}

function sendTemplate (templateName, templateData, subject, fromEmail, fromName, toEmail, options) {
  return new Promise((resolve, reject) => {
    pug.renderFile(`${__dirname}/../../emailTemplates/${templateName}.pug`, templateData, (err, result) => {
      if (err) {
        throw err
      } else {
        send(juice(result), subject, fromEmail, fromName, toEmail, options).then(resolve).catch(reject)
      }
    })
  })
}

let disabled = false

function setDisabled (to) {
  disabled = to
}

module.exports = {
  send,
  sendTemplate,
  setDisabled,
  _sendSendgrid: sendSendgrid
}
