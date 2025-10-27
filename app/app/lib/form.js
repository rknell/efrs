const moment = require('moment-timezone')
const _ = require('lodash')
const stats = require('statistical-methods')

moment.tz.setDefault('Australia/Brisbane')

function hydrateValues (form, response) {
  // Hydrate values
  form.status = response.status
  form.createdAt = response.createdAt
  form.updatedAt = response.updatedAt
  form.createdBy = response.createdBy

  if (response && response.responses) {
    let responseFieldIds = Object.keys(response.responses)
    form.pages.forEach(page => {
      page.groups[0].fields.forEach(field => {
        responseFieldIds.forEach(fieldId => {
          if (String(field.fieldId) === String(fieldId)) {
            field.values = response.responses[fieldId].values
          }
        })
      })
    })
  }
}

function processSearchResult (form, response) {
  form.pages.forEach(page => {
    page.groups[0].fields.forEach(field => {
      const myFieldSettings = fieldSettings(field)
      if (!form.responses) form.responses = {}
      if (response[field.fieldId]) {
        form.responses[field.fieldId].label = myFieldSettings['Label']
        form.responses[field.fieldId].showInSearch = myFieldSettings['Show In Search']
      }
    })
  })
}

function clearForm (form) {
  form.status = ''

  form.pages.forEach(page => {
    page.groups[0].fields.forEach(field => {
      if (field.values) field.values.default = ''
    })
  })
  return form
}

const ignoreFieldTypes = ['Header', 'TextBlock', 'Signature']

function getCSVHeaders (form) {
  let leanForm = JSON.parse(form)
  let output = ''

  leanForm.pages.forEach(page => {
    page.groups[0].fields.forEach(field => {
      if (!_.includes(ignoreFieldTypes, field.fieldType)) {
        let settings = fieldSettings(field)
        output += `"${page.name}.${settings.Label}",`
      }
    })
  })

  output += `"Created By","Created Date","Updated Date","is Incomplete"`
  output += '\n'
  return output
}

async function toCSV (form, responses, timezone = 'Australia/Brisbane') {
  let output = ''

  const response = responses[0]
  const copyForm = JSON.parse(form)
  hydrateValues(copyForm, response)
  applyRules(copyForm)
  copyForm.pages.forEach(page => {
    page.groups[0].fields.forEach(field => {
      let settings = fieldSettings(field)
      if (!_.includes(ignoreFieldTypes, field.fieldType)) {
        if (field.values && (settings['Hidden'] !== true || settings['Report When Hidden'] === true)) {
          if (field.fieldType === 'Date') {
            if (field.values.default) {
              if (settings['Data Type'] === 'time') {
                output += `"${moment(field.values.default).tz(timezone).format('hh:mm a')}",`
              } else if (settings['Data Type'] === 'datetime') {
                output += `"${moment(field.values.default).tz(timezone).format('YYYY-MM-DD hh:mm a')}",`
              } else {
                output += `"${moment(field.values.default).tz(timezone).format('YYYY-MM-DD')}",`
              }
            } else {
              output += ','
            }
          } else {
            output += `"${(field.values.default && field.values.default.toString && field.values.default.toString().replace) ? field.values.default.toString().replace(/"/g, '""') : ''}",`
          }
        } else {
          output += `"",`
        }
      }
    })
  })
  output += '"'
  if (copyForm.createdBy) {
    if (copyForm.createdBy.lastName) {
      output += `${copyForm.createdBy.lastName}`
      if (copyForm.createdBy.firstName) output += `, ${copyForm.createdBy.firstName}`
    } else if (copyForm.createdBy.firstName) {
      output += `${copyForm.createdBy.firstName} (${copyForm.createdBy.username})`
    } else if (!copyForm.createdBy.firstName && !copyForm.createdBy.lastName) {
      output += `${copyForm.createdBy.username}`
    }
  } else {
    output += ''
  }
  output += '",'

  output += `"${moment(copyForm.createdAt).tz(timezone).format('YYYY-MM-DD HH:mm:ss')}",`
  output += `"${copyForm.updatedAt ? moment(copyForm.updatedAt).tz(timezone).format('YYYY-MM-DD HH:mm:ss') : ''}",`
  output += `"${response.isIncomplete}"`
  output += '\n'
  return output
}

