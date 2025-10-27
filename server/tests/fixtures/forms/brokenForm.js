const ObjectId = require('mongodb').ObjectID
const ISODate = function (date) {
  return new Date(date)
}
module.exports = {
  name: 'Broken Form',
  pages: [
    {
      groups: [
        {
          fields: [
            {
              fieldId: '1',
              settings: [
                {
                  'value': 'Broken Field (No Value)',
                  'label': 'Label'
                }, {
                  'value': false,
                  'fieldType': 'TextFieldView'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
