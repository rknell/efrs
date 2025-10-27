/* eslint-disable no-unused-expressions */
const libForm = require('../../../app/app/lib/form')
const renderHTML = require('../../api/services/renderHTML')
const expect = require('chai').expect
const googleUrlSigner = require('../../api/services/googleUrlSigner')

const ORIGINAL_MAP_KEY = process.env.GOOGLE_STATIC_MAPS_KEY
const ORIGINAL_MAP_SECRET = process.env.GOOGLE_STATIC_MAPS_SECRET

before(() => {
  process.env.GOOGLE_STATIC_MAPS_KEY = 'TEST_KEY'
  process.env.GOOGLE_STATIC_MAPS_SECRET = 'TEST_SECRET'
})

after(() => {
  if (typeof ORIGINAL_MAP_KEY === 'string') {
    process.env.GOOGLE_STATIC_MAPS_KEY = ORIGINAL_MAP_KEY
  } else {
    delete process.env.GOOGLE_STATIC_MAPS_KEY
  }
  if (typeof ORIGINAL_MAP_SECRET === 'string') {
    process.env.GOOGLE_STATIC_MAPS_SECRET = ORIGINAL_MAP_SECRET
  } else {
    delete process.env.GOOGLE_STATIC_MAPS_SECRET
  }
})

const form = require('../fixtures/forms')[0]
const fullResponse = require('../fixtures/responses')[1]
const response = require('../fixtures/responses')[0]
const users = require('../fixtures/users')
const basicForm = require('../fixtures/forms/basicForm')
const zeroValueForm = require('../fixtures/forms/zeroValueForm')
const emptyForm = require('../fixtures/forms/emptyForm')
const shouldNotApplyEmptyValue = require('../fixtures/forms/shouldNotApplyEmptyValue')
const bloodPressureForm = require('../fixtures/forms/bloodPressureForm')
const brokenForm = require('../fixtures/forms/brokenForm')
const scoringForm = require('../fixtures/forms/scoringform')
const patrolLogIthaca = require('../fixtures/forms/patrolLogIthaca')
const compareDatesTest = require('../fixtures/forms/compareDatesTest')
const pemexTechnicalInspection = require('../fixtures/forms/pemexTechnicalInspection')

function copy (obj) {
  return JSON.parse(JSON.stringify(obj))
}