function fieldSettings (field) {
  if (field.settings) {
    return field.settings.reduce((result, item) => {
      result[item.label] = item.value
      return result
    }, {})
  } else {
    return {}
  }
}

function getFieldValue (fieldId, form, current) {
  let output = ''
  if (fieldId && fieldId.substr) { // somehow, sometimes, a fieldId is not a string. TODO: investigate
    const prefix = fieldId.substr(0, 3)

    if (prefix === 'cur') {
      if (current) {
        switch (fieldId.substr(4)) {
          case 'user':
            output = current.user
            break
        }
        switch (fieldId.substr(4)) {
          case 'group':
            output = current.group
            break
        }
      }
    } else if (prefix === 'res') {
      switch (fieldId.substr(4)) {
        case 'createdAt':
          output = form.createdAt
          break
        case 'createdBy':
          output = form.createdBy
          break
        case 'status':
          if (form.status) output = form.status.name
          break
        case 'assignedToUser':
          if (form.status) output = form.status.assignedToUser
          break
        case 'assignedToGroup':
          if (form.status) output = form.status.assignedToGroup
          break
      }
    } else {
      form.pages.forEach((page, pageIndex) => {
        const field = page.groups[0].fields.find(field => field.fieldId === fieldId)
        if (field) {
          output = field.values.default
        }
      })
    }
  }
  return output
}

function SCORELOOKUP (form, fieldId) {
  let output = 'noField'

  form.pages.forEach(page => {
    page.groups[0].fields.forEach(field => {
      if (field.fieldId.toString() === fieldId.toString()) {
        if (field.values.default === '') {
          output = 'Incomplete'
        } else {
          if (field.values.score) {
            output = Number(field.values.score.match(/\d|\./g).join(''))
          } else {
            output = 'Unable to get score'
          }
        }
      }
    })
  })

  if (output === 'noField') {
    throw new Error(`No Field '${fieldId}'. Check ID.`)
  } else {
    return output
  }
}

// eslint-disable-next-line no-unused-vars
function _IDLOOKUP (form, fieldId, isString) {
  let output = 'noField'
  form.pages.forEach(page => {
    page.groups[0].fields.forEach(field => {
      if (field.fieldId === fieldId.toString()) {
        if (field.values.default === '') {
          output = ''
        } else if (isString || !field.values.default.match) {
          output = `${field.values.default}`
        } else {
          output = Number(field.values.default.match(/\d|\./g).join(''))
        }
      }
    })
  })

  if (output === 'noField') {
    throw new Error(`No Field '${fieldId}'. Check ID.`)
  } else {
    return output
  }
}

function _VLOOKUP (form, fieldName, isString) {
  let output = 'noField'
  form.pages.forEach(page => {
    page.groups[0].fields.forEach(field => {
      let settings = fieldSettings(field)
      if (settings['Label'] === fieldName) {
        try {
          if (field.values.default === '') {
            output = ''
          } else if (isString) {
            output = `${field.values.default}`
          } else {
            output = Number(field.values.default.match(/\d|\./g).join(''))
          }
        } catch (e) {
          output = `${e}`
        }
      }
    })
  })

  if (output === 'noField') {
    throw new Error(`No Field '${fieldName}'. Check spelling.`)
  } else {
    return output
  }
}

// eslint-disable-next-line no-unused-vars
var VLOOKUP, IDLOOKUP

function runCalculations (form) {
  VLOOKUP = (fieldName, isString) => {
    return _VLOOKUP(form, fieldName, isString)
  }

  IDLOOKUP = (fieldId, isString) => {
    return _IDLOOKUP(form, fieldId, isString)
  }

  // Run calculation
  form.pages.forEach(page => {
    page.groups[0].fields.forEach(field => {
      if (field.fieldType === 'Calculated') {
        let settings = fieldSettings(field)

        try {
          if (!field.values) field.values = { default: '' }
          // eslint-disable-next-line no-eval
          field.values.default = `${eval(settings.Calculation)}`
        } catch (e) {
          if (e.message === `Cannot read property 'join' of null`) {
            field.values.default = ``
          } else {
            field.values.default = `${e}`
          }
        }
      }
    })
  })

  calculateFieldTypes(form)
}

