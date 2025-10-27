/* eslint-disable no-unused-expressions */
const emailResponse = require('../../api/services/emailResponse')
const responses = require('../fixtures/responses')
const emailSvc = require('../../api/services/email')
const expect = require('chai').expect

const unmockedSend = emailSvc.send

describe('emailResponse', () => {
  after(() => {
    emailSvc.send = unmockedSend
  })

  it('should email a response to an arbitrary email', () => {
    emailSvc.send = (message, subject, fromEmail, fromName, toEmail, options) => {
      expect(message.indexOf('user3@example.com')).to.be.above(0)
      expect(toEmail).to.equal('user99@example.com')
    }
    return emailResponse.send(responses[0], 'user99@example.com')
  })

  it('should email a response to a userId', function (done) {
    emailSvc.send = (message, subject, fromEmail, fromName, toEmail, options) => {
      expect(message.indexOf('user1@example.com')).to.be.above(0)
      expect(toEmail).to.equal('user1@example.com')
    }
    emailResponse.emailToUserId(responses[0], '58d8d82843aa85c1c660596f')
      .then(() => {
        done()
      })
      .catch(done)
  })

  it('should email a response to the users supervisor', function (done) {
    emailSvc.send = (message, subject, fromEmail, fromName, toEmail, options) => {
      expect(message.indexOf('Supervisor Example')).to.be.above(0)
      expect(toEmail).to.equal('user2@example.com')
    }
    emailResponse.emailToRelationship(responses[1], 'supervisor')
      .then(() => {
        done()
      })
      .catch(done)
  })
})
