const ObjectId = require('mongodb').ObjectID
const ISODate = function (date) {
  return new Date(date)
}
module.exports = {
  name: 'Basic Form',
  pages: [
    {
      groups: [
        {
          fields: [
            {
              fieldId: '45', values: {default: '150'}
            }, {
              fieldId: '46', values: {default: '80'}
            }, {
              fieldId: '3',
              values: {default: '11'},
              settings: [
                {
                  'value': 'Date Rule',
                  'label': 'Label',
                  'fieldType': 'TextFieldView'
                }, {
                  'value': true,
                  'label': 'Hidden',
                  'fieldType': 'TextFieldView'
                }
              ],
              rules: [
                {
                  'operator': 'any',
                  'conditions': [
                    {
                      'field': '45',
                      'operator': '>=',
                      'value': '141'
                    }, {
                      'field': '46',
                      'operator': '>=',
                      'value': '91'
                    }
                  ],
                  'action': {
                    'setting': 'Hidden',
                    'value': false
                  }
                }, {
                  'operator': 'any',
                  'conditions': [
                    {
                      'field': '45',
                      'operator': '>=',
                      'value': '170'
                    }, {
                      'field': '46',
                      'operator': '>=',
                      'value': '110'
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
  ]
}
