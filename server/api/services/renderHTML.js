const libForm = require('../../../app/app/lib/form')
const moment = require('moment-timezone')
const Users = require('../../../server/api/models/User').model
const googleUrlSigner = require('./googleUrlSigner')

function renderHeader (field, fieldSettings) {
  let output = ''
  output += `<h3 style="page-break-after: avoid">${fieldSettings.Label}</h3>`
  return output
}

function renderText (field, fieldSettings) {
  return renderFieldLabel(fieldSettings.Label, field.values.default)
}

function renderQuickPick (field, fieldSettings) {
  if (fieldSettings['Field Type'] === 'dropDown') {
    return renderFieldLabel(fieldSettings.Label, field.values.default.value || field.values.default)
  } else {
    return renderFieldLabel(fieldSettings.Label, field.values.default)
  }
}

function renderDate (field, fieldSettings, timezone = 'Australia/Brisbane') {
  if (fieldSettings['Data Type'] === 'time') {
    return renderFieldLabel(fieldSettings.Label, field.values.default ? moment(field.values.default).tz(timezone).format('hh:mm a') : 'No time specified')
  } else if (fieldSettings['Data Type'] === 'datetime') {
    return renderFieldLabel(fieldSettings.Label, field.values.default ? moment(field.values.default).tz(timezone).format('Do MMM YYYY hh:mm a') : 'No date/time specified')
  } else {
    return renderFieldLabel(fieldSettings.Label, field.values.default ? moment(field.values.default).tz(timezone).format('Do MMM YYYY') : 'No date specified')
  }
}

function renderSignature (field, fieldSettings) {
  return renderFieldLabel(fieldSettings.Label, field.values.default ? `<img style="height: 100px" src="${field.values.default}" >` : 'None provided')
}

function renderPhotos (field, fieldSettings) {
  let output = `<div><span class="field-label">${fieldSettings.Label}&nbsp;</span></div>`
  if (field.values.default) {
    field.values.default.forEach(item => {
      output += `<div><img style="max-width: 100%" src="${item}" ></div><hr />`
    })
  } else {
    output += `<div>No photos supplied</div>`
  }

  return output
}

function renderFieldLabel (label, data) {
  return `<div><span class="field-label">${label}&nbsp;</span><span class="value">${data || 'No Response'}</span></div><hr/>`
}

function renderTextBlock (field, fieldSettings) {
  const hasBorder = fieldSettings['Border Colour'] && fieldSettings['Border Colour'] !== 'transparent' && fieldSettings['Border Colour'] !== '#ffffff'
  return `<div style="margin-top: 20px;
            margin-bottom: 20px;
            border-width: ${hasBorder ? '2px' : '0px'}; 
            border-style: ${hasBorder ? 'solid' : 'none'}; 
            padding: ${hasBorder ? '10px' : '0px'}; 
            border-color: ${fieldSettings['Border Colour']} !important; 
            color:${fieldSettings['Text Colour']}">
            ${fieldSettings.Content}
        </div>`
}

async function renderAssignTo (field, fieldSettings) {
  const user = await Users.findOne({ _id: field.values.default })
  return renderFieldLabel(fieldSettings.Label, `${user.firstName} ${user.lastName}`)
}

function renderLocation (field, fieldSettings) {
  const mapsKey = process.env.GOOGLE_STATIC_MAPS_KEY
  if (!mapsKey) {
    console.warn('GOOGLE_STATIC_MAPS_KEY env variable missing. Using placeholder key; maps may not render in production.')
  }
  const unsignedMapsUrl = `/maps/api/staticmap?size=400x200&markers=${field.values.default}&key=${encodeURIComponent(mapsKey || 'TEST_KEY')}`

  const mapsSecret = process.env.GOOGLE_STATIC_MAPS_SECRET
  let mapsUrl
  if (mapsSecret) {
    mapsUrl = `https://maps.googleapis.com${googleUrlSigner(unsignedMapsUrl, mapsSecret)}`
  } else {
    console.warn('GOOGLE_STATIC_MAPS_SECRET env variable missing. Maps will be unsigned.')
    mapsUrl = `https://maps.googleapis.com${unsignedMapsUrl}`
  }

  if (fieldSettings['Resolve Address']) {
    return renderFieldLabel(fieldSettings.Label, field.values.address ? `<a href="https://maps.google.com/?q=${field.values.default}">${field.values.address}</a><br><img src="${mapsUrl}" alt="">` : 'No location')
  } else {
    return renderFieldLabel(fieldSettings.Label, field.values.default ? `<a href="https://maps.google.com/?q=${field.values.default}">${field.values.default}</a><br><img src="${mapsUrl}" alt="">` : 'No location')
  }
}