function calculateFieldTypes (form) {
  // Find Score Fields
  form.pages.forEach(page => {
    page.groups[0].fields.forEach(field => {
      if (field.fieldType === 'ScoreCalculator') {
        calculateScores(form, field)
      } else if (field.fieldType === 'CompareDateField') {
        calculateCompareDate(form, field)
      }
    })
  })
}

function calculateScores (form, field) {
  const selectedFields = field.settings.find(setting => setting.fieldType === 'FormFieldPickerView').value.map(item => Number(item.value))
  const strategy = field.settings.find(setting => setting.label === 'Calculation Type').value
  const data = selectedFields.map(field => SCORELOOKUP(form, field))

  switch (strategy) {
    case 'mean':
      field.values.default = stats.mean(data)
      break
    case 'sum':
      field.values.default = stats.sum(data)
      break
    case 'median':
      field.values.default = stats.median(data)
      break
    case 'mode':
      field.values.default = stats.mode(data)
      break
  }
}

function makePositiveAndRound (number) {
  if (isNaN(number)) return 0
  if (number < 0) number = number * -1
  return Math.floor(number)
}

function calculateCompareDate (form, field) {
  try {
    const firstFieldID = field.settings.find(setting => setting.label === 'First Field').value[0].value
    const firstFieldValue = _IDLOOKUP(form, firstFieldID, true)
    const firstFieldMoment = moment(firstFieldValue)

    const secondFieldID = field.settings.find(setting => setting.label === 'Second Field').value[0].value
    const secondFieldValue = _IDLOOKUP(form, secondFieldID, true)
    const secondFieldMoment = moment(secondFieldValue)

    const operation = field.settings.find(setting => setting.label === 'Operation').value

    switch (operation) {
      case 'diffMin':
        field.values.default = makePositiveAndRound(secondFieldMoment.diff(firstFieldMoment, 'minutes', true))
        break
      case 'diffHour':
        field.values.default = makePositiveAndRound(secondFieldMoment.diff(firstFieldMoment, 'hours', true))
        break
      case 'diffHourMin':
        field.values.default = `${makePositiveAndRound(secondFieldMoment.diff(firstFieldMoment, 'hours', true))}h ${makePositiveAndRound(secondFieldMoment.diff(firstFieldMoment, 'minutes', true) % 60)}m`
        break
      case 'diffDay':
        field.values.default = makePositiveAndRound(secondFieldMoment.diff(firstFieldMoment, 'days', true))
        break
      case 'diffDayHour':
        field.values.default = `${makePositiveAndRound(secondFieldMoment.diff(firstFieldMoment, 'days', true))}d ${makePositiveAndRound(secondFieldMoment.diff(firstFieldMoment, 'hours', true) % 24)}h`
        break
      case 'diffMonth':
        field.values.default = makePositiveAndRound(secondFieldMoment.diff(firstFieldMoment, 'months', true))
        break
      case 'diffMonthDay':
        field.values.default = `${makePositiveAndRound(secondFieldMoment.diff(firstFieldMoment, 'months', true))}m ${makePositiveAndRound(secondFieldMoment.diff(firstFieldMoment, 'days', true) % 30.416666666666668)}d`
        break
      case 'diffYear':
        field.values.default = makePositiveAndRound(secondFieldMoment.diff(firstFieldMoment, 'years', true))
        break
      case 'diffYearMonth':
        field.values.default = `${makePositiveAndRound(secondFieldMoment.diff(firstFieldMoment, 'years', true))}y ${makePositiveAndRound(secondFieldMoment.diff(firstFieldMoment, 'months', true) % 12)}m`
        break
      case 'isAfter':
        field.values.default = firstFieldMoment.isAfter(secondFieldMoment) ? 'yes' : 'no'
        break
      case 'isBefore':
        field.values.default = firstFieldMoment.isBefore(secondFieldMoment) ? 'yes' : 'no'
        break
    }
  } catch (e) {
    field.values.default = 'Unable to calculate. Did you select both fields?'
  }
}

