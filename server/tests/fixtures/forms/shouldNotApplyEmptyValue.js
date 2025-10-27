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
              fieldId: '15', values: {default: null}
            }, {
              fieldId: '1',
              values: {default: ''},
              settings: [{
                'value': true,
                'label': 'Hidden',
                'fieldType': 'TextFieldView'
              }],
              'rules': [
                {
                  'operator': 'any',
                  'conditions': [
                    {'field': '15', 'operator': '===', 'value': '5'},
                    {'field': '15', 'operator': '<=', 'value': '4'},
                    {'field': '15', 'operator': '===', 'value': '3'},
                    {'field': '15', 'operator': '===', 'value': '2'},
                    {'field': '15', 'operator': '===', 'value': '1'}
                  ],
                  'action': {'setting': 'Hidden', 'value': false}
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
