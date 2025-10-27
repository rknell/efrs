const ObjectId = require('mongodb').ObjectID
const ISODate = function (date) {
  return new Date(date)
}
module.exports = {
  pages: [
    {
      groups: [
        {
          fields: [
            {
              fieldId: '45', values: {default: ''}
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
                  'operator': 'all',
                  'conditions': [
                    {
                      'field': '45',
                      'operator': '<=',
                      'value': '4'
                    }
                  ],
                  'action': {
                    'setting': 'Hidden',
                    'value': false
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