function renderCreatedBy (form) {
  if (form.createdBy && form.createdBy.firstName) {
    return renderFieldLabel('Created By', `${form.createdBy.firstName} ${form.createdBy.lastName}`)
  } else if (form.createdBy && form.createdBy.username) {
    return renderFieldLabel('Created By', `${form.createdBy.username}`)
  } else {
    return renderFieldLabel('Created By', 'Unable to read created by information')
  }
}

function renderFormDates (form, timezone = 'Australia/Brisbane') {
  let output = renderFieldLabel('Date created', moment(form.createdAt).tz(timezone).format('Do MMM YYYY hh:mma'))
  if (form.updatedAt &&
    moment(form.updatedAt).isAfter(moment(form.createdAt).add(1, 'minute'))) {
    output += renderFieldLabel('Date updated', moment(form.updatedAt).tz(timezone).format('Do MMM YYYY hh:mma'))
  }
  return output
}

async function renderField (field) {
  const _fieldSettings = libForm.fieldSettings(field)
  let output = ''
  if (!_fieldSettings.Hidden || _fieldSettings['Report When Hidden']) {
    switch (field.fieldType) {
      case 'Text':
      case 'Calculated':
      case 'ScoreCalculator':
      case 'CompareDateField':
        output = renderText(field, _fieldSettings)
        break
      case 'Header':
        output = renderHeader(field, _fieldSettings)
        break
      case 'QuickPick':
        output = renderQuickPick(field, _fieldSettings)
        break
      case 'Date':
        output = renderDate(field, _fieldSettings)
        break
      case 'TextBlock':
        output = renderTextBlock(field, _fieldSettings)
        break
      case 'Signature':
        output = renderSignature(field, _fieldSettings)
        break
      case 'Action':
        return output
      case 'Geolocation':
        output = renderLocation(field, _fieldSettings)
        break
      case 'Photo':
        output = renderPhotos(field, _fieldSettings)
        break
      case 'AssignToField':
        output = await renderAssignTo(field, _fieldSettings)
        break
      default:
        output = `<div>ERROR: no render rule for ${field.fieldType}</div>`
        break
    }
  }
  return output
}

async function renderHTML (form) {
  libForm.applyRules(form)

  let output =
    `<html>
        <head>
        <style>
        * {border-color: #e5e5e5 !important;}
        hr {border: 1px solid rgba(0,0,0,0.1)}
        body {font-family: sans-serif;font-size: 8pt;}
        .field-label {width: 30%; display: inline-block; color: rgba(0,0,0,0.8); font-size: 8pt;}
        .value {font-weight: bold; width: 70%; font-size: 8pt;}
        h1.title {text-align: center;}
</style>
</head>
    <body>
    ${form.headerImageURL ? `<img src="${form.headerImageURL}" style="max-width: 100%;">` : ''}
    <h1 class="title">${form.name}</h1>
    `

  for (let page of form.pages) {
    output += `<h2>${page.name}</h2><hr/>`
    for (let field of page.groups[0].fields) {
      output += await renderField(field, output)
    }
    if (form.pages.indexOf(page) !== (form.pages.length - 1)) {
      output += `<div style="page-break-after: always;"></div>${form.headerImageURL ? `<img src="${form.headerImageURL}" style="max-width: 100%;">` : ''}`
    }
  }

  output += `
    ${renderCreatedBy(form)}
    ${renderFormDates(form)}
    </body></html>
    `
  return output
}

module.exports = {
  go: renderHTML,
  _renderField: renderField
}
