const ObjectId = require('mongodb').ObjectID
const ISODate = function (date) {
  return new Date(date)
}
const moment = require('moment')
module.exports = {
  name: 'Basic Form',
  pages: [
    {
      groups: [
        {
          fields: [
            {
              fieldId: '1',
              values: {default: 'Test Name'},
              settings: [
                {
                  'value': 'Name',
                  'label': 'Label',
                  'fieldType': 'TextFieldView'
                }, {
                  'value': false,
                  'label': 'Hidden',
                  'fieldType': 'TextFieldView'
                }
              ],
              rules: [
                {
                  'operator': 'all',
                  'conditions': [
                    {
                      'field': '1',
                      'operator': '===',
                      'value': 'Test Name'
                    }
                  ],
                  'action': {
                    'setting': 'Hidden',
                    'value': true
                  }
                }
              ]
            }, {
              fieldId: '2',
              values: {default: moment().add(10, 'minutes').toDate()},
              settings: [
                {
                  'value': 'Date Rule',
                  'label': 'Label',
                  'fieldType': 'TextFieldView'
                }, {
                  'value': false,
                  'label': 'Hidden',
                  'fieldType': 'TextFieldView'
                }
              ],
              rules: [
                {
                  'operator': 'all',
                  'conditions': [
                    {
                      'field': '2',
                      'operator': '!==',
                      'value': new Date()
                    }
                  ],
                  'action': {
                    'setting': 'Hidden',
                    'value': true
                  }
                }
              ]
            }, {
              fieldId: '3',
              values: {default: '11'},
              settings: [
                {
                  'value': 'Date Rule',
                  'label': 'Label',
                  'fieldType': 'TextFieldView'
                }, {
                  'value': false,
                  'label': 'Hidden',
                  'fieldType': 'TextFieldView'
                }
              ],
              rules: [
                {
                  'operator': 'all',
                  'conditions': [
                    {
                      'field': '3',
                      'operator': '>',
                      'value': 10
                    }
                  ],
                  'action': {
                    'setting': 'Hidden',
                    'value': true
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  _id: "BASICFORM"
}
