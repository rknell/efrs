var ObjectId = require('mongodb').ObjectID
var ISODate = function (date) {
  return new Date(date)
}

module.exports = [
  {
    '_id': ObjectId('58eb001e9d37660794787af6'),
    'createdBy': ObjectId('58da56645e8a2408fa8971a3'),
    'name': 'WHS Form',
    'dateStarted': ISODate('2017-03-20T00:47:06.141Z'),
    '__v': 114,
    'createdAt': ISODate('2017-04-10T02:18:05.896Z'),
    'updatedAt': ISODate('2017-06-05T11:44:32.447Z'),
    'company': ObjectId('58ed9f07466ae5000404fcf3'),
    'pages': [
      {
        'name': 'Patient',
        '_id': ObjectId('58cf297e6a0c3a9e59167c2c'),
        'restrictedGroups': [],
        'groups': [
          {
            '_id': ObjectId('58cf297e6a0c3a9e59167c2d'),
            'fields': [
              {
                'fieldType': 'Header',
                'fieldId': '1',
                '_id': ObjectId('58cf297e6a0c3a9e59167cc4'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Your Details',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167cc6')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cc5')
                  }
                ]
              },
              {
                'fieldType': 'Text',
                'fieldId': '2',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf297e6a0c3a9e59167cb6'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'First Name',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167cc3')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167cc2')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167cc1')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cc0')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cbf')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714c80ae700004ab89f8')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cbe')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167cbd')
                  },
                  {
                    'value': true,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cbc')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cbb')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cba')
                  },
                  {
                    'value': '',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167cb9')
                  },
                  {
                    'value': 'default',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cb8')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cb7')
                  }
                ]
              },
              {
                'fieldType': 'Text',
                'fieldId': '3',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf297e6a0c3a9e59167ca8'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Surname',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167cb5')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167cb4')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167cb3')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cb2')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cb1')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714c80ae700004ab89f7')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cb0')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167caf')
                  },
                  {
                    'value': true,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cae')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cad')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167cac')
                  },
                  {
                    'value': '',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167cab')
                  },
                  {
                    'value': 'default',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167caa')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167ca9')
                  }
                ]
              },
              {
                'fieldType': 'Date',
                'fieldId': '4',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf297e6a0c3a9e59167c9f'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Date of Birth',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167ca7')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714c80ae700004ab89f6')
                  },
                  {
                    'value': '0',
                    'label': 'Max Days Future',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167ca6')
                  },
                  {
                    'value': '',
                    'label': 'Max Days Past',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167ca5')
                  },
                  {
                    'value': '',
                    'label': 'Default Date Offset (Days)',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167ca4')
                  },
                  {
                    'value': false,
                    'label': 'Default to Today',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167ca3')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167ca2')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167ca1')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167ca0')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '5',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf297e6a0c3a9e59167c99'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Gender',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c9e')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c9d')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c9c')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c9b')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714c80ae700004ab89f5')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Male',
                          'label': 'Male'
                        },
                        {
                          'value': 'Female',
                          'label': 'Female'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c9a')
                  }
                ]
              },
              {
                'fieldType': 'Calculated',
                'fieldId': '189',
                'values': {
                  'default': 'Please enter a date of birth'
                },
                '_id': ObjectId('592f6c2137734000046bf347'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Age',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('592f6c2137734000046bf349')
                  },
                  {
                    'value': 'VLOOKUP(\'Date of Birth\') ?Math.floor(moment.duration(moment().diff(moment(VLOOKUP(\'Date of Birth\',true)))).asYears()):\'Please enter a date of birth\'',
                    'label': 'Calculation',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'settings': {
                        'Auto Capitalize': 'none',
                        'Multi Line': true
                      }
                    },
                    '_id': ObjectId('592f6c2137734000046bf348')
                  }
                ]
              },
              {
                'fieldType': 'Text',
                'fieldId': '6',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf297e6a0c3a9e59167c8b'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Medicare Number',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c98')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c97')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c96')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c95')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c94')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714c80ae700004ab89f4')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c93')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c92')
                  },
                  {
                    'value': true,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c91')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c90')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c8f')
                  },
                  {
                    'value': '10',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c8e')
                  },
                  {
                    'value': 'phone-pad',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c8d')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c8c')
                  }
                ]
              },
              {
                'fieldType': 'Text',
                'fieldId': '8',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf297e6a0c3a9e59167c6f'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Contact Number',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c7c')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c7b')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c7a')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c79')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c78')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714c80ae700004ab89f2')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c77')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c76')
                  },
                  {
                    'value': true,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c75')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c74')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c73')
                  },
                  {
                    'value': '',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c72')
                  },
                  {
                    'value': 'phone-pad',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c71')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c70')
                  }
                ]
              },
              {
                'fieldType': 'Text',
                'fieldId': '95',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('591ad099603e4d0004216ae3'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Email address',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591ad099603e4d0004216af0')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591f87a039c3d000043810c3')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591ad099603e4d0004216aef')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216aee')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216aed')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216aec')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216aeb')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('591ad099603e4d0004216aea')
                  },
                  {
                    'value': true,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216ae9')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216ae8')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216ae7')
                  },
                  {
                    'value': '',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591ad099603e4d0004216ae6')
                  },
                  {
                    'value': 'default',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216ae5')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216ae4')
                  }
                ]
              },
              {
                'fieldType': 'Text',
                'fieldId': '96',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('591ad099603e4d0004216ad5'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Choose a password',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591ad099603e4d0004216ae2')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591f87a039c3d000043810c2')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591ad099603e4d0004216ae1')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216ae0')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216adf')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216ade')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216add')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('591ad099603e4d0004216adc')
                  },
                  {
                    'value': true,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216adb')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216ada')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216ad9')
                  },
                  {
                    'value': '',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591ad099603e4d0004216ad8')
                  },
                  {
                    'value': 'default',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216ad7')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('591ad099603e4d0004216ad6')
                  }
                ]
              },
              {
                'fieldType': 'Header',
                'fieldId': '9',
                '_id': ObjectId('58cf297e6a0c3a9e59167c6c'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'General Health',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c6e')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c6d')
                  }
                ]
              },
              {
                'fieldType': 'Header',
                'fieldId': '10',
                '_id': ObjectId('58cf297e6a0c3a9e59167c69'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Smoking',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c6b')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c6a')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '11',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf297e6a0c3a9e59167c63'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Do you smoke?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c68')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c67')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c66')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c65')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714c80ae700004ab89f1')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Yes',
                          'label': 'Yes'
                        },
                        {
                          'value': 'No',
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c64')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '12',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf297e6a0c3a9e59167c59'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c5c'),
                    'conditions': [
                      {
                        'field': '11',
                        'operator': '===',
                        'value': 'Yes',
                        '_id': ObjectId('58cf297e6a0c3a9e59167c5d')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Have you considered stopping smoking?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c62')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c61')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c60')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c5f')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714c80ae700004ab89f0')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c5e')
                  }
                ]
              },
              {
                'fieldType': 'Header',
                'fieldId': '13',
                '_id': ObjectId('58cf297e6a0c3a9e59167c56'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Alcohol',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c58')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c57')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '14',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf297e6a0c3a9e59167c50'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Do you drink alcohol?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c55')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c54')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c53')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c52')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714c80ae700004ab89ef')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Yes',
                          'label': 'Yes'
                        },
                        {
                          'value': 'No',
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c51')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '15',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf297e6a0c3a9e59167c4a'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('58cfa31e1fa98eb1d3a8fc5e'),
                    'conditions': [
                      {
                        'field': '14',
                        'operator': '===',
                        'value': 'Yes',
                        '_id': ObjectId('58cfa31e1fa98eb1d3a8fc5f')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'How many days per week do you drink on average?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c4f')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c4e')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c4d')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c4c')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714c80ae700004ab89ee')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': '1',
                          'label': '1'
                        },
                        {
                          'value': '2',
                          'label': '2'
                        },
                        {
                          'value': '3',
                          'label': '3'
                        },
                        {
                          'value': '4',
                          'label': '4'
                        },
                        {
                          'value': '5',
                          'label': '5'
                        },
                        {
                          'value': '6',
                          'label': '6'
                        },
                        {
                          'value': '7',
                          'label': '7'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c4b')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '16',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf297e6a0c3a9e59167c40'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c41'),
                    'conditions': [
                      {
                        'field': '14',
                        'operator': '===',
                        'value': 'Yes',
                        '_id': ObjectId('58cf297e6a0c3a9e59167c42')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'On those days, how many standard glasses would you drink?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c49')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c48')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c47')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c46')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714c80ae700004ab89ed')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': '<1',
                          'label': '<1'
                        },
                        {
                          'value': '2-4',
                          'label': '2-4'
                        },
                        {
                          'value': '5-6',
                          'label': '5-6'
                        },
                        {
                          'value': '7-10',
                          'label': '7-10'
                        },
                        {
                          'value': '10+',
                          'label': '10+'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c45')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '77',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('590ec9a434dc5c0004324eac'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('590ec9a434dc5c0004324ead'),
                    'conditions': [
                      {
                        'field': '14',
                        'operator': '===',
                        'value': 'Yes',
                        '_id': ObjectId('590ec9a434dc5c0004324eae')
                      }
                    ],
                    'action': {
                      'setting': 'Required',
                      'value': true
                    }
                  },
                  {
                    'operator': 'all',
                    '_id': ObjectId('5917c9715ee03d0004c84937'),
                    'conditions': [
                      {
                        'field': '14',
                        'operator': '===',
                        'value': 'Yes',
                        '_id': ObjectId('5917c9715ee03d0004c84938')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'What is the most you would drink in a session?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('590ec9a434dc5c0004324eb4')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec9a434dc5c0004324eb3')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec9a434dc5c0004324eb2')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec9a434dc5c0004324eb1')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec9a434dc5c0004324eb0')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': '1 - 4',
                          'label': '1 - 4'
                        },
                        {
                          'value': '5 - 7',
                          'label': '5 - 7'
                        },
                        {
                          'value': '8 - 10',
                          'label': '8 - 10'
                        },
                        {
                          'value': '10+',
                          'label': '10+'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec9a434dc5c0004324eaf')
                  }
                ]
              },
              {
                'fieldType': 'Header',
                'fieldId': '18',
                '_id': ObjectId('58cf297e6a0c3a9e59167c3d'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Physical Activity',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c3f')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c3e')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '19',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf297e6a0c3a9e59167c37'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'How much planned exercise do you do per week? (mins)',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c3c')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c3b')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c3a')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c39')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89ec')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': '<30',
                          'label': '<30'
                        },
                        {
                          'value': '31-60',
                          'label': '31-60'
                        },
                        {
                          'value': '61-90',
                          'label': '61-90'
                        },
                        {
                          'value': '91-120',
                          'label': '91-120'
                        },
                        {
                          'value': '121-150',
                          'label': '121-150'
                        },
                        {
                          'value': '150+',
                          'label': '150+'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c38')
                  }
                ]
              },
              {
                'fieldType': 'Header',
                'fieldId': '20',
                '_id': ObjectId('58cf297e6a0c3a9e59167c34'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Nutrition',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c36')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c35')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '21',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf297e6a0c3a9e59167c2e'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'How many serves of fruit do you eat per day on average?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf297e6a0c3a9e59167c33')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c32')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c31')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c30')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89eb')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': '0',
                          'label': '0'
                        },
                        {
                          'value': '1',
                          'label': '1'
                        },
                        {
                          'value': '2',
                          'label': '2'
                        },
                        {
                          'value': '2+',
                          'label': '2+'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf297e6a0c3a9e59167c2f')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '31',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf30676a0c3a9e59167db5'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'How many serves of vegetables do you eat per day on average?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf30676a0c3a9e59167dba')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf30676a0c3a9e59167db9')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf30676a0c3a9e59167db8')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf30676a0c3a9e59167db7')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89ea')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': '0',
                          'label': '0'
                        },
                        {
                          'value': '1',
                          'label': '1'
                        },
                        {
                          'value': '2',
                          'label': '2'
                        },
                        {
                          'value': '3',
                          'label': '3'
                        },
                        {
                          'value': '4',
                          'label': '4'
                        },
                        {
                          'value': '5',
                          'label': '5'
                        },
                        {
                          'value': '5+',
                          'label': '5+'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf30676a0c3a9e59167db6')
                  }
                ]
              },
              {
                'fieldType': 'Header',
                'fieldId': '32',
                '_id': ObjectId('58cf30676a0c3a9e59167db2'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Cancer Screening',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf30676a0c3a9e59167db4')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf30676a0c3a9e59167db3')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '33',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf30676a0c3a9e59167dac'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'When was your last skin cancer check?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf30676a0c3a9e59167db1')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf30676a0c3a9e59167db0')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf30676a0c3a9e59167daf')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf30676a0c3a9e59167dae')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89e9')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Never',
                          'label': 'Never'
                        },
                        {
                          'value': 'Less than 1 year ago',
                          'label': 'Less than 1 year ago'
                        },
                        {
                          'value': 'More than 1 year ago',
                          'label': 'More than 1 year ago'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf30676a0c3a9e59167dad')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '34',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf31a86a0c3a9e59167de8'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('58cf4c266a0c3a9e59167e15'),
                    'conditions': [
                      {
                        'field': '5',
                        'operator': '===',
                        'value': 'Female',
                        '_id': ObjectId('58cf4c266a0c3a9e59167e16')
                      },
                      {
                        'field': '4',
                        'operator': '>=',
                        'value': '1967-05-22T03:09:23.000Z',
                        '_id': ObjectId('5917cb5e5ee03d0004c8493a')
                      },
                      {
                        'field': '4',
                        'operator': '<=',
                        'value': '1999-06-22T03:12:44.000Z',
                        '_id': ObjectId('5917cb5e5ee03d0004c84939')
                      }
                    ],
                    'action': {
                      'setting': 'Required',
                      'value': true
                    }
                  },
                  {
                    'operator': 'all',
                    '_id': ObjectId('590c6b4480ae700004ab89d6'),
                    'conditions': [
                      {
                        'field': '4',
                        'operator': '>=',
                        'value': '1948-05-22T10:40:44.000Z',
                        '_id': ObjectId('591834925ee03d0004c8495c')
                      },
                      {
                        'field': '4',
                        'operator': '<=',
                        'value': '1999-05-22T10:42:01.000Z',
                        '_id': ObjectId('591834925ee03d0004c8495b')
                      },
                      {
                        'field': '5',
                        'operator': '===',
                        'value': 'Female',
                        '_id': ObjectId('5918dfd91408640ef73b1292')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'When was your last pap smear?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf31a86a0c3a9e59167ded')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf31a86a0c3a9e59167dec')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf31a86a0c3a9e59167deb')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf31a86a0c3a9e59167dea')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89e8')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Never',
                          'label': 'Never'
                        },
                        {
                          'value': 'Less than 2 years ago',
                          'label': 'Less than 2 years ago'
                        },
                        {
                          'value': 'More than 2 years ago',
                          'label': 'More than 2 years ago'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf31a86a0c3a9e59167de9')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '35',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf4b526a0c3a9e59167e09'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('5917c6b15ee03d0004c84935'),
                    'conditions': [
                      {
                        'field': '5',
                        'operator': '===',
                        'value': 'Female',
                        '_id': ObjectId('5917c6b15ee03d0004c84936')
                      },
                      {
                        'field': '4',
                        'operator': '===',
                        'value': '1968-05-21T22:39:40.000Z',
                        '_id': ObjectId('5918dd231408640ef73b1291')
                      }
                    ],
                    'action': {
                      'setting': 'Required',
                      'value': true
                    }
                  },
                  {
                    'operator': 'all',
                    '_id': ObjectId('5918dd231408640ef73b128e'),
                    'conditions': [
                      {
                        'field': '5',
                        'operator': '===',
                        'value': 'Female',
                        '_id': ObjectId('5918dd231408640ef73b1290')
                      },
                      {
                        'field': '4',
                        'operator': '<',
                        'value': '1967-05-21T22:37:35.000Z',
                        '_id': ObjectId('5918dd231408640ef73b128f')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'When was your last mammogram?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf4b526a0c3a9e59167e0e')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167e0d')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167e0c')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167e0b')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89e7')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Never',
                          'label': 'Never'
                        },
                        {
                          'value': 'Less than 2 years ago',
                          'label': 'Less than 2 years ago'
                        },
                        {
                          'value': 'More than 2 years ago',
                          'label': 'More than 2 years ago'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167e0a')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '36',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf4b526a0c3a9e59167e03'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('58cf4c266a0c3a9e59167e0f'),
                    'conditions': [
                      {
                        'field': '5',
                        'operator': '===',
                        'value': 'Male',
                        '_id': ObjectId('58cf4c266a0c3a9e59167e10')
                      },
                      {
                        'field': '4',
                        'operator': '<=',
                        'value': '1967-05-22T10:35:51.000Z',
                        '_id': ObjectId('591833205ee03d0004c8495a')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  },
                  {
                    'operator': 'all',
                    '_id': ObjectId('590ecd3134dc5c0004324ebf'),
                    'conditions': [
                      {
                        'field': '4',
                        'operator': '<=',
                        'value': '1967-05-22T02:31:09.000Z',
                        '_id': ObjectId('5917c1a75ee03d0004c8491d')
                      },
                      {
                        'field': '5',
                        'operator': '===',
                        'value': 'Male',
                        '_id': ObjectId('5918dd231408640ef73b128d')
                      }
                    ],
                    'action': {
                      'setting': 'Required',
                      'value': true
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'When was your last PSA or prostate exam?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf4b526a0c3a9e59167e08')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167e07')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167e06')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167e05')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89e6')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Never',
                          'label': 'Never'
                        },
                        {
                          'value': 'Less than 1 year ago',
                          'label': 'Less than 1 year ago'
                        },
                        {
                          'value': 'More than 1 year ago',
                          'label': 'More than 1 year ago'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167e04')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '81',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5917c3205ee03d0004c8491e'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('591e1b910d61f30004e08e55'),
                    'conditions': [
                      {
                        'field': '4',
                        'operator': '<=',
                        'value': '1967-05-21T14:00:00.000Z',
                        '_id': ObjectId('591e1b910d61f30004e08e56')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'When was your last bowel cancer screening',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5917c3205ee03d0004c84926')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c3205ee03d0004c84925')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c3205ee03d0004c84924')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c3205ee03d0004c84923')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c3205ee03d0004c84922')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Never',
                          'label': 'Never'
                        },
                        {
                          'value': 'Less than 2 years ago',
                          'label': 'Less than 2 years ago'
                        },
                        {
                          'value': 'More than 2 years ago',
                          'label': 'More than 2 years ago'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c3205ee03d0004c84921')
                  }
                ]
              },
              {
                'fieldType': 'Header',
                'fieldId': '37',
                '_id': ObjectId('58cf4b526a0c3a9e59167e00'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Mental Wellbeing',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf4b526a0c3a9e59167e02')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167e01')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '38',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf4b526a0c3a9e59167dfa'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592a4e85bc4f1d0004346a75'),
                    'conditions': [
                      {
                        'field': '48',
                        'operator': '===',
                        'value': 'Normal',
                        '_id': ObjectId('592a4e85bc4f1d0004346a78')
                      },
                      {
                        'field': '48',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592a4e85bc4f1d0004346a77')
                      },
                      {
                        'field': '48',
                        'operator': '===',
                        'value': 'Critically Abnormal',
                        '_id': ObjectId('592a4e85bc4f1d0004346a76')
                      }
                    ],
                    'action': {
                      'setting': 'Required',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Over the last few weeks, have you ever felt down or depressed or had less interest or pleasure in things you normally enjoy?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf4b526a0c3a9e59167dff')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167dfe')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167dfd')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167dfc')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89e2')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Yes',
                          'label': 'Yes'
                        },
                        {
                          'value': 'No',
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167dfb')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '40',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf4b526a0c3a9e59167dee'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592b58ff905e450004e096de'),
                    'conditions': [
                      {
                        'field': '48',
                        'operator': '===',
                        'value': 'Normal',
                        '_id': ObjectId('592b58ff905e450004e096e1')
                      },
                      {
                        'field': '48',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592b58ff905e450004e096e0')
                      },
                      {
                        'field': '48',
                        'operator': '===',
                        'value': 'Critically Abnormal',
                        '_id': ObjectId('592b58ff905e450004e096df')
                      }
                    ],
                    'action': {
                      'setting': 'Required',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Do you have any concerns about domestic violence?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf4b526a0c3a9e59167df3')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167df2')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167df1')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167df0')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89e0')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Yes',
                          'label': 'Yes'
                        },
                        {
                          'value': 'No',
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf4b526a0c3a9e59167def')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '78',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5917bf5d5ee03d0004c84908'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'In the last 4 weeks how often did you feel so nervous nothing could calm you down?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5917bf5d5ee03d0004c8490e')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917bf5d5ee03d0004c8490d')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917bf5d5ee03d0004c8490c')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917bf5d5ee03d0004c8490b')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917bf5d5ee03d0004c8490a')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'None of the time',
                          'label': 'None of the time'
                        },
                        {
                          'value': 'Some of the time',
                          'label': 'Some of the time'
                        },
                        {
                          'value': 'All of the time',
                          'label': 'All of the time'
                        }
                      ]
                    },
                    '_id': ObjectId('5917bf5d5ee03d0004c84909')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '82',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5917c4cb5ee03d0004c84927'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'In the last 4 weeks how often did you feel so sad that nothing could cheer you up?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5917c4cb5ee03d0004c8492d')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c4cb5ee03d0004c8492c')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c4cb5ee03d0004c8492b')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c4cb5ee03d0004c8492a')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c4cb5ee03d0004c84929')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'None of the time',
                          'label': 'None of the time'
                        },
                        {
                          'value': 'Some of the time',
                          'label': 'Some of the time'
                        },
                        {
                          'value': 'All of the time',
                          'label': 'All of the time'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c4cb5ee03d0004c84928')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '83',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5917c5e05ee03d0004c8492e'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'In the last 4 weeks how often did you feel worthless?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5917c5e05ee03d0004c84934')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c5e05ee03d0004c84933')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c5e05ee03d0004c84932')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c5e05ee03d0004c84931')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c5e05ee03d0004c84930')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'None of the time',
                          'label': 'None of the time'
                        },
                        {
                          'value': 'Some of the time',
                          'label': 'Some of the time'
                        },
                        {
                          'value': 'All of the time',
                          'label': 'All of the time'
                        }
                      ]
                    },
                    '_id': ObjectId('5917c5e05ee03d0004c8492f')
                  }
                ]
              },
              {
                'fieldType': 'Header',
                'fieldId': '84',
                '_id': ObjectId('5917d1575ee03d0004c84957'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Snoring Risk Factors',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5917d1575ee03d0004c84959')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c84958')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '86',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5917d1575ee03d0004c84949'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Do you often feel tired, fatigued, or sleepy during the daytime?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5917d1575ee03d0004c8494f')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c8494e')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c8494d')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c8494c')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c8494b')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Yes',
                          'label': 'Yes'
                        },
                        {
                          'value': 'No',
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c8494a')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '85',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5917d1575ee03d0004c84950'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Do you snore loudly?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5917d1575ee03d0004c84956')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c84955')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c84954')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c84953')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c84952')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Yes',
                          'label': 'Yes'
                        },
                        {
                          'value': 'No',
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c84951')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '87',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5917d1575ee03d0004c84942'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Has anyone observed you stop breathing during your sleep?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5917d1575ee03d0004c84948')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c84947')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c84946')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c84945')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c84944')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Yes',
                          'label': 'Yes'
                        },
                        {
                          'value': 'No',
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c84943')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '88',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5917d1575ee03d0004c8493b'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Do you have, or are you being treated for, high blood pressure?',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5917d1575ee03d0004c84941')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c84940')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c8493f')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c8493e')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c8493d')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Yes',
                          'label': 'Yes'
                        },
                        {
                          'value': 'No',
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5917d1575ee03d0004c8493c')
                  }
                ]
              },
              {
                'fieldType': 'Header',
                'fieldId': '89',
                '_id': ObjectId('591ac604603e4d0004216ac2'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Consent',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591ac604603e4d0004216ac4')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ac604603e4d0004216ac3')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '90',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('591ac604603e4d0004216abb'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'I agree to Dr Abhi Varshney conducting my annual health check and that my de-identified data may be combined with other data to provide an overview of workplace health.',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591ac604603e4d0004216ac1')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ac604603e4d0004216ac0')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ac604603e4d0004216abf')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ac604603e4d0004216abe')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ac604603e4d0004216abd')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Yes',
                          'label': 'Yes'
                        },
                        {
                          'value': 'No',
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591ac604603e4d0004216abc')
                  }
                ]
              }
            ]
          }
        ],
        'editGroups': [
          '58eda96d466ae5000404fcfd',
          '58eda99b466ae5000404fcfe',
          '58ed9f07466ae5000404fcf4'
        ],
        'viewGroups': []
      },
      {
        'name': 'Doctor',
        '_id': ObjectId('58cf2f7c6a0c3a9e59167d4d'),
        'restrictedGroups': [
          '58eafd7a9d37660794787af4',
          '58eafd9a9d37660794787af5',
          '58da56645e8a2408fa8971a2'
        ],
        'groups': [
          {
            '_id': ObjectId('58cf2f7c6a0c3a9e59167d4e'),
            'fields': [
              {
                'fieldType': 'Text',
                'fieldId': '76',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('590ec8bb34dc5c0004324e9e'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Company',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('590ec8bb34dc5c0004324eab')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591f87a039c3d000043810c1')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('590ec8bb34dc5c0004324eaa')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec8bb34dc5c0004324ea9')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec8bb34dc5c0004324ea8')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec8bb34dc5c0004324ea7')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec8bb34dc5c0004324ea6')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('590ec8bb34dc5c0004324ea5')
                  },
                  {
                    'value': false,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec8bb34dc5c0004324ea4')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec8bb34dc5c0004324ea3')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec8bb34dc5c0004324ea2')
                  },
                  {
                    'value': '',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('590ec8bb34dc5c0004324ea1')
                  },
                  {
                    'value': 'default',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec8bb34dc5c0004324ea0')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec8bb34dc5c0004324e9f')
                  }
                ]
              },
              {
                'fieldType': 'Header',
                'fieldId': '41',
                '_id': ObjectId('58cf2f7c6a0c3a9e59167da3'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Physical Measurements',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167da5')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167da4')
                  }
                ]
              },
              {
                'fieldType': 'Text',
                'fieldId': '42',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d95'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Height (in metres)',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167da2')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167da1')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167da0')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d9f')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d9e')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89df')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d9d')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d9c')
                  },
                  {
                    'value': true,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d9b')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d9a')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d99')
                  },
                  {
                    'value': '',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d98')
                  },
                  {
                    'value': 'numeric',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d97')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d96')
                  }
                ]
              },
              {
                'fieldType': 'Text',
                'fieldId': '43',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d87'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Weight (in KG)',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d94')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d93')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d92')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d91')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d90')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89de')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d8f')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d8e')
                  },
                  {
                    'value': true,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d8d')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d8c')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d8b')
                  },
                  {
                    'value': '',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d8a')
                  },
                  {
                    'value': 'numeric',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d89')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d88')
                  }
                ]
              },
              {
                'fieldType': 'Calculated',
                'fieldId': '190',
                'values': {
                  'default': 'NaN'
                },
                '_id': ObjectId('592f6c2137734000046bf344'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'BMI',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('592f6c2137734000046bf346')
                  },
                  {
                    'value': 'Math.round(VLOOKUP(\'Weight (in KG)\')/VLOOKUP(\'Height (in metres)\')/VLOOKUP(\'Height (in metres)\'))',
                    'label': 'Calculation',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'settings': {
                        'Auto Capitalize': 'none',
                        'Multi Line': true
                      }
                    },
                    '_id': ObjectId('592f6c2137734000046bf345')
                  }
                ]
              },
              {
                'fieldType': 'Calculated',
                'fieldId': '195',
                'values': {
                  'default': '0'
                },
                '_id': ObjectId('5933da7755fe6e0004213507'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Ideal weight',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5933da7755fe6e0004213509')
                  },
                  {
                    'value': 'Math.round(VLOOKUP (\'Height (in metres)\')*VLOOKUP (\'Height (in metres)\')*25)',
                    'label': 'Calculation',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'settings': {
                        'Auto Capitalize': 'none',
                        'Multi Line': true
                      }
                    },
                    '_id': ObjectId('5933da7755fe6e0004213508')
                  }
                ]
              },
              {
                'fieldType': 'Text',
                'fieldId': '44',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d79'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Waist Circumference (cm)',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d86')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d85')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d84')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d83')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d82')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89dd')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d81')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d80')
                  },
                  {
                    'value': true,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d7f')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d7e')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d7d')
                  },
                  {
                    'value': '',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d7c')
                  },
                  {
                    'value': 'numeric',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d7b')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d7a')
                  }
                ]
              },
              {
                'fieldType': 'Text',
                'fieldId': '75',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('590ec4b634dc5c0004324e90'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Neck circumference (cm)',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('590ec4b634dc5c0004324e9d')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591f87a039c3d000043810c0')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('590ec4b634dc5c0004324e9c')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec4b634dc5c0004324e9b')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec4b634dc5c0004324e9a')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec4b634dc5c0004324e99')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec4b634dc5c0004324e98')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('590ec4b634dc5c0004324e97')
                  },
                  {
                    'value': true,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec4b634dc5c0004324e96')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec4b634dc5c0004324e95')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec4b634dc5c0004324e94')
                  },
                  {
                    'value': '',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('590ec4b634dc5c0004324e93')
                  },
                  {
                    'value': 'numeric',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec4b634dc5c0004324e92')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('590ec4b634dc5c0004324e91')
                  }
                ]
              },
              {
                'fieldType': 'Text',
                'fieldId': '45',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d6b'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Blood pressure systolic',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d78')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d77')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d76')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d75')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d74')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89dc')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d73')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d72')
                  },
                  {
                    'value': true,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d71')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d70')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d6f')
                  },
                  {
                    'value': '',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d6e')
                  },
                  {
                    'value': 'numeric',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d6d')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d6c')
                  }
                ]
              },
              {
                'fieldType': 'Text',
                'fieldId': '46',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d5d'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Blood pressure diastolic',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d6a')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d69')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d68')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d67')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d66')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89db')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d65')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d64')
                  },
                  {
                    'value': true,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d63')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d62')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d61')
                  },
                  {
                    'value': '',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d60')
                  },
                  {
                    'value': 'numeric',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d5f')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d5e')
                  }
                ]
              },
              {
                'fieldType': 'Text',
                'fieldId': '47',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d4f'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Pulse',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d5c')
                  },
                  {
                    'value': '',
                    'label': 'Default',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d5b')
                  },
                  {
                    'value': '',
                    'label': 'Placeholder',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d5a')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d59')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d58')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590c714b80ae700004ab89da')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d57')
                  },
                  {
                    'value': '',
                    'label': 'Advanced Settings',
                    'fieldType': 'HeaderFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d56')
                  },
                  {
                    'value': true,
                    'label': 'Auto Correct',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d55')
                  },
                  {
                    'value': false,
                    'label': 'Multi Line',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d54')
                  },
                  {
                    'value': false,
                    'label': 'Select Text on Focus',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d53')
                  },
                  {
                    'value': '',
                    'label': 'Max Length',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d52')
                  },
                  {
                    'value': 'numeric',
                    'label': 'Keyboard Type',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'default',
                          'label': 'Default'
                        },
                        {
                          'value': 'numeric',
                          'label': 'Numeric'
                        },
                        {
                          'value': 'email-address',
                          'label': 'Email Address'
                        },
                        {
                          'value': 'phone-pad',
                          'label': 'Phone Pad'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d51')
                  },
                  {
                    'value': 'sentences',
                    'label': 'Auto Capitalize',
                    'fieldType': 'PickerView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'characters',
                          'label': 'All Caps'
                        },
                        {
                          'value': 'words',
                          'label': 'Each word'
                        },
                        {
                          'value': 'sentences',
                          'label': 'Sentences'
                        },
                        {
                          'value': 'none',
                          'label': 'None'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d50')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '92',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('591acc4b603e4d0004216ac5'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Bloods collected',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591acc4b603e4d0004216acb')
                  },
                  {
                    'value': true,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591acc4b603e4d0004216aca')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591acc4b603e4d0004216ac9')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591acc4b603e4d0004216ac8')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591acc4b603e4d0004216ac7')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Yes',
                          'label': 'Yes'
                        },
                        {
                          'value': 'No',
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591acc4b603e4d0004216ac6')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '93',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('591acedf603e4d0004216acc'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('591acedf603e4d0004216acd'),
                    'conditions': [
                      {
                        'field': '92',
                        'operator': '===',
                        'value': 'No',
                        '_id': ObjectId('591acedf603e4d0004216ace')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Patient reports bloods taken in last 3 months',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('591acedf603e4d0004216ad4')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591acedf603e4d0004216ad3')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591acedf603e4d0004216ad2')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591acedf603e4d0004216ad1')
                  },
                  {
                    'value': true,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591acedf603e4d0004216ad0')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Yes',
                          'label': 'Yes'
                        },
                        {
                          'value': 'No',
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591acedf603e4d0004216acf')
                  }
                ]
              }
            ]
          }
        ],
        'editGroups': [
          '58eda99b466ae5000404fcfe',
          '58ed9f07466ae5000404fcf4',
          '58eda96d466ae5000404fcfd'
        ],
        'viewGroups': [
          '58eda99b466ae5000404fcfe',
          '58eda9b0466ae5000404fcff',
          '58ed9f07466ae5000404fcf4',
          '58eda96d466ae5000404fcfd'
        ]
      },
      {
        'name': 'Pathology',
        '_id': ObjectId('58cf2f7c6a0c3a9e59167d09'),
        'restrictedGroups': [
          '58eafd9a9d37660794787af5',
          '58da56645e8a2408fa8971a2'
        ],
        'groups': [
          {
            '_id': ObjectId('58cf2f7c6a0c3a9e59167d0a'),
            'fields': [
              {
                'fieldType': 'QuickPick',
                'fieldId': '48',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d47'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Red cell count',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d4c')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d4b')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d4a')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d49')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590db34534dc5c0004324e80')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Normal',
                          'label': 'Normal'
                        },
                        {
                          'value': 'Abnormal',
                          'label': 'Abnormal'
                        },
                        {
                          'value': 'Critically Abnormal',
                          'label': 'Critically Abnormal'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d48')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '49',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d41'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'White cell count',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d46')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d45')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d44')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d43')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590db34534dc5c0004324e7f')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Normal',
                          'label': 'Normal'
                        },
                        {
                          'value': 'Abnormal',
                          'label': 'Abnormal'
                        },
                        {
                          'value': 'Critically abnormal',
                          'label': 'Critically abnormal'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d42')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '50',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d3b'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Platelet Count',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d40')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d3f')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d3e')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d3d')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590db34534dc5c0004324e7e')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Normal',
                          'label': 'Normal'
                        },
                        {
                          'value': 'Abnormal',
                          'label': 'Abnormal'
                        },
                        {
                          'value': 'Critically abnormal',
                          'label': 'Critically abnormal'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d3c')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '51',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d35'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Kidney Function',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d3a')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d39')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d38')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d37')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590db34534dc5c0004324e7d')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Normal',
                          'label': 'Normal'
                        },
                        {
                          'value': 'Abnormal',
                          'label': 'Abnormal'
                        },
                        {
                          'value': 'Critically abnormal',
                          'label': 'Critically abnormal'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d36')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '52',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d2f'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Liver Enzymes',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d34')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d33')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d32')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d31')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590db34534dc5c0004324e7c')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Normal',
                          'label': 'Normal'
                        },
                        {
                          'value': 'Abnormal',
                          'label': 'Abnormal'
                        },
                        {
                          'value': 'Critically abnormal',
                          'label': 'Critically abnormal'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d30')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '53',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d29'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Glucose Levels',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d2e')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d2d')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d2c')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d2b')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590db34534dc5c0004324e7b')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Normal',
                          'label': 'Normal'
                        },
                        {
                          'value': 'Abnormal',
                          'label': 'Abnormal'
                        },
                        {
                          'value': 'Critically abnormal',
                          'label': 'Critically abnormal'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d2a')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '54',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d23'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Thyroid Function',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d28')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d27')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d26')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d25')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590db34534dc5c0004324e7a')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Normal',
                          'label': 'Normal'
                        },
                        {
                          'value': 'Abnormal',
                          'label': 'Abnormal'
                        },
                        {
                          'value': 'Critically abnormal',
                          'label': 'Critically abnormal'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d24')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '55',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d1d'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Iron Levels',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d22')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d21')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d20')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d1f')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590db34534dc5c0004324e79')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Normal',
                          'label': 'Normal'
                        },
                        {
                          'value': 'Abnormal',
                          'label': 'Abnormal'
                        },
                        {
                          'value': 'Critically abnormal',
                          'label': 'Critically abnormal'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d1e')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '56',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d17'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'B12',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d1c')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d1b')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d1a')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d19')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590db34534dc5c0004324e78')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Normal',
                          'label': 'Normal'
                        },
                        {
                          'value': 'Abnormal',
                          'label': 'Abnormal'
                        },
                        {
                          'value': 'Critically abnormal',
                          'label': 'Critically abnormal'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d18')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '57',
                'values': {
                  'default': null
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d11'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Cholesterol',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d16')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d15')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d14')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d13')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590db34534dc5c0004324e77')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Normal',
                          'label': 'Normal'
                        },
                        {
                          'value': 'Abnormal',
                          'label': 'Abnormal'
                        },
                        {
                          'value': 'Critically abnormal',
                          'label': 'Critically abnormal'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d12')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '99',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a1b7ef5386300044f6e9d'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Vitamin D',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('592a1b7ef5386300044f6ea3')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a1b7ef5386300044f6ea2')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a1b7ef5386300044f6ea1')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a1b7ef5386300044f6ea0')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a1b7ef5386300044f6e9f')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Normal',
                          'label': 'Normal'
                        },
                        {
                          'value': 'Abnormal',
                          'label': 'Abnormal'
                        },
                        {
                          'value': 'Critically Abnormal',
                          'label': 'Critically Abnormal'
                        }
                      ]
                    },
                    '_id': ObjectId('592a1b7ef5386300044f6e9e')
                  }
                ]
              },
              {
                'fieldType': 'QuickPick',
                'fieldId': '58',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58cf2f7c6a0c3a9e59167d0b'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Other Abnormal',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d10')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d0f')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d0e')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d0d')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('590db34534dc5c0004324e76')
                  },
                  {
                    'value': false,
                    'label': 'Options',
                    'fieldType': 'ListFieldView',
                    'extraProps': {
                      'values': [
                        {
                          'value': 'Nil',
                          'label': 'Nil'
                        },
                        {
                          'value': 'Abnormal',
                          'label': 'Abnormal'
                        },
                        {
                          'value': 'Critically abnormal',
                          'label': 'Critically abnormal'
                        }
                      ]
                    },
                    '_id': ObjectId('58cf2f7c6a0c3a9e59167d0c')
                  }
                ]
              }
            ]
          }
        ],
        'editGroups': [
          '58eda9b0466ae5000404fcff',
          '58ed9f07466ae5000404fcf4'
        ],
        'viewGroups': [
          '58eda99b466ae5000404fcfe'
        ]
      },
      {
        'name': 'Advice',
        '_id': ObjectId('58eb26f21f7295095bb3a272'),
        'groups': [
          {
            '_id': ObjectId('58eb26f21f7295095bb3a273'),
            'fields': [
              {
                'fieldType': 'Header',
                'fieldId': '100',
                '_id': ObjectId('592a5f6fbc4f1d0004346a9b'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Things you are doing which meet or exceed the current recommendations for a healthy lifestyle:',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a9d')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a5f6fbc4f1d0004346a9c')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '64',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('58edbf8b466ae5000404fd12'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('58edbf8b466ae5000404fd13'),
                    'conditions': [
                      {
                        'field': '11',
                        'operator': '===',
                        'value': 'No',
                        '_id': ObjectId('58edbf8b466ae5000404fd14')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You do not currently smoke. Smoking is a risk factor for cardiovascular disease, stroke and cancer. Maintaining a smoke free lifestyle is amongst the best ways to maintain your health...and save money.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('58edbf8b466ae5000404fd16')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('58edbf8b466ae5000404fd15')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('590ecb4134dc5c0004324ebc')
                  },
                  {
                    'value': '#050000',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('590ecb4134dc5c0004324ebb')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '106',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a5f6fbc4f1d0004346a94'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a95'),
                    'conditions': [
                      {
                        'field': '14',
                        'operator': '===',
                        'value': 'No',
                        '_id': ObjectId('592a5f6fbc4f1d0004346a96')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You have indicated that you do not drink. Not drinking alcohol is a healthy choice.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a5f6fbc4f1d0004346a9a')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a5f6fbc4f1d0004346a99')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a98')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a97')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '107',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a5f6fbc4f1d0004346a8b'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a8c'),
                    'conditions': [
                      {
                        'field': '15',
                        'operator': '===',
                        'value': '5',
                        '_id': ObjectId('592a5f6fbc4f1d0004346a8f')
                      },
                      {
                        'field': '15',
                        'operator': '<=',
                        'value': '4',
                        '_id': ObjectId('592a5f6fbc4f1d0004346a8e')
                      },
                      {
                        'field': '15',
                        'operator': '===',
                        'value': '3',
                        '_id': ObjectId('592a5f6fbc4f1d0004346a8d')
                      },
                      {
                        'field': '15',
                        'operator': '===',
                        'value': '2',
                        '_id': ObjectId('5934d792793f09000493bc9c')
                      },
                      {
                        'field': '15',
                        'operator': '===',
                        'value': '1',
                        '_id': ObjectId('5934d792793f09000493bc9b')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You have indicated that you do currently drink but that you do not drink more than 5 days per week. This puts your daily consumption within the current safe drinking guidelines. The current guidelines recommend having at least 2 alcohol free days per week.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a5f6fbc4f1d0004346a93')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a5f6fbc4f1d0004346a92')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a91')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a90')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '196',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5934d8d3477a9000049f4cf1'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('5934d8d3477a9000049f4cf2'),
                    'conditions': [
                      {
                        'field': '77',
                        'operator': '===',
                        'value': '1 - 4',
                        '_id': ObjectId('5934d8d3477a9000049f4cf3')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You have indicated that you do currently drink but you do not consume more than 4 standard drinks in any 1 session. This puts you within the healthy drinking guidelines. The guidelines recommend you consume no more than 4 standard drinks in any 1 session.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('5934d8d3477a9000049f4cf7')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5934d8d3477a9000049f4cf6')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('5934d8d3477a9000049f4cf5')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('5934d8d3477a9000049f4cf4')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '193',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5933b475cb4fe00004e1b64d'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('5933b475cb4fe00004e1b64e'),
                    'conditions': [
                      {
                        'field': '31',
                        'operator': '===',
                        'value': '5',
                        '_id': ObjectId('5933b475cb4fe00004e1b650')
                      },
                      {
                        'field': '31',
                        'operator': '===',
                        'value': '5+',
                        '_id': ObjectId('5933b475cb4fe00004e1b64f')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You currently eat 5 or more serves of vegetables per day. Well done! The Australian Nutritional Guidelines recommend eating at least 5 serves of vegetables or more per day.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('5933b475cb4fe00004e1b654')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5933b475cb4fe00004e1b653')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('5933b475cb4fe00004e1b652')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('5933b475cb4fe00004e1b651')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '109',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7516bc4f1d0004346ad7'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592a7516bc4f1d0004346ad8'),
                    'conditions': [
                      {
                        'field': '21',
                        'operator': '===',
                        'value': '2',
                        '_id': ObjectId('592a7516bc4f1d0004346ada')
                      },
                      {
                        'field': '21',
                        'operator': '===',
                        'value': '2+',
                        '_id': ObjectId('592a7516bc4f1d0004346ad9')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You currently eat 2 or more serves of fruit per day. Keep it up! The Australian Nutrition Guidelines recommend eating 2 or more serves of fruit per day to maintain a healthy diet.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346ade')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346add')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346adc')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346adb')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '108',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a5f6fbc4f1d0004346a79'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a7a'),
                    'conditions': [
                      {
                        'field': '19',
                        'operator': '===',
                        'value': '150+',
                        '_id': ObjectId('592a5f6fbc4f1d0004346a7b')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You do more than 150 minutes of planned exercise per week. Keep it up! ',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a5f6fbc4f1d0004346a7f')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a5f6fbc4f1d0004346a7e')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a7d')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a7c')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '111',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7516bc4f1d0004346acb'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a7516bc4f1d0004346acc'),
                    'conditions': [
                      {
                        'field': '33',
                        'operator': '===',
                        'value': 'Less than 1 year ago',
                        '_id': ObjectId('592a7516bc4f1d0004346acd')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your skin cancer screening is up to date. It is recommended that you have a full skin check once a year, or more regularly if you have been advised by a doctor. Skin cancer is one of the most prevalent cancers in Australia so it is important to maintain regular skin checks and to monitor your own moles for any changes in between theses visits.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346ad1')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346ad0')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346acf')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346ace')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '112',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7516bc4f1d0004346ac4'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a7516bc4f1d0004346ac5'),
                    'conditions': [
                      {
                        'field': '34',
                        'operator': '===',
                        'value': 'Less than 2 years ago',
                        '_id': ObjectId('592a7516bc4f1d0004346ac6')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your Pap smear screening is up to date. It is recommended that you have a Pap smear at least every 2 years, or more often if recommended by your doctor, from the age of 18 once you become sexually active, until you reach 69. Asymptomatic cervical screening is the best form of early detection and treatment for cervical cancer.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346aca')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346ac9')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346ac8')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346ac7')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '113',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7516bc4f1d0004346abd'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a7516bc4f1d0004346abe'),
                    'conditions': [
                      {
                        'field': '35',
                        'operator': '===',
                        'value': 'Less than 2 years ago',
                        '_id': ObjectId('592a7516bc4f1d0004346abf')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your mammogram screening is up to date. It is recommended that you have a mammogram at least every 2 years (or more frequently if advised by your doctor) from the age of 50 to the age of 70. Mammograms are a vital way of detecting any changes which may signal breast cancer. Asymptomatic screening for breast cancer allows the earliest detection and best treatment options. ',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346ac3')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346ac2')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346ac1')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346ac0')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '114',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7516bc4f1d0004346ab6'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a7516bc4f1d0004346ab7'),
                    'conditions': [
                      {
                        'field': '36',
                        'operator': '===',
                        'value': 'Less than 1 year ago',
                        '_id': ObjectId('592a7516bc4f1d0004346ab8')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your PSA / prostate screening is up to date. A prostate check is recommended every year from the age of 50 to the age of 75 for early detection of prostate cancer. Yearly asymptomatic prostate screening allows for early detection and the best treatment options for the management of prostate issues.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346abc')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346abb')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346aba')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346ab9')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '115',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7516bc4f1d0004346aaf'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a7516bc4f1d0004346ab0'),
                    'conditions': [
                      {
                        'field': '81',
                        'operator': '===',
                        'value': 'Less than 2 years ago',
                        '_id': ObjectId('592a7516bc4f1d0004346ab1')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your bowel cancer screening is up to date. It is recommended that you have bowel cancer screening every 2 years from the age of 50 to the age of 75. Asymptomatic bowel cancer screening allows for the greatest chance of early detection and treatment of bowel cancer.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346ab5')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346ab4')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346ab3')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346ab2')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '116',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7516bc4f1d0004346aa6'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a7516bc4f1d0004346aa7'),
                    'conditions': [
                      {
                        'field': '38',
                        'operator': '===',
                        'value': 'No',
                        '_id': ObjectId('592a7516bc4f1d0004346aaa')
                      },
                      {
                        'field': '82',
                        'operator': '===',
                        'value': 'None of the time',
                        '_id': ObjectId('592a7516bc4f1d0004346aa9')
                      },
                      {
                        'field': '78',
                        'operator': '===',
                        'value': 'None of the time',
                        '_id': ObjectId('592a7516bc4f1d0004346aa8')
                      },
                      {
                        'field': '83',
                        'operator': '===',
                        'value': 'None of the time',
                        '_id': ObjectId('5933dbb755fe6e000421350a')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You currently indicate you have no issues with depression or your mental health. As mental health issues can occur at any time, please be aware that there are a number of resources available to assist you should you need help.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346aae')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346aad')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346aac')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346aab')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '117',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7516bc4f1d0004346a9e'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a7516bc4f1d0004346a9f'),
                    'conditions': [
                      {
                        'field': '5',
                        'operator': '===',
                        'value': 'Female',
                        '_id': ObjectId('592a7516bc4f1d0004346aa1')
                      },
                      {
                        'field': '44',
                        'operator': '<=',
                        'value': '80',
                        '_id': ObjectId('592a7516bc4f1d0004346aa0')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your waist circumference is in the healthy range. An increased waist circumference puts you at risk of developing diabetes, which is associated with a number of complications and health issues. It is recommended that you maintain a waist circumference of 80 cm or less.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346aa5')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7516bc4f1d0004346aa4')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346aa3')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7516bc4f1d0004346aa2')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '194',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5933b475cb4fe00004e1b645'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('5933b475cb4fe00004e1b646'),
                    'conditions': [
                      {
                        'field': '44',
                        'operator': '<',
                        'value': '94',
                        '_id': ObjectId('5933b475cb4fe00004e1b648')
                      },
                      {
                        'field': '5',
                        'operator': '===',
                        'value': 'Male',
                        '_id': ObjectId('5933b475cb4fe00004e1b647')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your waist circumference is in the healthy range. An increased waist circumference is linked to a number of health issues and it is recommended that men have a waist circumference of 94cm or less. We recommend that you maintain your waist circumference at or less than 94cm.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('5933b475cb4fe00004e1b64c')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5933b475cb4fe00004e1b64b')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('5933b475cb4fe00004e1b64a')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('5933b475cb4fe00004e1b649')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '118',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7cedbc4f1d0004346b12'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a7cedbc4f1d0004346b13'),
                    'conditions': [
                      {
                        'field': '45',
                        'operator': '<=',
                        'value': '140',
                        '_id': ObjectId('592a7cedbc4f1d0004346b15')
                      },
                      {
                        'field': '46',
                        'operator': '<=',
                        'value': '90',
                        '_id': ObjectId('592a7cedbc4f1d0004346b14')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your blood pressure is within the healthy range. It is important to maintain a healthy blood pressure as increased blood pressure is a silent risk factor for problems such as heart attack and stroke.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346b19')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346b18')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346b17')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346b16')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '198',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('593512c2477a9000049f4d13'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('593512c2477a9000049f4d14'),
                    'conditions': [
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '25',
                        '_id': ObjectId('593512c2477a9000049f4d15')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '24',
                        '_id': ObjectId('59353e53beee2d00041f24c2')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '23',
                        '_id': ObjectId('59353e53beee2d00041f24c1')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '22',
                        '_id': ObjectId('59353e53beee2d00041f24c0')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '21',
                        '_id': ObjectId('59353e53beee2d00041f24bf')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '20',
                        '_id': ObjectId('59353e53beee2d00041f24be')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '19',
                        '_id': ObjectId('59353e53beee2d00041f24bd')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your BMI is currently in the healthy range. Current guidelines recommend you maintain a BMI of between 19-25.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('593512c2477a9000049f4d19')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('593512c2477a9000049f4d18')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('593512c2477a9000049f4d17')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('593512c2477a9000049f4d16')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '188',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ea62513a6f300044aa436'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ea62513a6f300044aa437'),
                    'conditions': [
                      {
                        'field': '47',
                        'operator': '<=',
                        'value': '90',
                        '_id': ObjectId('592ea62513a6f300044aa438')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your pulse is within the recommended range.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ea62513a6f300044aa43c')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ea62513a6f300044aa43b')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ea62513a6f300044aa43a')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ea62513a6f300044aa439')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '142',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592aa017bc4f1d0004346b7f'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346c22'),
                    'conditions': [
                      {
                        'field': '48',
                        'operator': '===',
                        'value': 'Normal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346c23')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your red cell count is within the normal range. Red cells are important for carrying oxygen around the body.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592aa017bc4f1d0004346b83')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592aa017bc4f1d0004346b82')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592aa017bc4f1d0004346b81')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592aa017bc4f1d0004346b80')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '152',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346c0d'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346c0e'),
                    'conditions': [
                      {
                        'field': '49',
                        'operator': '===',
                        'value': 'Normal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346c0f')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your white cell count was within the normal range. White cells are important for helping fight infection.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346c13')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346c12')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346c11')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346c10')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '157',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346bf3'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bf4'),
                    'conditions': [
                      {
                        'field': '50',
                        'operator': '===',
                        'value': 'Normal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346bf5')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your platelet count was within the normal range. Platelets are important for normal blood clotting.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bf9')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bf8')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bf7')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bf6')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '161',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346bde'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bdf'),
                    'conditions': [
                      {
                        'field': '51',
                        'operator': '===',
                        'value': 'Normal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346be0')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your kidney function was within the normal range. Your kidneys are important for a number of factors including filtering the body\'s waste and blood pressure control.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346be4')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346be3')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346be2')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346be1')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '164',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346bc9'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bca'),
                    'conditions': [
                      {
                        'field': '52',
                        'operator': '===',
                        'value': 'Normal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346bcb')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your liver enzymes were within the normal range. Your liver is important for a large number of functions including the processing of medications and alcohol.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bcf')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bce')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bcd')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bcc')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '167',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346cae'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346caf'),
                    'conditions': [
                      {
                        'field': '53',
                        'operator': '===',
                        'value': 'Normal',
                        '_id': ObjectId('592abab6bc4f1d0004346cb0')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your glucose levels were normal. High glucose levels may reflect diabetes so regular monitoring of this is important.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346cb4')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346cb3')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346cb2')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346cb1')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '170',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c99'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c9a'),
                    'conditions': [
                      {
                        'field': '54',
                        'operator': '===',
                        'value': 'Normal',
                        '_id': ObjectId('592abab6bc4f1d0004346c9b')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your thyroid function levels were normal. The thyroid is the "master switch" for your metabolism and if abnormal may cause tiredness, weight changes and other physical changes. ',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c9f')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c9e')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c9d')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c9c')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '173',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c84'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c85'),
                    'conditions': [
                      {
                        'field': '55',
                        'operator': '===',
                        'value': 'Normal',
                        '_id': ObjectId('592abab6bc4f1d0004346c86')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your iron levels were normal. Abnormal iron levels often result in tiredness. Maintaining these levels within the normal range is good for your overall health.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c8a')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c89')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c88')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c87')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '176',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c6f'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c70'),
                    'conditions': [
                      {
                        'field': '56',
                        'operator': '===',
                        'value': 'Normal',
                        '_id': ObjectId('592abab6bc4f1d0004346c71')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your B12 levels were normal. Low B12 often results in tiredness and a lack of energy so maintaining B12 levels is good for overall health.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c75')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c74')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c73')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c72')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '180',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c55'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c56'),
                    'conditions': [
                      {
                        'field': '57',
                        'operator': '===',
                        'value': 'Normal',
                        '_id': ObjectId('592abab6bc4f1d0004346c57')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your cholesterol was within the normal range. High cholesterol is a silent risk factor for heart attack and stroke and is affected by diet and exercise. Maintaining a good cholesterol level is important for maintaining your overall health.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c5b')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c5a')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c59')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c58')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '183',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c40'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c41'),
                    'conditions': [
                      {
                        'field': '99',
                        'operator': '===',
                        'value': 'Normal',
                        '_id': ObjectId('592abab6bc4f1d0004346c42')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your vitamin D level was normal. Vitamin D is absorbed from the sun and helps maintain strong, healthy bones. ',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c46')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c45')
                  },
                  {
                    'value': '#4bae4f',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c44')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c43')
                  }
                ]
              },
              {
                'fieldType': 'Header',
                'fieldId': '101',
                '_id': ObjectId('592a5f6fbc4f1d0004346a88'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Areas you can improve to better look after your health. By addressing your risk factors below you could significantly improve your overall health:',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a8a')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a5f6fbc4f1d0004346a89')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '120',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7cedbc4f1d0004346b08'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592a7cedbc4f1d0004346b09'),
                    'conditions': [
                      {
                        'field': '77',
                        'operator': '===',
                        'value': '5 - 7',
                        '_id': ObjectId('592a7cedbc4f1d0004346b0c')
                      },
                      {
                        'field': '77',
                        'operator': '===',
                        'value': '8 - 10',
                        '_id': ObjectId('5935441fbeee2d00041f24cd')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'The most alcohol you drink in 1 session is greater than the recommended Guidelines. The guidelines suggest that you should drink no more than 4 standard drinks in any 1 session and that you have at least 2 alcohol free days per week. ',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346b10')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346b0f')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346b0e')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346b0d')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '201',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('59352242477a9000049f4d21'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('59352242477a9000049f4d22'),
                    'conditions': [
                      {
                        'field': '15',
                        'operator': '===',
                        'value': '6',
                        '_id': ObjectId('59352242477a9000049f4d23')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You indicate that you currently drink 6 days per week. This puts you outside the safe drinking limits which recommend that you have at least 2 alcohol free days per week each week. It is recommended you have at least 2 alcohol free days per week to stay within the safe drinking limits.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('59352242477a9000049f4d27')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('59352242477a9000049f4d26')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('59352242477a9000049f4d25')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('59352242477a9000049f4d24')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '121',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7cedbc4f1d0004346aff'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592a7cedbc4f1d0004346b00'),
                    'conditions': [
                      {
                        'field': '19',
                        'operator': '===',
                        'value': '91-120',
                        '_id': ObjectId('592a7cedbc4f1d0004346b03')
                      },
                      {
                        'field': '19',
                        'operator': '===',
                        'value': '61-90',
                        '_id': ObjectId('592a7cedbc4f1d0004346b02')
                      },
                      {
                        'field': '19',
                        'operator': '===',
                        'value': '31-60',
                        '_id': ObjectId('592a7cedbc4f1d0004346b01')
                      },
                      {
                        'field': '19',
                        'operator': '===',
                        'value': '121-150',
                        '_id': ObjectId('5934d93b477a9000049f4cf8')
                      },
                      {
                        'field': '19',
                        'operator': '===',
                        'value': '<30',
                        '_id': ObjectId('59353724477a9000049f4d2f')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You indicated that you currently exercise between 31 to 150 minutes per week. While it is great that you are making time for exercise, we recommend that you try to increase your planned exercise to at least 30 minutes per day, 5 days a week, to be in line with current guidelines.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346b07')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346b06')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346b05')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346b04')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '122',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7cedbc4f1d0004346af8'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a7cedbc4f1d0004346af9'),
                    'conditions': [
                      {
                        'field': '21',
                        'operator': '===',
                        'value': '1',
                        '_id': ObjectId('592a7cedbc4f1d0004346afa')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You currently eat fewer serves of fruit than recommended. The Australian Nutrition Guidelines recommend eating at least 2 serves of fruit each day to maintain a healthy diet. We recommend you increase your fruit intake to at least 2 serves per day.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346afe')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346afd')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346afc')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346afb')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '123',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7cedbc4f1d0004346adf'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592a7cedbc4f1d0004346ae0'),
                    'conditions': [
                      {
                        'field': '31',
                        'operator': '===',
                        'value': '4',
                        '_id': ObjectId('592a7cedbc4f1d0004346ae4')
                      },
                      {
                        'field': '31',
                        'operator': '===',
                        'value': '3',
                        '_id': ObjectId('592a7cedbc4f1d0004346ae3')
                      },
                      {
                        'field': '31',
                        'operator': '===',
                        'value': '2',
                        '_id': ObjectId('592a7cedbc4f1d0004346ae2')
                      },
                      {
                        'field': '31',
                        'operator': '===',
                        'value': '1',
                        '_id': ObjectId('592a7cedbc4f1d0004346ae1')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You currently eat fewer serves of vegetables than recommended. The Australian Nutrition Guidelines recommend eating at least 5 serves of vegetables each day to maintain a healthy diet. We recommend you increase your vegetable intake to at least 5 serves per day.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346ae8')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346ae7')
                  },
                  {
                    'value': '#fcc803',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346ae6')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346ae5')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '124',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7cedbc4f1d0004346ae9'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592a7cedbc4f1d0004346aeb'),
                    'conditions': [
                      {
                        'field': '33',
                        'operator': '===',
                        'value': 'More than 1 year ago',
                        '_id': ObjectId('592a7cedbc4f1d0004346aec')
                      },
                      {
                        'field': '33',
                        'operator': '===',
                        'value': 'Never',
                        '_id': ObjectId('5933e4cc55fe6e000421350f')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You are overdue for a skin check. Skin cancer rates in Australia are particularly high so it is recommended that you have a skin check yearly and that you regularly check your own skin for changes between screening. We recommend that you have a skin check as early detection and treatment leads to more positive outcomes where skin cancers are detected.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346af0')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346aef')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346aee')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346aed')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '125',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a80f3bc4f1d0004346b1a'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592a80f3bc4f1d0004346b1b'),
                    'conditions': [
                      {
                        'field': '34',
                        'operator': '===',
                        'value': 'More than 2 years ago',
                        '_id': ObjectId('592a80f3bc4f1d0004346b1c')
                      },
                      {
                        'field': '34',
                        'operator': '===',
                        'value': 'Never',
                        '_id': ObjectId('5933e40255fe6e000421350b')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You may not be up to date with your Pap smear. It is recommended that you have a Pap smear every 2 years starting at 18 or when you become sexually active until the age of 69, or more often if recommended by your doctor. Asymptomatic cervical screening assist early detection and treatment of cervical cancer. ',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a80f3bc4f1d0004346b20')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a80f3bc4f1d0004346b1f')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a80f3bc4f1d0004346b1e')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a80f3bc4f1d0004346b1d')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '126',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a90b5bc4f1d0004346b78'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592a90b5bc4f1d0004346b79'),
                    'conditions': [
                      {
                        'field': '35',
                        'operator': '===',
                        'value': 'More than 2 years ago',
                        '_id': ObjectId('592a90b5bc4f1d0004346b7a')
                      },
                      {
                        'field': '35',
                        'operator': '===',
                        'value': 'Never',
                        '_id': ObjectId('5933e4cc55fe6e000421350e')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You are not up to date with your breast cancer screening. It is recommended that you have a mammogram at least every 2 years from the age of 50 to age 70, or more often if recommended by your doctor. Asymptomatic breast cancer screening can assist in early detection and treatment of breast cancer. We recommend you book in for a mammogram as soon as possible.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b7e')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b7d')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b7c')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b7b')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '128',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a90b5bc4f1d0004346b6a'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592a90b5bc4f1d0004346b6b'),
                    'conditions': [
                      {
                        'field': '81',
                        'operator': '===',
                        'value': 'More than 2 years ago',
                        '_id': ObjectId('592a90b5bc4f1d0004346b6c')
                      },
                      {
                        'field': '81',
                        'operator': '===',
                        'value': 'Never',
                        '_id': ObjectId('5933e4cc55fe6e000421350d')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your bowel cancer screening is overdue. It is recommended that you have bowel cancer screening at least every 2 years from that age of 50 to the age of 75. Asymptomatic bowel cancer screening can lead to early detection and treatment of bowel cancer, leading to more positive outcomes. We recommend you book in for a bowel cancer screening as soon as possible ',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b70')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b6f')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b6e')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b6d')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '127',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a90b5bc4f1d0004346b71'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592a90b5bc4f1d0004346b72'),
                    'conditions': [
                      {
                        'field': '36',
                        'operator': '===',
                        'value': 'More than 1 year ago',
                        '_id': ObjectId('592a90b5bc4f1d0004346b73')
                      },
                      {
                        'field': '36',
                        'operator': '===',
                        'value': 'Never',
                        '_id': ObjectId('5933e4cc55fe6e000421350c')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your PSA / prostate cancer screening is not up to date. It is recommended that you have yearly prostate cancer screening from the age of 50. Asymptomatic screening for prostate cancer can lead to early detection and treatment.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b77')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b76')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b75')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b74')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '129',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a90b5bc4f1d0004346b63'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592a90b5bc4f1d0004346b64'),
                    'conditions': [
                      {
                        'field': '38',
                        'operator': '===',
                        'value': 'Yes',
                        '_id': ObjectId('592a90b5bc4f1d0004346b65')
                      },
                      {
                        'field': '78',
                        'operator': '===',
                        'value': 'Some of the time',
                        '_id': ObjectId('5934da8a477a9000049f4cff')
                      },
                      {
                        'field': '78',
                        'operator': '===',
                        'value': 'All of the time',
                        '_id': ObjectId('5934da8a477a9000049f4cfe')
                      },
                      {
                        'field': '82',
                        'operator': '===',
                        'value': 'Some of the time',
                        '_id': ObjectId('5934da8a477a9000049f4cfd')
                      },
                      {
                        'field': '82',
                        'operator': '===',
                        'value': 'All of the time',
                        '_id': ObjectId('5934da8a477a9000049f4cfc')
                      },
                      {
                        'field': '83',
                        'operator': '===',
                        'value': 'Some of the time',
                        '_id': ObjectId('5934da8a477a9000049f4cfb')
                      },
                      {
                        'field': '83',
                        'operator': '===',
                        'value': 'All of the time',
                        '_id': ObjectId('5934da8a477a9000049f4cfa')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You indicated that you have recently had some feelings of being "down" or that you have lost interest in doing things you normally enjoy. While periods of sadness are often normal in certain phases of life it is important to recognise when you may be experiencing greater difficulties. At these times it is good to remember there are a number of resources available to you and that you should continue to talk to your health professionals who may be able to assist. ',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b69')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b68')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b67')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b66')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '132',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a90b5bc4f1d0004346b46'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592a90b5bc4f1d0004346b47'),
                    'conditions': [
                      {
                        'field': '86',
                        'operator': '===',
                        'value': 'Yes',
                        '_id': ObjectId('592a90b5bc4f1d0004346b4b')
                      },
                      {
                        'field': '85',
                        'operator': '===',
                        'value': 'Yes',
                        '_id': ObjectId('592a90b5bc4f1d0004346b4a')
                      },
                      {
                        'field': '87',
                        'operator': '===',
                        'value': 'Yes',
                        '_id': ObjectId('592a90b5bc4f1d0004346b49')
                      },
                      {
                        'field': '88',
                        'operator': '===',
                        'value': 'Yes',
                        '_id': ObjectId('592a90b5bc4f1d0004346b48')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You indicated that you may feel tired during the day, snore loudly, have been observed stopping breathing in your sleep, or have high blood pressure. Each of these items may be Indicators for the development of sleep apnoea. We recommend you discuss this further with your doctor.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b4f')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b4e')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b4d')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b4c')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '137',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a90b4bc4f1d0004346b2e'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a90b4bc4f1d0004346b2f'),
                    'conditions': [
                      {
                        'field': '5',
                        'operator': '===',
                        'value': 'Female',
                        '_id': ObjectId('592a90b4bc4f1d0004346b31')
                      },
                      {
                        'field': '75',
                        'operator': '>=',
                        'value': '40.1',
                        '_id': ObjectId('592a90b4bc4f1d0004346b30')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your neck circumference is above 40cm. An increased neck circumference can be a risk factor for the development of sleep apnoea, which can have various effects on your health. This should be reviewed with your local doctor.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b35')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b34')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b4bc4f1d0004346b33')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b4bc4f1d0004346b32')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '139',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a90b4bc4f1d0004346b26'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a90b4bc4f1d0004346b27'),
                    'conditions': [
                      {
                        'field': '5',
                        'operator': '===',
                        'value': 'Male',
                        '_id': ObjectId('592a90b4bc4f1d0004346b29')
                      },
                      {
                        'field': '75',
                        'operator': '>=',
                        'value': '43.1',
                        '_id': ObjectId('592a90b4bc4f1d0004346b28')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your neck circumference is above 43cm. An increased neck circumference can be a risk factor for the development of sleep apnoea, which can have various effects on your health. This should be reviewed with your local doctor.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a90b4bc4f1d0004346b2d')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a90b4bc4f1d0004346b2c')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b4bc4f1d0004346b2b')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b4bc4f1d0004346b2a')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '133',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a90b5bc4f1d0004346b3e'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a90b5bc4f1d0004346b3f'),
                    'conditions': [
                      {
                        'field': '44',
                        'operator': '>=',
                        'value': '80.1',
                        '_id': ObjectId('592a90b5bc4f1d0004346b41')
                      },
                      {
                        'field': '5',
                        'operator': '===',
                        'value': 'Female',
                        '_id': ObjectId('592a90b5bc4f1d0004346b40')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your waist circumference is currently outside of the recommended Guidelines. A waist measurement of over 80cm for women is a risk factor for the development of diabetes, which is associated with many health complications. We recommend reducing your waist measurement to at or below 80cm.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b45')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b44')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b43')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b42')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '134',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a90b5bc4f1d0004346b36'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a90b5bc4f1d0004346b37'),
                    'conditions': [
                      {
                        'field': '5',
                        'operator': '===',
                        'value': 'Male',
                        '_id': ObjectId('592a90b5bc4f1d0004346b39')
                      },
                      {
                        'field': '44',
                        'operator': '>=',
                        'value': '94.1',
                        '_id': ObjectId('592a90b5bc4f1d0004346b38')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your waist circumference is currently outside the recommended Guidelines. An increased waist measurement can be a risk factor for the development of diabetes, which can lead to a number of health complications. The guidelines recommend a waist circumference of 94cm or less for men. We recommend you reduce your waist circumference in line with these guidelines.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b3d')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b3c')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b3b')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b3a')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '140',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592aa017bc4f1d0004346bb3'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592aa017bc4f1d0004346bb4'),
                    'conditions': [
                      {
                        'field': '45',
                        'operator': '>=',
                        'value': '141',
                        '_id': ObjectId('592aa017bc4f1d0004346bb6')
                      },
                      {
                        'field': '46',
                        'operator': '>=',
                        'value': '91',
                        '_id': ObjectId('592aa017bc4f1d0004346bb5')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your blood pressure is outside the normal range. An increased blood pressure can be considered a silent risk factor for heart attack and stroke. It is recommended that you consult with your general practitioner to discuss and monitor your blood pressure.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592aa017bc4f1d0004346bba')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592aa017bc4f1d0004346bb9')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592aa017bc4f1d0004346bb8')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592aa017bc4f1d0004346bb7')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '199',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('593512c2477a9000049f4d08'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('593512c2477a9000049f4d09'),
                    'conditions': [
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '26',
                        '_id': ObjectId('593512c2477a9000049f4d0d')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '27',
                        '_id': ObjectId('593512c2477a9000049f4d0c')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '28',
                        '_id': ObjectId('593512c2477a9000049f4d0b')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '29',
                        '_id': ObjectId('593512c2477a9000049f4d0a')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '18',
                        '_id': ObjectId('59353d9fbeee2d00041f24bc')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '17',
                        '_id': ObjectId('59353d9fbeee2d00041f24bb')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '30',
                        '_id': ObjectId('5935402cbeee2d00041f24cc')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '31',
                        '_id': ObjectId('5935402cbeee2d00041f24cb')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '32',
                        '_id': ObjectId('5935402cbeee2d00041f24ca')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '33',
                        '_id': ObjectId('5935402cbeee2d00041f24c9')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '34',
                        '_id': ObjectId('5935402cbeee2d00041f24c8')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '35',
                        '_id': ObjectId('5935402cbeee2d00041f24c7')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '36',
                        '_id': ObjectId('5935402cbeee2d00041f24c6')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '37',
                        '_id': ObjectId('5935402cbeee2d00041f24c5')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '38',
                        '_id': ObjectId('5935402cbeee2d00041f24c4')
                      },
                      {
                        'field': '190',
                        'operator': '===',
                        'value': '39',
                        '_id': ObjectId('5935402cbeee2d00041f24c3')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your BMI is outside the healthy range. Whilst not a perfect measurement it is recommended that your BMI should be between 18.5 and 25. It is recommended that you discuss options for maintaining a healthy BMI with your regular doctor.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('593512c2477a9000049f4d12')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('593512c2477a9000049f4d11')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('593512c2477a9000049f4d10')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('593512c2477a9000049f4d0f')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '119',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a7cedbc4f1d0004346af1'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a7cedbc4f1d0004346af2'),
                    'conditions': [
                      {
                        'field': '47',
                        'operator': '>=',
                        'value': '91',
                        '_id': ObjectId('592a7cedbc4f1d0004346af3')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your pulse is outside of the recommended Guidelines. An increased pulse rate can be an indicator for several health problems as well as being a measure of cardiovascular fitness. It is recommended that your pulse is 90bpm or less.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346af7')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a7cedbc4f1d0004346af6')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346af5')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a7cedbc4f1d0004346af4')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '151',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346c14'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346c15'),
                    'conditions': [
                      {
                        'field': '48',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346c16')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your red cell count is outside the normal range. Red cells are important for carrying oxygen around the body, an abnormal count should be investigated.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346c1a')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346c19')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346c18')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346c17')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '154',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346c01'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346c02'),
                    'conditions': [
                      {
                        'field': '49',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346c03')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your white cell count was outside the normal range. White cells are important for helping fight infection and this test should be repeated to further assess your white cell count.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346c07')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346c06')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346c05')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346c04')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '159',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346bec'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bed'),
                    'conditions': [
                      {
                        'field': '50',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346bee')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your platelet count was outside the normal range. Platelets are important for normal blood clotting and this test should be repeated to further assess your platelet count.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bf2')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bf1')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bf0')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bef')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '162',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346bd7'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bd8'),
                    'conditions': [
                      {
                        'field': '51',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346bd9')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your kidney function was abnormal. Your kidneys are important for a number of factors including filtering the body\'s waste and blood pressure control and this test should be repeated to further assess your kidneys.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bdd')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bdc')
                  },
                  {
                    'value': '#f6a504',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bdb')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bda')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '165',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346bc2'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bc3'),
                    'conditions': [
                      {
                        'field': '52',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346bc4')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your liver enzymes were slightly elevated. Your liver is important for a large number of functions including the processing of medications and alcohol and this result should be discussed with your regular doctor as it may reflect the effects of alcohol or a fatty liver.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bc8')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bc7')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bc6')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bc5')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '168',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346ca7'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346ca8'),
                    'conditions': [
                      {
                        'field': '53',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346ca9')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your glucose levels were outside the normal range. This test should be repeated or further assessed.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346cad')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346cac')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346cab')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346caa')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '171',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c92'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c93'),
                    'conditions': [
                      {
                        'field': '54',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346c94')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your thyroid function levels were outside the normal range. The thyroid is the "master switch" for your metabolism and if abnormal may cause tiredness, weight changes and other physical symptoms. This test should be repeated to further assess your thyroid function.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c98')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c97')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c96')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c95')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '174',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c7d'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c7e'),
                    'conditions': [
                      {
                        'field': '55',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346c7f')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your iron levels were outside the normal range. Abnormal iron levels often result in tiredness and this should be further assessed.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c83')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c82')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c81')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c80')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '177',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c68'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c69'),
                    'conditions': [
                      {
                        'field': '56',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346c6a')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your B12 levels were outside the normal range. Low B12 often results in tiredness and a lack of energy so this result should be further discussed.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c6e')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c6d')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c6c')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c6b')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '181',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c4e'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c4f'),
                    'conditions': [
                      {
                        'field': '57',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346c50')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your cholesterol was high. High cholesterol is a silent risk factor for heart attack and stroke and is affected by diet and exercise. This should be discussed further with a view to lowering your cholesterol.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c54')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c53')
                  },
                  {
                    'value': '#faa800',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c52')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c51')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '184',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c39'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c3a'),
                    'conditions': [
                      {
                        'field': '99',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346c3b')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your vitamin D level was low. Vitamin D is absorbed from the sun and helps maintain strong, healthy bones. This result should be further discussed with your regular doctor.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c3f')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c3e')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c3d')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c3c')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '186',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c2b'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c2c'),
                    'conditions': [
                      {
                        'field': '58',
                        'operator': '===',
                        'value': 'Abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346c2d')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You have other blood tests which were abnormal and need to be further discussed.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c31')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c30')
                  },
                  {
                    'value': '#fec006',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c2f')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c2e')
                  }
                ]
              },
              {
                'fieldType': 'Header',
                'fieldId': '102',
                '_id': ObjectId('592a5f6fbc4f1d0004346a85'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Significant issues requiring immediate attention:',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a87')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a5f6fbc4f1d0004346a86')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '104',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a5f6fbc4f1d0004346a80'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'The current Australian dietary guidelines recommend eating at least 2 serves of fruit per day.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a5f6fbc4f1d0004346a84')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a5f6fbc4f1d0004346a83')
                  },
                  {
                    'value': '#fdfffd',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a82')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a5f6fbc4f1d0004346a81')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '98',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('591e1c850d61f30004e08e57'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('591e1c850d61f30004e08e58'),
                    'conditions': [
                      {
                        'field': '11',
                        'operator': '===',
                        'value': 'Yes',
                        '_id': ObjectId('591e1c850d61f30004e08e59')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You indicated that you currently smoke. Smoking is a risk factor for cardiovascular disease, stroke and cancer. Stopping  smoking is the single biggest positive change you can make to improve your health.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('591e1c850d61f30004e08e5d')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('591e1c850d61f30004e08e5c')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('591e1c850d61f30004e08e5b')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('591e1c850d61f30004e08e5a')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '191',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5933b475cb4fe00004e1b63e'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('5933b475cb4fe00004e1b63f'),
                    'conditions': [
                      {
                        'field': '12',
                        'operator': '===',
                        'value': true,
                        '_id': ObjectId('5933b475cb4fe00004e1b640')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You indicated you have considered stopping smoking. This is a significant step to improving your health and should be discussed with your local doctor.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('5933b475cb4fe00004e1b644')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5933b475cb4fe00004e1b643')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('5933b475cb4fe00004e1b642')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('5933b475cb4fe00004e1b641')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '143',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592aa017bc4f1d0004346ba1'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592aa017bc4f1d0004346ba2'),
                    'conditions': [
                      {
                        'field': '15',
                        'operator': '===',
                        'value': '7',
                        '_id': ObjectId('592aa017bc4f1d0004346ba7')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You indicated that you drink on 7 days a week. It is recommended that you have at least 2 alcohol free days per week. Excessive drinking of alcohol can lead to a number of significant health problems including liver and brain problems as well as levels of addiction and dependence. This should discussed as a matter of priority with your regular doctor.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592aa017bc4f1d0004346bab')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592aa017bc4f1d0004346baa')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592aa017bc4f1d0004346ba9')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592aa017bc4f1d0004346ba8')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '202',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('59352377477a9000049f4d28'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('59352377477a9000049f4d29'),
                    'conditions': [
                      {
                        'field': '77',
                        'operator': '===',
                        'value': '10+',
                        '_id': ObjectId('59352377477a9000049f4d2a')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You indicated that you would drink more than 10 standard drinks in a session. This is outside the current safe drinking limits. It is recommended that you have no more than 4 standard drinks in any 1 session. Excessive drinking of alcohol can lead to a number of significant health problems including liver and brain problems as well as levels of addiction and dependence.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('59352377477a9000049f4d2e')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('59352377477a9000049f4d2d')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('59352377477a9000049f4d2c')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('59352377477a9000049f4d2b')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '145',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592aa017bc4f1d0004346b9a'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592aa017bc4f1d0004346b9b'),
                    'conditions': [
                      {
                        'field': '21',
                        'operator': '===',
                        'value': '0',
                        '_id': ObjectId('592aa017bc4f1d0004346b9c')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You indicated that you do not eat any fruit in your diet. The Australian Nutrition Guidelines recommend 2 serves of fruit per day to maintain a healthy diet as fruit provides a number of vitamins and nutrients necessary for good health. A low intake in particular vitamins and minerals can have implications for your long term health. We recommend that you see your regular doctor as a matter of priority to discuss your diet.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592aa017bc4f1d0004346ba0')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592aa017bc4f1d0004346b9f')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592aa017bc4f1d0004346b9e')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592aa017bc4f1d0004346b9d')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '146',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592aa017bc4f1d0004346b93'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'any',
                    '_id': ObjectId('592aa017bc4f1d0004346b94'),
                    'conditions': [
                      {
                        'field': '31',
                        'operator': '===',
                        'value': '0',
                        '_id': ObjectId('592aa017bc4f1d0004346b95')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You indicated that you do not eat any vegetables in your diet. The Australian Nutrition Guidelines recommend 5 serves of vegetables per day to maintain a healthy diet as vegetables provide a number of vitamins and nutrients necessary for good health. A low intake in particular vitamins and minerals can have implications for your long term health. We recommend that you see your regular doctor as a matter of priority to discuss your diet.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592aa017bc4f1d0004346b99')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592aa017bc4f1d0004346b98')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592aa017bc4f1d0004346b97')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592aa017bc4f1d0004346b96')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '130',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592a90b5bc4f1d0004346b5c'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592a90b5bc4f1d0004346b5d'),
                    'conditions': [
                      {
                        'field': '40',
                        'operator': '===',
                        'value': 'Yes',
                        '_id': ObjectId('592a90b5bc4f1d0004346b5e')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You indicated that you have some concerns about domestic violence. It is recommended that you discuss these concerns with a health professional and that you are aware of resources that may be available to assist you. Domestic violence has many forms and it is recommended that if you have any concerns at all that you seek help as soon as possible.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b62')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592a90b5bc4f1d0004346b61')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b60')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592a90b5bc4f1d0004346b5f')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '200',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5935134c477a9000049f4d1a'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('5935134c477a9000049f4d1b'),
                    'conditions': [
                      {
                        'field': '190',
                        'operator': '>=',
                        'value': '40',
                        '_id': ObjectId('5935134c477a9000049f4d1c')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your BMI, which is a calculation of your weight for your height, puts you as significantly obese. A BMI in this range has a number of significant health risks including the development of diabetes, heart disease and joint problems. It is recommended that you discuss your weight with your local doctor as a matter of priority. The Australian Guidelines recommend that you maintain a BMI of between 18.5 to 25',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('5935134c477a9000049f4d20')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('5935134c477a9000049f4d1f')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('5935134c477a9000049f4d1e')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('5935134c477a9000049f4d1d')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '148',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592aa017bc4f1d0004346b84'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592aa017bc4f1d0004346b85'),
                    'conditions': [
                      {
                        'field': '47',
                        'operator': '>=',
                        'value': '121',
                        '_id': ObjectId('592aa017bc4f1d0004346b86')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your pulse was critically high. An increased pulse can be an indicator of a number of health issues. You need to seek an appointment with your regular doctor as a matter of priority to investigate your raised pulse.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592aa017bc4f1d0004346b8a')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592aa017bc4f1d0004346b89')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592aa017bc4f1d0004346b88')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592aa017bc4f1d0004346b87')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '150',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346c1b'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346c1c'),
                    'conditions': [
                      {
                        'field': '48',
                        'operator': '===',
                        'value': 'Critically Abnormal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346c1d')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your red cell count was significantly abnormal. Red cells are important for carrying oxygen around the body, and an abnormal count needs further investigation. ',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346c21')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346c20')
                  },
                  {
                    'value': '#ff1600',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346c1f')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346c1e')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '155',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346bfa'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bfb'),
                    'conditions': [
                      {
                        'field': '49',
                        'operator': '===',
                        'value': 'Critically abnormal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346bfc')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your white cell count was significantly abnormal. White cells are important for helping fight infection and this should be further investigated as a matter of priority.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346c00')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bff')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bfe')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bfd')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '160',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346be5'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346be6'),
                    'conditions': [
                      {
                        'field': '50',
                        'operator': '===',
                        'value': 'Critically abnormal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346be7')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your platelet count was significantly abnormal. Platelets are important for normal blood clotting and this should be further assessed as a matter of priority.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346beb')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bea')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346be9')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346be8')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '166',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346bbb'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bbc'),
                    'conditions': [
                      {
                        'field': '52',
                        'operator': '===',
                        'value': 'Critically abnormal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346bbd')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your liver enzymes were significantly abnormal. Your liver is important for a large number of functions and this should be further investigated as a matter of priority.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bc1')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bc0')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bbf')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bbe')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '163',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592ab1f6bc4f1d0004346bd0'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bd1'),
                    'conditions': [
                      {
                        'field': '51',
                        'operator': '===',
                        'value': 'Critically abnormal',
                        '_id': ObjectId('592ab1f6bc4f1d0004346bd2')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your kidney function was significantly abnormal. Your kidneys are important for a number of factors including filtering the body\'s waste and blood pressure control and this needs to be further investigated as a matter of priority.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bd6')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592ab1f6bc4f1d0004346bd5')
                  },
                  {
                    'value': '#f80404',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bd4')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592ab1f6bc4f1d0004346bd3')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '169',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346ca0'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346ca1'),
                    'conditions': [
                      {
                        'field': '53',
                        'operator': '===',
                        'value': 'Critically abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346ca2')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your glucose levels were outside the normal range. High glucose levels may reflect diabetes and this should be further investigated as a matter of priority.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346ca6')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346ca5')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346ca4')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346ca3')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '172',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c8b'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c8c'),
                    'conditions': [
                      {
                        'field': '54',
                        'operator': '===',
                        'value': 'Critically abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346c8d')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your thyroid function levels were significantly abnormal. The thyroid is the "master switch" for your metabolism and if abnormal may cause tiredness, weight changes and other physical symptoms. This should be further investigated as a matter of priority.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c91')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c90')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c8f')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c8e')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '175',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c76'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c77'),
                    'conditions': [
                      {
                        'field': '55',
                        'operator': '===',
                        'value': 'Critically abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346c78')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your iron levels were significantly abnormal. This should be further investigated as a matter of priority.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c7c')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c7b')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c7a')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c79')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '178',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c61'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c62'),
                    'conditions': [
                      {
                        'field': '56',
                        'operator': '===',
                        'value': 'Critically abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346c63')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your B12 levels were significantly abnormal. This should be further investigated as a matter of priority.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c67')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c66')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c65')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c64')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '182',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c47'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c48'),
                    'conditions': [
                      {
                        'field': '57',
                        'operator': '===',
                        'value': 'Critically abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346c49')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your cholesterol was significantly abnormal. High cholesterol is a silent risk factor for heart attack and stroke and is affected by diet and exercise. Your cholesterol should be discussed with your regular doctor as a matter of priority.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c4d')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c4c')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c4b')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c4a')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '185',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c32'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c33'),
                    'conditions': [
                      {
                        'field': '99',
                        'operator': '===',
                        'value': 'Critically Abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346c34')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'Your vitamin D level was significantly low. Vitamin D is absorbed from the sun and helps maintain strong, healthy bones. This result should be further discussed as a matter of priority.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c38')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c37')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c36')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c35')
                  }
                ]
              },
              {
                'fieldType': 'TextBlock',
                'fieldId': '187',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('592abab6bc4f1d0004346c24'),
                'fields': [],
                'rules': [
                  {
                    'operator': 'all',
                    '_id': ObjectId('592abab6bc4f1d0004346c25'),
                    'conditions': [
                      {
                        'field': '58',
                        'operator': '===',
                        'value': 'Critically abnormal',
                        '_id': ObjectId('592abab6bc4f1d0004346c26')
                      }
                    ],
                    'action': {
                      'setting': 'Hidden',
                      'value': false
                    }
                  }
                ],
                'settings': [
                  {
                    'value': 'You have other blood results which were significantly abnormal and these should be discussed with your regular doctor as a matter of priority.',
                    'label': 'Content',
                    'fieldType': 'TextFieldView',
                    'extraProps': {
                      'multiline': true
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c2a')
                  },
                  {
                    'value': true,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': true,
                          'label': 'Yes'
                        },
                        {
                          'value': false,
                          'label': 'No'
                        }
                      ]
                    },
                    '_id': ObjectId('592abab6bc4f1d0004346c29')
                  },
                  {
                    'value': '#f34235',
                    'label': 'Border Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c28')
                  },
                  {
                    'value': 'rgb(0,0,0)',
                    'label': 'Text Colour',
                    'fieldType': 'ColourPickerView',
                    '_id': ObjectId('592abab6bc4f1d0004346c27')
                  }
                ]
              }
            ]
          }
        ],
        'editGroups': [
          '58ed9f07466ae5000404fcf4'
        ],
        'viewGroups': [
          '58eda9b0466ae5000404fcff',
          '58ed9f07466ae5000404fcf4'
        ]
      }
    ],
    'restrictedGroups': [
      '58eda96d466ae5000404fcfd',
      '58ed9f07466ae5000404fcf4',
      '58eda99b466ae5000404fcfe',
      '58eda9b0466ae5000404fcff'
    ],
    'lastFieldId': 202,
    'headerImageURL': 'https://i.imgur.com/zeSThKV.png'
  }
]