function applyRules (form, dontCalc, current) {
  if (!dontCalc) {
    runCalculations(form)
  }
  form.pages.forEach((page, pageIndex) => {
    page.groups[0].fields.forEach((field, fieldIndex) => {
      if (field.rules) {
        let ruleApplied = false
        field.rules.forEach((rule, ruleIndex) => {
          let conditionResults = []
          rule.conditions.forEach((condition, conditionIndex) => {
            if (
              condition.field &&
              condition.operator &&
              condition.value !== undefined &&
              rule.action.setting &&
              rule.action.value !== undefined
            ) {
              let result
              let a = getFieldValue(condition.field, form, current)
              let b = condition.value.toString()

              if (a) {
                if (a.toISOString) {
                  a = a.toISOString()
                } else {
                  a = a.toString()
                }
              }

              if (b) {
                if (b.toISOString) {
                  b = b.toISOString()
                } else {
                  b = b.toString()
                }
              }

              let isNum = false
              if (!isNaN(a) && a !== '' && a !== null) {
                a = Number(a)
                isNum = true
              }
              if (!isNaN(b) && b !== '' && a !== null) {
                b = Number(b)
              }

              if ((a) || isNum) {
                switch (condition.operator) {
                  case '===':
                    result = (a === b)
                    break
                  case '!==':
                    result = (a !== b)
                    break
                  case '>':
                    result = (a > b)
                    break
                  case '>=':
                    result = (a >= b)
                    break
                  case '<':
                    result = (a < b)
                    break
                  case '<=':
                    result = (a <= b)
                    break
                  case 'contains':
                    result = (a.indexOf(b) > -1)
                    break
                  default:
                    result = false
                }
              } else {
                result = false
              }

              conditionResults.push(result)
            }
          })

          let overallResult = false

          if (rule.operator === 'any') {
            conditionResults.forEach(item => {
              if (item === true) {
                overallResult = true
              }
            })
          } else {
            // All
            overallResult = conditionResults.every(item => {
              return item === true
            })
          }

          if (overallResult) {
            ruleApplied = true
            field.settings.forEach(setting => {
              if (setting.label === rule.action.setting) {
                if (setting.baseValue === undefined) setting.baseValue = setting.value
                if (setting.value !== rule.action.value) setting.value = rule.action.value
              }
            })
          } else {
            if (!ruleApplied) {
              field.settings.forEach(setting => {
                if (setting.label === rule.action.setting && setting.baseValue !== undefined) {
                  if (setting.value !== setting.baseValue) setting.value = setting.baseValue
                }
              }, 1)
            }
          }
        })
      }
    })
  })
}

function extractResponses (form, dontCalc) {
  let output = {}
  if (!dontCalc) { runCalculations(form) }
  form.pages.forEach(page => {
    page.groups[0].fields.forEach(field => {
      if (field.values && field.values.default) {
        output[field.fieldId] = {
          values: field.values
        }
      }
    })
  })
  return output
}

function extractFiles (form) {
  let output = []
  form.pages.forEach(page => {
    page.groups[0].fields.forEach(field => {
      if (field.fieldType === 'Photo' && field.values && field.values.default && field.values.default.length) {
        output = [...output, ...field.values.default]
      }
    })
  })
  return output
}

function validateForm (form) {
  const invalidFields = []
  form.pages.forEach(page => {
    page.groups[0].fields.forEach(field => {
      const settings = fieldSettings(field)
      if (settings.Required && (field.values.default === undefined || field.values.default === null || field.values.default === '')) {
        invalidFields.push({
          page: page.name,
          field: settings.Label,
          reason: 'required'
        })
      }
    })
  })
  return invalidFields
}

module.exports = {
  hydrateValues,
  toCSV,
  getCSVHeaders,
  // renderHTML,
  applyRules,
  extractResponses,
  extractFiles,
  validateForm,
  fieldSettings,
  // _renderField: renderField,
  clearForm,
  processSearchResult,
  calculateFieldTypes,
  SCORELOOKUP,
  IDLOOKUP: _IDLOOKUP,
  VLOOKUP: _VLOOKUP
}