describe('libForm', () => {
  it('should render a CSV file', async () => {
    const responseCopy = { ...response, createdBy: users[0] }
    const output = await libForm.toCSV(JSON.stringify(form), [responseCopy])
    expect(output).to.exist
    expect(output.indexOf(`user1@example.com`)).to.be.above(-1)
  })

  it('should render a CSV file, null user', async () => {
    const responseCopy = { ...response, createdBy: null }
    const output = await libForm.toCSV(JSON.stringify(form), [responseCopy])
    expect(output).to.exist
  })

  it('should render a multi line CSV file', async () => {
    const output = await libForm.toCSV(JSON.stringify(form), [{ ...fullResponse, createdBy: users[1] }, response, response, response, response])
    const records = output.split('\n')
    expect(records[1]).to.not.contain('Please enter a date of birth')
    expect(output).to.exist
    expect(output.indexOf('Example, Supervisor')).to.be.above(-1)
  })

  it('should render a form to html', async () => {
    const output = await renderHTML.go(form)
    expect(output).to.contain(`<html>`)
    expect(output).to.contain(`</html>`)
  })

  it('should render a form to html with a headerImageUrl', async () => {
    const copiedForm = JSON.parse(JSON.stringify(form))
    copiedForm.headerImageURL = 'TestHeaderImage'
    const output = await renderHTML.go(copiedForm)
    expect(output).to.contain(`<html>`)
    expect(output).to.contain(`</html>`)
    expect(output).to.contain(`TestHeaderImage`)
  })

  it('should render a text block', () => {
    const output = renderHTML._renderField({ fieldType: 'TextBlock' })
    expect(output).to.not.equal(`<div>ERROR: no render rule for Text Block</div>`)
    expect(output).to.exist
  })

  it('should render a text block with a border', () => {
    const output = renderHTML._renderField({
      fieldType: 'TextBlock',
      settings: [
        { 'value': '#FF00DD', label: 'Border Colour' }
      ]
    })
    expect(output).to.not.equal(`<div>ERROR: no render rule for Text Block</div>`)
    expect(output).to.exist
  })

  it('should render a signature field with no signature', async () => {
    const output = await renderHTML._renderField({ fieldType: 'Signature', values: { default: '' } })
    expect(output).to.equal(`<div><span class="field-label">undefined&nbsp;</span><span class="value">None provided</span></div><hr/>`)
    expect(output).to.exist
  })

  it('should render a signature field with a signature', async () => {
    const output = await renderHTML._renderField({ fieldType: 'Signature', values: { default: 'Signature Data' } })
    expect(output).to.equal(`<div><span class="field-label">undefined&nbsp;</span><span class="value"><img style="height: 100px" src="Signature Data" ></span></div><hr/>`)
    expect(output).to.exist
  })

  it('should render a geolocation field with no data', async () => {
    const output = await renderHTML._renderField({ fieldType: 'Geolocation', values: { default: '' } })
    expect(output).to.equal(`<div><span class="field-label">undefined&nbsp;</span><span class="value">No location</span></div><hr/>`)
    expect(output).to.exist
  })

  it('should render a geolocation field with data', async () => {
    const output = await renderHTML._renderField({ fieldType: 'Geolocation', values: { default: '100,150' } })
    const unsignedMapsUrl = `/maps/api/staticmap?size=400x200&markers=100,150&key=${encodeURIComponent(process.env.GOOGLE_STATIC_MAPS_KEY)}`
    const expectedMapUrl = `https://maps.googleapis.com${googleUrlSigner(unsignedMapsUrl, process.env.GOOGLE_STATIC_MAPS_SECRET)}`
    expect(output).to.equal(`<div><span class="field-label">undefined&nbsp;</span><span class="value"><a href="https://maps.google.com/?q=100,150">100,150</a><br><img src="${expectedMapUrl}" alt=""></span></div><hr/>`)
    expect(output).to.exist
  })

  it('should render an action field', async () => {
    const output = await renderHTML._renderField({ fieldType: 'Action', values: { default: '' } })
    expect(output).to.not.equal(`<div>ERROR: no render rule for Text Block</div>`)
    expect(output).to.equal('')
  })

  it(`should not fall over when it hits a field that doesn't have a render rule`, async () => {
    const output = await renderHTML._renderField({ fieldType: 'Unknown', values: { default: '' } })
    expect(output).to.equal(`<div>ERROR: no render rule for Unknown</div>`)
  })

  it(`should render a date field`, async () => {
    const output = await renderHTML._renderField({ fieldType: 'Date', values: { default: '2014-01-01' } })
    expect(output).to.equal(`<div><span class="field-label">undefined&nbsp;</span><span class="value">1st Jan 2014</span></div><hr/>`)
  })

  it(`should render a quickpick field`, async () => {
    const output = await renderHTML._renderField({ fieldType: 'QuickPick', values: { default: '2014-01-01' } })
    expect(output).to.equal(`<div><span class="field-label">undefined&nbsp;</span><span class="value">2014-01-01</span></div><hr/>`)
  })

  it(`should render a quickpick drop down field v1`, async () => {
    const output = await renderHTML._renderField({
      fieldType: 'QuickPick',
      settings: [{ label: 'Field Type', value: 'dropDown' }],
      values: { default: { value: '2014-01-01' } }
    })
    expect(output).to.equal(`<div><span class="field-label">undefined&nbsp;</span><span class="value">2014-01-01</span></div><hr/>`)
  })

  it(`should render a quickpick drop down field v2`, async () => {
    const output = await renderHTML._renderField({
      fieldType: 'QuickPick',
      settings: [{ label: 'Field Type', value: 'dropDown' }],
      values: { default: '2014-01-01' }
    })
    expect(output).to.equal(`<div><span class="field-label">undefined&nbsp;</span><span class="value">2014-01-01</span></div><hr/>`)
  })

  it('should validate a form', () => {
    const copyForm = { ...form }
    libForm.hydrateValues(copyForm, response)
    const output = libForm.validateForm(copyForm)
    expect(output.length).to.be.above(10)
    expect(output[0].field).to.exist
    expect(output[0].page).to.exist
    expect(output[0].reason).to.exist
  })

  it('should extract the responses', () => {
    const copyForm = copy(form)
    libForm.hydrateValues(copyForm, fullResponse)
    const output = libForm.extractResponses(copyForm)
    expect(output).to.exist
    expect(output[2].values.default).to.equal('SampleFirst')
    expect(output[3].values.default).to.equal('SampleLast')
    expect(output[189].values.default).to.equal('46') // SampleFirst's Birthday!
    expect(output[190].values.default).to.equal('31')
  })

  it('should apply the rules without error', () => {
    const copyForm = copy(form)
    libForm.hydrateValues(copyForm, fullResponse)
    const hydratedForm = JSON.stringify(copyForm)
    libForm.applyRules(copyForm)
    const ruledForm = JSON.stringify(copyForm)
    expect(hydratedForm).to.not.equal(ruledForm)
  })

  it('should show no advice when there are no responses', () => {
    const copyForm = copy(form)
    libForm.applyRules(copyForm)
    copyForm.pages[3].groups[0].fields.forEach(field => {
      if (field.fieldType === 'TextBlock' && field.rules.length > 0) {
        field.settings.forEach(setting => {
          if (setting.label === 'Hidden') {
            expect(setting.value === true)
          }
        })
      }
    })
  })

  it('should calculate fields without error', () => {
    const copyForm = copy(scoringForm)
    libForm.calculateFieldTypes(copyForm)
    // TODO: Improve this one
  })

  it('should run compare dates minutes correctly', () => {
    const form = copy(compareDatesTest.form)
    libForm.hydrateValues(form, compareDatesTest.responses.basic)
    libForm.calculateFieldTypes(form)
    expect(libForm.IDLOOKUP(form, 4, true)).to.equal('1440') // Minutes
    expect(libForm.IDLOOKUP(form, 5, true)).to.equal('24') // Hours
    expect(libForm.IDLOOKUP(form, 6, true)).to.equal('0') // Months
    expect(libForm.IDLOOKUP(form, 7, true)).to.equal('0') // Years
    expect(libForm.IDLOOKUP(form, 8, true)).to.equal('no') // is first after second
    expect(libForm.IDLOOKUP(form, 9, true)).to.equal('yes') // is first before second
  })

  it('should handle empty string not equal comparisons', () => {
    const form = copy(pemexTechnicalInspection.form)
    libForm.hydrateValues(form, pemexTechnicalInspection.responses[0])
    libForm.calculateFieldTypes(form)
    libForm.applyRules(form)
    expect(form.pages[0].groups[0].fields[9].settings[4].value).to.equal(false) // Checking a string of "1"
    form.pages[0].groups[0].fields[8].values.default = 'test'
    libForm.applyRules(form)
    expect(form.pages[0].groups[0].fields[9].settings[4].value).to.equal(false) // Checking a string of "test"
  })

  it('should apply a blood pressure double rule successfully', () => {
    const copyForm = copy(bloodPressureForm)
    expect(copyForm.pages[0].groups[0].fields[2].settings[1].value).to.equal(true)
    libForm.applyRules(copyForm)
    expect(copyForm.pages[0].groups[0].fields[2].settings[1].value).to.equal(false)
  })

  it('should apply a rule based on a 0 value', () => {
    const copyForm = copy(zeroValueForm)
    expect(copyForm.pages[0].groups[0].fields[1].settings[1].value).to.equal(true)
    libForm.applyRules(copyForm)
    expect(copyForm.pages[0].groups[0].fields[1].settings[1].value).to.equal(false)
  })

  it('should not apply a rule to an empty field', () => {
    const copyForm = copy(emptyForm)
    expect(copyForm.pages[0].groups[0].fields[1].settings[1].value).to.equal(true)
    libForm.applyRules(copyForm)
    expect(copyForm.pages[0].groups[0].fields[1].settings[1].value).to.equal(true)
  })

  it('should not apply null', () => {
    const copyForm = copy(shouldNotApplyEmptyValue)
    expect(copyForm.pages[0].groups[0].fields[1].settings[0].value).to.equal(true)
    libForm.applyRules(copyForm)
    expect(copyForm.pages[0].groups[0].fields[1].settings[0].value).to.equal(true)
  })

  it('should apply a simple rule successfully', () => {
    const copyForm = copy(basicForm)
    libForm.applyRules(copyForm)
    // Simple Rule
    expect(copyForm.pages[0].groups[0].fields[0].settings[1].value).to.equal(true)

    // Date Rule
    expect(copyForm.pages[0].groups[0].fields[1].settings[1].value).to.equal(true)

    // Number Rule
    expect(copyForm.pages[0].groups[0].fields[2].settings[1].value).to.equal(true)
  })

  it('should not break with a broken form', () => {
    const copyForm = copy(brokenForm)
    libForm.applyRules(copyForm)
    libForm.extractResponses(copyForm)
  })

  it('should not wig out when hydrating with no response object', () => {
    libForm.hydrateValues(basicForm, {})
  })

  it('should not throw on scorelookup error', () => {
    const output = libForm.SCORELOOKUP(patrolLogIthaca, 85)
    expect(output).to.equal('Unable to get score')
  })
})
