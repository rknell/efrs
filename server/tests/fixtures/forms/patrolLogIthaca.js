const ObjectId = require('mongodb').ObjectID
const ISODate = function (date) {
  return new Date(date)
}

module.exports = {
  '_id': ObjectId('5a43053c76ed160004c56579'),
  'createdAt': ISODate('2017-12-27T02:28:12.213Z'),
  'updatedAt': ISODate('2018-01-07T11:19:19.600Z'),
  'createdBy': ObjectId('5a4301ce76ed160004c564d3'),
  'company': ObjectId('5a4301ce76ed160004c564d1'),
  'name': 'Patrol Log - Ithaca',
  'pages': [
    {
      'name': 'Patrol/Team',
      '_id': ObjectId('5a43053c76ed160004c5657a'),
      'groups': [
        {
          '_id': ObjectId('5a43053c76ed160004c5657b'),
          'fields': [
            {
              'fieldType': 'Header',
              'fieldId': '3',
              '_id': ObjectId('5a43053c76ed160004c5661b'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign On',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c5661d')
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
                  '_id': ObjectId('5a43053c76ed160004c5661c')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '1',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a43053c76ed160004c5660f'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Date',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c5661a')
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
                  '_id': ObjectId('5a43053c76ed160004c56619')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c56618')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c56617')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c56616')
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
                  '_id': ObjectId('5a43053c76ed160004c56615')
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
                  '_id': ObjectId('5a43053c76ed160004c56614')
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
                  '_id': ObjectId('5a43053c76ed160004c56613')
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
                  '_id': ObjectId('5a43053c76ed160004c56612')
                },
                {
                  'value': 'date',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a43053c76ed160004c56611')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a43053c76ed160004c56610')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '2',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a43053c76ed160004c56602'),
              'fields': [],
              'rules': [
                {
                  'operator': 'all',
                  '_id': ObjectId('5a43053c76ed160004c56603'),
                  'conditions': [],
                  'action': {
                    'setting': null,
                    'value': null
                  }
                }
              ],
              'settings': [
                {
                  'value': 'Surfcom Sign On Time',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c5660e')
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
                  '_id': ObjectId('5a43053c76ed160004c5660d')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c5660c')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c5660b')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c5660a')
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
                  '_id': ObjectId('5a43053c76ed160004c56609')
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
                  '_id': ObjectId('5a43053c76ed160004c56608')
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
                  '_id': ObjectId('5a43053c76ed160004c56607')
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
                  '_id': ObjectId('5a43053c76ed160004c56606')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a43053c76ed160004c56605')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a43053c76ed160004c56604')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '69',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e178'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Surfcom Sign Off Time',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e183')
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
                  '_id': ObjectId('5a45f244a4994a000439e182')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e181')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e180')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e17f')
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
                  '_id': ObjectId('5a45f244a4994a000439e17e')
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
                  '_id': ObjectId('5a45f244a4994a000439e17d')
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
                  '_id': ObjectId('5a45f244a4994a000439e17c')
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
                  '_id': ObjectId('5a45f244a4994a000439e17b')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e17a')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e179')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '30',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4342e25d74600004b81d48'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Beach Open',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d4f')
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
                  '_id': ObjectId('5a4342e25d74600004b81d4e')
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
                  '_id': ObjectId('5a4342e25d74600004b81d4d')
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
                  '_id': ObjectId('5a4342e25d74600004b81d4c')
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
                  '_id': ObjectId('5a4342e25d74600004b81d4b')
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
                  '_id': ObjectId('5a4342e25d74600004b81d4a')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4342e25d74600004b81d49')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '31',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4342e25d74600004b81d40'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Weather',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d47')
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
                  '_id': ObjectId('5a4342e25d74600004b81d46')
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
                  '_id': ObjectId('5a4342e25d74600004b81d45')
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
                  '_id': ObjectId('5a4342e25d74600004b81d44')
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
                  '_id': ObjectId('5a4342e25d74600004b81d43')
                },
                {
                  'value': false,
                  'label': 'Options',
                  'fieldType': 'ListFieldView',
                  'extraProps': {
                    'values': [
                      {
                        'id': 'Hybv-6lmf',
                        'score': '',
                        'value': 'Sunny',
                        'label': 'Sunny'
                      },
                      {
                        'id': 'Hyww-TgQG',
                        'score': '',
                        'value': 'Cloudy',
                        'label': 'Cloudy'
                      },
                      {
                        'id': 'BJguWTg7z',
                        'score': '',
                        'value': 'Rain',
                        'label': 'Rain'
                      },
                      {
                        'id': 'HyUuZalXM',
                        'score': '',
                        'value': 'Storms',
                        'label': 'Storms'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4342e25d74600004b81d42')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4342e25d74600004b81d41')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '32',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4342e25d74600004b81d38'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Wind Conditions',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d3f')
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
                  '_id': ObjectId('5a4342e25d74600004b81d3e')
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
                  '_id': ObjectId('5a4342e25d74600004b81d3d')
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
                  '_id': ObjectId('5a4342e25d74600004b81d3c')
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
                  '_id': ObjectId('5a4342e25d74600004b81d3b')
                },
                {
                  'value': false,
                  'label': 'Options',
                  'fieldType': 'ListFieldView',
                  'extraProps': {
                    'values': [
                      {
                        'id': 'HJ0xz6xmz',
                        'score': '',
                        'value': 'Light',
                        'label': 'Light'
                      },
                      {
                        'id': 'HkFZGTg7M',
                        'score': '',
                        'value': 'Moderate',
                        'label': 'Moderate'
                      },
                      {
                        'id': 'rykMM6lmf',
                        'score': '',
                        'value': 'High',
                        'label': 'High'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4342e25d74600004b81d3a')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4342e25d74600004b81d39')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '72',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4a0236a2d82100046a6b03'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Water Population',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4a0236a2d82100046a6b10')
                },
                {
                  'value': 'No.',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4a0236a2d82100046a6b0f')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6b0e')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6b0d')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6b0c')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6b0b')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a4a0236a2d82100046a6b0a')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6b09')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6b08')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6b07')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4a0236a2d82100046a6b06')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6b05')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6b04')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '73',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4a0236a2d82100046a6af5'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Beach Population',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4a0236a2d82100046a6b02')
                },
                {
                  'value': 'No.',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4a0236a2d82100046a6b01')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6b00')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6aff')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6afe')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6afd')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a4a0236a2d82100046a6afc')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6afb')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6afa')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6af9')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4a0236a2d82100046a6af8')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6af7')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6af6')
                }
              ]
            },
            {
              'fieldType': 'Header',
              'fieldId': '7',
              '_id': ObjectId('5a43053c76ed160004c565ff'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Patrol Team',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c56601')
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
                  '_id': ObjectId('5a43053c76ed160004c56600')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '8',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a43053c76ed160004c565f1'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Patrol Member',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565fe')
                },
                {
                  'value': 'Name',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565fd')
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
                  '_id': ObjectId('5a43053c76ed160004c565fc')
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
                  '_id': ObjectId('5a43053c76ed160004c565fb')
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
                  '_id': ObjectId('5a43053c76ed160004c565fa')
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
                  '_id': ObjectId('5a43053c76ed160004c565f9')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565f8')
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
                  '_id': ObjectId('5a43053c76ed160004c565f7')
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
                  '_id': ObjectId('5a43053c76ed160004c565f6')
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
                  '_id': ObjectId('5a43053c76ed160004c565f5')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565f4')
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
                  '_id': ObjectId('5a43053c76ed160004c565f3')
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
                  '_id': ObjectId('5a43053c76ed160004c565f2')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '46',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a434b5f5d74600004b81dd7'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign On',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a434b5f5d74600004b81de2')
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
                  '_id': ObjectId('5a434b5f5d74600004b81de1')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a434b5f5d74600004b81de0')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a434b5f5d74600004b81ddf')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a434b5f5d74600004b81dde')
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
                  '_id': ObjectId('5a434b5f5d74600004b81ddd')
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
                  '_id': ObjectId('5a434b5f5d74600004b81ddc')
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
                  '_id': ObjectId('5a434b5f5d74600004b81ddb')
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
                  '_id': ObjectId('5a434b5f5d74600004b81dda')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a434b5f5d74600004b81dd9')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a434b5f5d74600004b81dd8')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '47',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a434b5f5d74600004b81dcb'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign Off',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a434b5f5d74600004b81dd6')
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
                  '_id': ObjectId('5a434b5f5d74600004b81dd5')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a434b5f5d74600004b81dd4')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a434b5f5d74600004b81dd3')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a434b5f5d74600004b81dd2')
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
                  '_id': ObjectId('5a434b5f5d74600004b81dd1')
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
                  '_id': ObjectId('5a434b5f5d74600004b81dd0')
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
                  '_id': ObjectId('5a434b5f5d74600004b81dcf')
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
                  '_id': ObjectId('5a434b5f5d74600004b81dce')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a434b5f5d74600004b81dcd')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a434b5f5d74600004b81dcc')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '74',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4a0236a2d82100046a6aed'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Position',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4a0236a2d82100046a6af4')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6af3')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6af2')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6af1')
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
                  '_id': ObjectId('5a4a0236a2d82100046a6af0')
                },
                {
                  'value': false,
                  'label': 'Options',
                  'fieldType': 'ListFieldView',
                  'extraProps': {
                    'values': [
                      {
                        'id': 'ryrOmtw7M',
                        'score': '',
                        'value': 'Patrol Captain',
                        'label': 'Patrol Captain'
                      },
                      {
                        'id': 'rk6d7tD7z',
                        'score': '',
                        'value': 'IRB Driver',
                        'label': 'IRB Driver'
                      },
                      {
                        'id': 'Sy4KmYD7M',
                        'score': '',
                        'value': 'IRB Crew',
                        'label': 'IRB Crew'
                      },
                      {
                        'id': 'S1HJHFPXM',
                        'score': '',
                        'value': 'Radio Officer',
                        'label': 'Radio Officer'
                      },
                      {
                        'id': 'rylqQYP7M',
                        'score': '',
                        'value': 'First Aid Officer',
                        'label': 'First Aid Officer'
                      },
                      {
                        'id': 'SkKc7YvXM',
                        'score': '',
                        'value': 'Patrol Member',
                        'label': 'Patrol Member'
                      },
                      {
                        'id': 'S129QKwmM',
                        'score': '',
                        'value': 'Rookie',
                        'label': 'Rookie'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4a0236a2d82100046a6aef')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4a0236a2d82100046a6aee')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '10',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a43053c76ed160004c565d5'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Patrol Member',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565e2')
                },
                {
                  'value': 'Name',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565e1')
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
                  '_id': ObjectId('5a43053c76ed160004c565e0')
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
                  '_id': ObjectId('5a43053c76ed160004c565df')
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
                  '_id': ObjectId('5a43053c76ed160004c565de')
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
                  '_id': ObjectId('5a43053c76ed160004c565dd')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565dc')
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
                  '_id': ObjectId('5a43053c76ed160004c565db')
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
                  '_id': ObjectId('5a43053c76ed160004c565da')
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
                  '_id': ObjectId('5a43053c76ed160004c565d9')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565d8')
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
                  '_id': ObjectId('5a43053c76ed160004c565d7')
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
                  '_id': ObjectId('5a43053c76ed160004c565d6')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '49',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e150'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign On',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e15b')
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
                  '_id': ObjectId('5a45f244a4994a000439e15a')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e159')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e158')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e157')
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
                  '_id': ObjectId('5a45f244a4994a000439e156')
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
                  '_id': ObjectId('5a45f244a4994a000439e155')
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
                  '_id': ObjectId('5a45f244a4994a000439e154')
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
                  '_id': ObjectId('5a45f244a4994a000439e153')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e152')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e151')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '54',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e144'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign Off',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e14f')
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
                  '_id': ObjectId('5a45f244a4994a000439e14e')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e14d')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e14c')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e14b')
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
                  '_id': ObjectId('5a45f244a4994a000439e14a')
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
                  '_id': ObjectId('5a45f244a4994a000439e149')
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
                  '_id': ObjectId('5a45f244a4994a000439e148')
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
                  '_id': ObjectId('5a45f244a4994a000439e147')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e146')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e145')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '76',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4a06efa2d82100046a6b31'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Position',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4a06efa2d82100046a6b38')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b37')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b36')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b35')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b34')
                },
                {
                  'value': false,
                  'label': 'Options',
                  'fieldType': 'ListFieldView',
                  'extraProps': {
                    'values': [
                      {
                        'id': 'r1QvNKv7f',
                        'score': '',
                        'value': 'Patrol Captain',
                        'label': 'Patrol Captain'
                      },
                      {
                        'id': 'SkiDEtDmG',
                        'score': '',
                        'value': 'IRB Driver',
                        'label': 'IRB Driver'
                      },
                      {
                        'id': 'rJg_4tvXf',
                        'score': '',
                        'value': 'IRB Crew',
                        'label': 'IRB Crew'
                      },
                      {
                        'id': 'Syw9EFDmM',
                        'score': '',
                        'value': 'Radio Officer',
                        'label': 'Radio Officer'
                      },
                      {
                        'id': 'rJejEFDXM',
                        'score': '',
                        'value': 'First Aid Officer',
                        'label': 'First Aid Officer'
                      },
                      {
                        'id': 'BkIsEYDmf',
                        'score': '',
                        'value': 'Patrol Member',
                        'label': 'Patrol Member'
                      },
                      {
                        'id': 'B1Fs4YwXz',
                        'score': '',
                        'value': 'Rookie',
                        'label': 'Rookie'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4a06efa2d82100046a6b33')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4a06efa2d82100046a6b32')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '9',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a43053c76ed160004c565e3'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Patrol Member',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565f0')
                },
                {
                  'value': 'Name',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565ef')
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
                  '_id': ObjectId('5a43053c76ed160004c565ee')
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
                  '_id': ObjectId('5a43053c76ed160004c565ed')
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
                  '_id': ObjectId('5a43053c76ed160004c565ec')
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
                  '_id': ObjectId('5a43053c76ed160004c565eb')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565ea')
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
                  '_id': ObjectId('5a43053c76ed160004c565e9')
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
                  '_id': ObjectId('5a43053c76ed160004c565e8')
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
                  '_id': ObjectId('5a43053c76ed160004c565e7')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565e6')
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
                  '_id': ObjectId('5a43053c76ed160004c565e5')
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
                  '_id': ObjectId('5a43053c76ed160004c565e4')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '55',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e138'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign On',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e143')
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
                  '_id': ObjectId('5a45f244a4994a000439e142')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e141')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e140')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e13f')
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
                  '_id': ObjectId('5a45f244a4994a000439e13e')
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
                  '_id': ObjectId('5a45f244a4994a000439e13d')
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
                  '_id': ObjectId('5a45f244a4994a000439e13c')
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
                  '_id': ObjectId('5a45f244a4994a000439e13b')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e13a')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e139')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '56',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e12c'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign Off',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e137')
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
                  '_id': ObjectId('5a45f244a4994a000439e136')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e135')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e134')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e133')
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
                  '_id': ObjectId('5a45f244a4994a000439e132')
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
                  '_id': ObjectId('5a45f244a4994a000439e131')
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
                  '_id': ObjectId('5a45f244a4994a000439e130')
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
                  '_id': ObjectId('5a45f244a4994a000439e12f')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e12e')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e12d')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '11',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a43053c76ed160004c565c7'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Patrol Member',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565d4')
                },
                {
                  'value': 'Name',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565d3')
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
                  '_id': ObjectId('5a43053c76ed160004c565d2')
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
                  '_id': ObjectId('5a43053c76ed160004c565d1')
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
                  '_id': ObjectId('5a43053c76ed160004c565d0')
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
                  '_id': ObjectId('5a43053c76ed160004c565cf')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565ce')
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
                  '_id': ObjectId('5a43053c76ed160004c565cd')
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
                  '_id': ObjectId('5a43053c76ed160004c565cc')
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
                  '_id': ObjectId('5a43053c76ed160004c565cb')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565ca')
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
                  '_id': ObjectId('5a43053c76ed160004c565c9')
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
                  '_id': ObjectId('5a43053c76ed160004c565c8')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '57',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e120'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign On',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e12b')
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
                  '_id': ObjectId('5a45f244a4994a000439e12a')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e129')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e128')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e127')
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
                  '_id': ObjectId('5a45f244a4994a000439e126')
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
                  '_id': ObjectId('5a45f244a4994a000439e125')
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
                  '_id': ObjectId('5a45f244a4994a000439e124')
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
                  '_id': ObjectId('5a45f244a4994a000439e123')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e122')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e121')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '58',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e114'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign Off',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e11f')
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
                  '_id': ObjectId('5a45f244a4994a000439e11e')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e11d')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e11c')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e11b')
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
                  '_id': ObjectId('5a45f244a4994a000439e11a')
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
                  '_id': ObjectId('5a45f244a4994a000439e119')
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
                  '_id': ObjectId('5a45f244a4994a000439e118')
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
                  '_id': ObjectId('5a45f244a4994a000439e117')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e116')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e115')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '12',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a43053c76ed160004c565b9'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Patrol Member',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565c6')
                },
                {
                  'value': 'Name',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565c5')
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
                  '_id': ObjectId('5a43053c76ed160004c565c4')
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
                  '_id': ObjectId('5a43053c76ed160004c565c3')
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
                  '_id': ObjectId('5a43053c76ed160004c565c2')
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
                  '_id': ObjectId('5a43053c76ed160004c565c1')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565c0')
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
                  '_id': ObjectId('5a43053c76ed160004c565bf')
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
                  '_id': ObjectId('5a43053c76ed160004c565be')
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
                  '_id': ObjectId('5a43053c76ed160004c565bd')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565bc')
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
                  '_id': ObjectId('5a43053c76ed160004c565bb')
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
                  '_id': ObjectId('5a43053c76ed160004c565ba')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '59',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e108'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign On',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e113')
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
                  '_id': ObjectId('5a45f244a4994a000439e112')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e111')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e110')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e10f')
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
                  '_id': ObjectId('5a45f244a4994a000439e10e')
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
                  '_id': ObjectId('5a45f244a4994a000439e10d')
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
                  '_id': ObjectId('5a45f244a4994a000439e10c')
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
                  '_id': ObjectId('5a45f244a4994a000439e10b')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e10a')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e109')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '60',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e0fc'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign Off',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e107')
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
                  '_id': ObjectId('5a45f244a4994a000439e106')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e105')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e104')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e103')
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
                  '_id': ObjectId('5a45f244a4994a000439e102')
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
                  '_id': ObjectId('5a45f244a4994a000439e101')
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
                  '_id': ObjectId('5a45f244a4994a000439e100')
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
                  '_id': ObjectId('5a45f244a4994a000439e0ff')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0fe')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0fd')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '14',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a43053c76ed160004c565ab'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Patrol Member',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565b8')
                },
                {
                  'value': 'Name',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565b7')
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
                  '_id': ObjectId('5a43053c76ed160004c565b6')
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
                  '_id': ObjectId('5a43053c76ed160004c565b5')
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
                  '_id': ObjectId('5a43053c76ed160004c565b4')
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
                  '_id': ObjectId('5a43053c76ed160004c565b3')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565b2')
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
                  '_id': ObjectId('5a43053c76ed160004c565b1')
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
                  '_id': ObjectId('5a43053c76ed160004c565b0')
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
                  '_id': ObjectId('5a43053c76ed160004c565af')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565ae')
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
                  '_id': ObjectId('5a43053c76ed160004c565ad')
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
                  '_id': ObjectId('5a43053c76ed160004c565ac')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '61',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e0f0'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign On',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0fb')
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
                  '_id': ObjectId('5a45f244a4994a000439e0fa')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0f9')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0f8')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0f7')
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
                  '_id': ObjectId('5a45f244a4994a000439e0f6')
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
                  '_id': ObjectId('5a45f244a4994a000439e0f5')
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
                  '_id': ObjectId('5a45f244a4994a000439e0f4')
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
                  '_id': ObjectId('5a45f244a4994a000439e0f3')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0f2')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0f1')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '62',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e0e4'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign Off',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0ef')
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
                  '_id': ObjectId('5a45f244a4994a000439e0ee')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0ed')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0ec')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0eb')
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
                  '_id': ObjectId('5a45f244a4994a000439e0ea')
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
                  '_id': ObjectId('5a45f244a4994a000439e0e9')
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
                  '_id': ObjectId('5a45f244a4994a000439e0e8')
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
                  '_id': ObjectId('5a45f244a4994a000439e0e7')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0e6')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0e5')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '13',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a43053c76ed160004c5659d'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Patrol Member',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565aa')
                },
                {
                  'value': 'Name',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565a9')
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
                  '_id': ObjectId('5a43053c76ed160004c565a8')
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
                  '_id': ObjectId('5a43053c76ed160004c565a7')
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
                  '_id': ObjectId('5a43053c76ed160004c565a6')
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
                  '_id': ObjectId('5a43053c76ed160004c565a5')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565a4')
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
                  '_id': ObjectId('5a43053c76ed160004c565a3')
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
                  '_id': ObjectId('5a43053c76ed160004c565a2')
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
                  '_id': ObjectId('5a43053c76ed160004c565a1')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c565a0')
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
                  '_id': ObjectId('5a43053c76ed160004c5659f')
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
                  '_id': ObjectId('5a43053c76ed160004c5659e')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '63',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e0d8'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign On',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0e3')
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
                  '_id': ObjectId('5a45f244a4994a000439e0e2')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0e1')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0e0')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0df')
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
                  '_id': ObjectId('5a45f244a4994a000439e0de')
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
                  '_id': ObjectId('5a45f244a4994a000439e0dd')
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
                  '_id': ObjectId('5a45f244a4994a000439e0dc')
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
                  '_id': ObjectId('5a45f244a4994a000439e0db')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0da')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0d9')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '64',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e0cc'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign Off',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0d7')
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
                  '_id': ObjectId('5a45f244a4994a000439e0d6')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0d5')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0d4')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0d3')
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
                  '_id': ObjectId('5a45f244a4994a000439e0d2')
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
                  '_id': ObjectId('5a45f244a4994a000439e0d1')
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
                  '_id': ObjectId('5a45f244a4994a000439e0d0')
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
                  '_id': ObjectId('5a45f244a4994a000439e0cf')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0ce')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0cd')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '15',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a43053c76ed160004c5658f'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Patrol Member',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c5659c')
                },
                {
                  'value': 'Name',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c5659b')
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
                  '_id': ObjectId('5a43053c76ed160004c5659a')
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
                  '_id': ObjectId('5a43053c76ed160004c56599')
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
                  '_id': ObjectId('5a43053c76ed160004c56598')
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
                  '_id': ObjectId('5a43053c76ed160004c56597')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a43053c76ed160004c56596')
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
                  '_id': ObjectId('5a43053c76ed160004c56595')
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
                  '_id': ObjectId('5a43053c76ed160004c56594')
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
                  '_id': ObjectId('5a43053c76ed160004c56593')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a43053c76ed160004c56592')
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
                  '_id': ObjectId('5a43053c76ed160004c56591')
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
                  '_id': ObjectId('5a43053c76ed160004c56590')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '65',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e0c0'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign On',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0cb')
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
                  '_id': ObjectId('5a45f244a4994a000439e0ca')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0c9')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0c8')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0c7')
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
                  '_id': ObjectId('5a45f244a4994a000439e0c6')
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
                  '_id': ObjectId('5a45f244a4994a000439e0c5')
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
                  '_id': ObjectId('5a45f244a4994a000439e0c4')
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
                  '_id': ObjectId('5a45f244a4994a000439e0c3')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0c2')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0c1')
                }
              ]
            },
            {
              'fieldType': 'Date',
              'fieldId': '66',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e0b4'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Sign Off',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0bf')
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
                  '_id': ObjectId('5a45f244a4994a000439e0be')
                },
                {
                  'value': '',
                  'label': 'Max Days Future',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0bd')
                },
                {
                  'value': '',
                  'label': 'Max Days Past',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0bc')
                },
                {
                  'value': '',
                  'label': 'Default Date Offset (Days)',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e0bb')
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
                  '_id': ObjectId('5a45f244a4994a000439e0ba')
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
                  '_id': ObjectId('5a45f244a4994a000439e0b9')
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
                  '_id': ObjectId('5a45f244a4994a000439e0b8')
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
                  '_id': ObjectId('5a45f244a4994a000439e0b7')
                },
                {
                  'value': 'time',
                  'label': 'Data Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'date',
                        'label': 'Date'
                      },
                      {
                        'value': 'time',
                        'label': 'Time'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0b6')
                },
                {
                  'value': false,
                  'label': 'Set Now Button',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': true,
                        'label': 'Yes'
                      },
                      {
                        'value': false,
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e0b5')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '33',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4342e25d74600004b81d2a'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Patrol Comments',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d37')
                },
                {
                  'value': '',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d36')
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
                  '_id': ObjectId('5a4342e25d74600004b81d35')
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
                  '_id': ObjectId('5a4342e25d74600004b81d34')
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
                  '_id': ObjectId('5a4342e25d74600004b81d33')
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
                  '_id': ObjectId('5a4342e25d74600004b81d32')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d31')
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
                  '_id': ObjectId('5a4342e25d74600004b81d30')
                },
                {
                  'value': true,
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
                  '_id': ObjectId('5a4342e25d74600004b81d2f')
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
                  '_id': ObjectId('5a4342e25d74600004b81d2e')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d2d')
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
                  '_id': ObjectId('5a4342e25d74600004b81d2c')
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
                  '_id': ObjectId('5a4342e25d74600004b81d2b')
                }
              ]
            }
          ]
        }
      ],
      'editGroups': [],
      'viewGroups': []
    },
    {
      'name': 'Equipment',
      '_id': ObjectId('5a430e0876ed160004c56623'),
      'groups': [
        {
          '_id': ObjectId('5a430e0876ed160004c56624'),
          'fields': [
            {
              'fieldType': 'Header',
              'fieldId': '17',
              '_id': ObjectId('5a430e0876ed160004c56635'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'IRB',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a430e0876ed160004c56637')
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
                  '_id': ObjectId('5a430e0876ed160004c56636')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '18',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a430e0876ed160004c5662d'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'IRB',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a430e0876ed160004c56634')
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
                  '_id': ObjectId('5a430e0876ed160004c56633')
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
                  '_id': ObjectId('5a430e0876ed160004c56632')
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
                  '_id': ObjectId('5a430e0876ed160004c56631')
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
                  '_id': ObjectId('5a430e0876ed160004c56630')
                },
                {
                  'value': false,
                  'label': 'Options',
                  'fieldType': 'ListFieldView',
                  'extraProps': {
                    'values': [
                      {
                        'id': 'ByBApKemf',
                        'score': '',
                        'value': 'Arancia',
                        'label': 'Arancia'
                      },
                      {
                        'id': 'HkcAaFxmf',
                        'score': '',
                        'value': 'Archilles',
                        'label': 'Archilles'
                      },
                      {
                        'id': 'ryJCTYlmG',
                        'score': '',
                        'value': 'Zodiac',
                        'label': 'Zodiac'
                      }
                    ]
                  },
                  '_id': ObjectId('5a430e0876ed160004c5662f')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a430e0876ed160004c5662e')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '19',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a430e0876ed160004c56625'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Motor',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a430e0876ed160004c5662c')
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
                  '_id': ObjectId('5a430e0876ed160004c5662b')
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
                  '_id': ObjectId('5a430e0876ed160004c5662a')
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
                  '_id': ObjectId('5a430e0876ed160004c56629')
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
                  '_id': ObjectId('5a430e0876ed160004c56628')
                },
                {
                  'value': false,
                  'label': 'Options',
                  'fieldType': 'ListFieldView',
                  'extraProps': {
                    'values': [
                      {
                        'id': 'HygbCKxXG',
                        'score': '',
                        'value': 'Motor A',
                        'label': 'Motor A'
                      },
                      {
                        'id': 'SyEZ0tlmz',
                        'score': '',
                        'value': 'Motor D',
                        'label': 'Motor D'
                      },
                      {
                        'id': 'Syub0Fl7z',
                        'score': '',
                        'value': 'Motor F',
                        'label': 'Motor F'
                      }
                    ]
                  },
                  '_id': ObjectId('5a430e0876ed160004c56627')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a430e0876ed160004c56626')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '23',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4342e25d74600004b81d22'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Boat Inflated & visual check',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d29')
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
                  '_id': ObjectId('5a4342e25d74600004b81d28')
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
                  '_id': ObjectId('5a4342e25d74600004b81d27')
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
                  '_id': ObjectId('5a4342e25d74600004b81d26')
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
                  '_id': ObjectId('5a4342e25d74600004b81d25')
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
                  '_id': ObjectId('5a4342e25d74600004b81d24')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4342e25d74600004b81d23')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '22',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4342e25d74600004b81d1a'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Fuel Cell (full and not leaking)',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d21')
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
                  '_id': ObjectId('5a4342e25d74600004b81d20')
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
                  '_id': ObjectId('5a4342e25d74600004b81d1f')
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
                  '_id': ObjectId('5a4342e25d74600004b81d1e')
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
                  '_id': ObjectId('5a4342e25d74600004b81d1d')
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
                  '_id': ObjectId('5a4342e25d74600004b81d1c')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4342e25d74600004b81d1b')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '24',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4342e25d74600004b81d12'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Tow Rope',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d19')
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
                  '_id': ObjectId('5a4342e25d74600004b81d18')
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
                  '_id': ObjectId('5a4342e25d74600004b81d17')
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
                  '_id': ObjectId('5a4342e25d74600004b81d16')
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
                  '_id': ObjectId('5a4342e25d74600004b81d15')
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
                  '_id': ObjectId('5a4342e25d74600004b81d14')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4342e25d74600004b81d13')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '77',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4a06efa2d82100046a6b29'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Life Jackets',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4a06efa2d82100046a6b30')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b2f')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b2e')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b2d')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b2c')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b2b')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4a06efa2d82100046a6b2a')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '78',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4a06efa2d82100046a6b21'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Knife, paddles, tube, safety chain',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4a06efa2d82100046a6b28')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b27')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b26')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b25')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b24')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b23')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4a06efa2d82100046a6b22')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '79',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4a06efa2d82100046a6b19'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Motor & boat tested',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4a06efa2d82100046a6b20')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b1f')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b1e')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b1d')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b1c')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b1b')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4a06efa2d82100046a6b1a')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '21',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4342e25d74600004b81d04'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'IRB Comments',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d11')
                },
                {
                  'value': 'Eg; any repairs required etc',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d10')
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
                  '_id': ObjectId('5a4342e25d74600004b81d0f')
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
                  '_id': ObjectId('5a4342e25d74600004b81d0e')
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
                  '_id': ObjectId('5a4342e25d74600004b81d0d')
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
                  '_id': ObjectId('5a4342e25d74600004b81d0c')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d0b')
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
                  '_id': ObjectId('5a4342e25d74600004b81d0a')
                },
                {
                  'value': true,
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
                  '_id': ObjectId('5a4342e25d74600004b81d09')
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
                  '_id': ObjectId('5a4342e25d74600004b81d08')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d07')
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
                  '_id': ObjectId('5a4342e25d74600004b81d06')
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
                  '_id': ObjectId('5a4342e25d74600004b81d05')
                }
              ]
            },
            {
              'fieldType': 'Header',
              'fieldId': '25',
              '_id': ObjectId('5a4342e25d74600004b81d01'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'ATV',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d03')
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
                  '_id': ObjectId('5a4342e25d74600004b81d02')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '52',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e08a'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Driver',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e097')
                },
                {
                  'value': 'Name',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e096')
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
                  '_id': ObjectId('5a45f244a4994a000439e095')
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
                  '_id': ObjectId('5a45f244a4994a000439e094')
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
                  '_id': ObjectId('5a45f244a4994a000439e093')
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
                  '_id': ObjectId('5a45f244a4994a000439e092')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e091')
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
                  '_id': ObjectId('5a45f244a4994a000439e090')
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
                  '_id': ObjectId('5a45f244a4994a000439e08f')
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
                  '_id': ObjectId('5a45f244a4994a000439e08e')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e08d')
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
                  '_id': ObjectId('5a45f244a4994a000439e08c')
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
                  '_id': ObjectId('5a45f244a4994a000439e08b')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '26',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4342e25d74600004b81cf9'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Safety Check',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81d00')
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
                  '_id': ObjectId('5a4342e25d74600004b81cff')
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
                  '_id': ObjectId('5a4342e25d74600004b81cfe')
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
                  '_id': ObjectId('5a4342e25d74600004b81cfd')
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
                  '_id': ObjectId('5a4342e25d74600004b81cfc')
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
                  '_id': ObjectId('5a4342e25d74600004b81cfb')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4342e25d74600004b81cfa')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '27',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4342e25d74600004b81cf1'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Equipment (Safety, Fire Ext..., First Aid, Radio)',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81cf8')
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
                  '_id': ObjectId('5a4342e25d74600004b81cf7')
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
                  '_id': ObjectId('5a4342e25d74600004b81cf6')
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
                  '_id': ObjectId('5a4342e25d74600004b81cf5')
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
                  '_id': ObjectId('5a4342e25d74600004b81cf4')
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
                  '_id': ObjectId('5a4342e25d74600004b81cf3')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4342e25d74600004b81cf2')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '53',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a45f244a4994a000439e082'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Fuel',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a45f244a4994a000439e089')
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
                  '_id': ObjectId('5a45f244a4994a000439e088')
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
                  '_id': ObjectId('5a45f244a4994a000439e087')
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
                  '_id': ObjectId('5a45f244a4994a000439e086')
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
                  '_id': ObjectId('5a45f244a4994a000439e085')
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
                  '_id': ObjectId('5a45f244a4994a000439e084')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a45f244a4994a000439e083')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '80',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4a06efa2d82100046a6b11'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Brakes & Tyres',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4a06efa2d82100046a6b18')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b17')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b16')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b15')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b14')
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
                  '_id': ObjectId('5a4a06efa2d82100046a6b13')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a4a06efa2d82100046a6b12')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '29',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4342e25d74600004b81ce3'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'ATV Commenst',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81cf0')
                },
                {
                  'value': 'Eg; any repairs required etc',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81cef')
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
                  '_id': ObjectId('5a4342e25d74600004b81cee')
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
                  '_id': ObjectId('5a4342e25d74600004b81ced')
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
                  '_id': ObjectId('5a4342e25d74600004b81cec')
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
                  '_id': ObjectId('5a4342e25d74600004b81ceb')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81cea')
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
                  '_id': ObjectId('5a4342e25d74600004b81ce9')
                },
                {
                  'value': true,
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
                  '_id': ObjectId('5a4342e25d74600004b81ce8')
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
                  '_id': ObjectId('5a4342e25d74600004b81ce7')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4342e25d74600004b81ce6')
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
                  '_id': ObjectId('5a4342e25d74600004b81ce5')
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
                  '_id': ObjectId('5a4342e25d74600004b81ce4')
                }
              ]
            }
          ]
        }
      ],
      'editGroups': [],
      'viewGroups': []
    },
    {
      'name': 'Training ',
      '_id': ObjectId('5a430e3876ed160004c56638'),
      'groups': [
        {
          '_id': ObjectId('5a430e3876ed160004c56639'),
          'fields': [
            {
              'fieldType': 'Header',
              'fieldId': '34',
              '_id': ObjectId('5a4343fc5d74600004b81d88'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Training ',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4343fc5d74600004b81d8a')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d89')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '35',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4343fc5d74600004b81d7a'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Type',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4343fc5d74600004b81d87')
                },
                {
                  'value': 'Eg; IRB Safety',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4343fc5d74600004b81d86')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d85')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d84')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d83')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d82')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a4343fc5d74600004b81d81')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d80')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d7f')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d7e')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4343fc5d74600004b81d7d')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d7c')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d7b')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '48',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a434b5f5d74600004b81dc3'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Trainer',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a434b5f5d74600004b81dca')
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
                  '_id': ObjectId('5a434b5f5d74600004b81dc9')
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
                  '_id': ObjectId('5a434b5f5d74600004b81dc8')
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
                  '_id': ObjectId('5a434b5f5d74600004b81dc7')
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
                  '_id': ObjectId('5a434b5f5d74600004b81dc6')
                },
                {
                  'value': false,
                  'label': 'Options',
                  'fieldType': 'ListFieldView',
                  'extraProps': {
                    'values': [
                      {
                        'id': 'By7gjTlmG',
                        'score': '',
                        'value': 'Robbie Schwartz',
                        'label': 'Robbie Schwartz'
                      },
                      {
                        'id': 'HJuesaemG',
                        'score': '',
                        'value': 'Paul Barry',
                        'label': 'Paul Barry'
                      },
                      {
                        'id': 'HyBWjTx7z',
                        'score': '',
                        'value': 'Henry Webb',
                        'label': 'Henry Webb'
                      }
                    ]
                  },
                  '_id': ObjectId('5a434b5f5d74600004b81dc5')
                },
                {
                  'value': 'quickPick',
                  'label': 'Field Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'dropDown',
                        'label': 'Drop Down / List'
                      },
                      {
                        'value': 'quickPick',
                        'label': 'Quick Pick'
                      }
                    ]
                  },
                  '_id': ObjectId('5a434b5f5d74600004b81dc4')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '38',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4343fc5d74600004b81d5e'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Trainees ',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4343fc5d74600004b81d6b')
                },
                {
                  'value': 'Names of people undertaking training',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4343fc5d74600004b81d6a')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d69')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d68')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d67')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d66')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a4343fc5d74600004b81d65')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d64')
                },
                {
                  'value': true,
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
                  '_id': ObjectId('5a4343fc5d74600004b81d63')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d62')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4343fc5d74600004b81d61')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d60')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d5f')
                }
              ]
            },
            {
              'fieldType': 'Text',
              'fieldId': '36',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a4343fc5d74600004b81d50'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Training Comments',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4343fc5d74600004b81d5d')
                },
                {
                  'value': '',
                  'label': 'Placeholder',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4343fc5d74600004b81d5c')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d5b')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d5a')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d59')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d58')
                },
                {
                  'value': '',
                  'label': 'Advanced Settings',
                  'fieldType': 'HeaderFieldView',
                  '_id': ObjectId('5a4343fc5d74600004b81d57')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d56')
                },
                {
                  'value': true,
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
                  '_id': ObjectId('5a4343fc5d74600004b81d55')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d54')
                },
                {
                  'value': '',
                  'label': 'Max Length',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a4343fc5d74600004b81d53')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d52')
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
                  '_id': ObjectId('5a4343fc5d74600004b81d51')
                }
              ]
            }
          ]
        }
      ],
      'editGroups': [],
      'viewGroups': []
    },
    {
      'name': 'Patrol Logs',
      '_id': ObjectId('5a45f35ba4994a000439e184'),
      'groups': [
        {
          '_id': ObjectId('5a45f35ba4994a000439e185'),
          'fields': [
            {
              'fieldType': 'ScoreCalculator',
              'fieldId': '84',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a520237973d2a0004fcc003'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Total beach population ',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a520237973d2a0004fcc009')
                },
                {
                  'value': 'sum',
                  'label': 'Calculation Type',
                  'fieldType': 'QuickPickView',
                  'extraProps': {
                    'options': [
                      {
                        'value': 'mean',
                        'label': 'Mean'
                      },
                      {
                        'value': 'sum',
                        'label': 'Sum'
                      }
                    ]
                  },
                  '_id': ObjectId('5a520237973d2a0004fcc008')
                },
                {
                  'value': [
                    {
                      'value': 85,
                      'label': 'Patrol Logs.8-9'
                    },
                    {
                      'value': 86,
                      'label': 'Patrol Logs.9-10'
                    }
                  ],
                  'label': 'Fields used in calculation',
                  'fieldType': 'FormFieldPickerView',
                  '_id': ObjectId('5a520237973d2a0004fcc007')
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
                  '_id': ObjectId('5a520237973d2a0004fcc006')
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
                  '_id': ObjectId('5a520237973d2a0004fcc005')
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
                  '_id': ObjectId('5a520237973d2a0004fcc004')
                }
              ]
            },
            {
              'fieldType': 'Calculated',
              'fieldId': '85',
              'values': {
                'default': 'undefined'
              },
              '_id': ObjectId('5a520237973d2a0004fcbfff'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': '8-9',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a520237973d2a0004fcc002')
                },
                {
                  'value': '',
                  'label': 'Calculation',
                  'fieldType': 'TextFieldView',
                  'extraProps': {
                    'settings': {
                      'Auto Capitalize': 'none',
                      'Multi Line': true
                    }
                  },
                  '_id': ObjectId('5a520237973d2a0004fcc001')
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
                  '_id': ObjectId('5a520237973d2a0004fcc000')
                }
              ]
            },
            {
              'fieldType': 'Calculated',
              'fieldId': '86',
              'values': {
                'default': 'undefined'
              },
              '_id': ObjectId('5a520237973d2a0004fcbffb'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': '9-10',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a520237973d2a0004fcbffe')
                },
                {
                  'value': '',
                  'label': 'Calculation',
                  'fieldType': 'TextFieldView',
                  'extraProps': {
                    'settings': {
                      'Auto Capitalize': 'none',
                      'Multi Line': true
                    }
                  },
                  '_id': ObjectId('5a520237973d2a0004fcbffd')
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
                  '_id': ObjectId('5a520237973d2a0004fcbffc')
                }
              ]
            }
          ]
        }
      ],
      'editGroups': [],
      'viewGroups': []
    },
    {
      'name': 'Page 5',
      '_id': ObjectId('5a520237973d2a0004fcbff9'),
      'groups': [
        {
          '_id': ObjectId('5a520237973d2a0004fcbffa'),
          'fields': []
        }
      ],
      'editGroups': [],
      'viewGroups': []
    }
  ],
  'restrictedGroups': [
    '5a4301ce76ed160004c564d2',
    '5a43095c76ed160004c56620'
  ],
  'lastFieldId': 86,
  '__v': 38,
  'emailResponses': 'user2@example.com',
  'emailToSupervisor': false
}
