const ObjectId = require('mongodb').ObjectID
const ISODate = function (date) {
  return new Date(date)
}
module.exports = {
  '_id': ObjectId('5a2ca10e06269a00049e51dd'),
  'createdAt': ISODate('2017-12-10T02:50:54.952Z'),
  'updatedAt': ISODate('2017-12-10T03:47:31.313Z'),
  'createdBy': ObjectId('592bff55905e450004e096e4'),
  'company': ObjectId('592bff55905e450004e096e2'),
  'name': 'Score Test',
  'pages': [
    {
      'name': 'Page 1',
      '_id': ObjectId('5a2ca10e06269a00049e51de'),
      'groups': [
        {
          '_id': ObjectId('5a2ca10e06269a00049e51df'),
          'fields': [
            {
              'fieldType': 'ScoreCalculator',
              'fieldId': '1',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a2ca10e06269a00049e51e8'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Score',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a2ca10e06269a00049e51eb')
                },
                {
                  'value': 'mean',
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
                  '_id': ObjectId('5a2ca10e06269a00049e51ea')
                },
                {
                  'value': [
                    {
                      'field': {
                        'settings': [
                          {
                            '_id': '5a2ca10e06269a00049e51e7',
                            'fieldType': 'TextFieldView',
                            'label': 'Label',
                            'value': 'Test'
                          },
                          {
                            '_id': '5a2ca10e06269a00049e51e6',
                            'extraProps': {
                              'options': [
                                {
                                  'value': true,
                                  'label': 'Yes'
                                },
                                {
                                  'value': false,
                                  'label': 'No'
                                }
                              ]
                            },
                            'fieldType': 'QuickPickView',
                            'label': 'Required',
                            'value': false
                          },
                          {
                            '_id': '5a2ca10e06269a00049e51e5',
                            'extraProps': {
                              'options': [
                                {
                                  'value': true,
                                  'label': 'Yes'
                                },
                                {
                                  'value': false,
                                  'label': 'No'
                                }
                              ]
                            },
                            'fieldType': 'QuickPickView',
                            'label': 'Read Only',
                            'value': false
                          },
                          {
                            '_id': '5a2ca10e06269a00049e51e4',
                            'extraProps': {
                              'options': [
                                {
                                  'value': true,
                                  'label': 'Yes'
                                },
                                {
                                  'value': false,
                                  'label': 'No'
                                }
                              ]
                            },
                            'fieldType': 'QuickPickView',
                            'label': 'Hidden',
                            'value': false
                          },
                          {
                            '_id': '5a2ca10e06269a00049e51e3',
                            'extraProps': {
                              'options': [
                                {
                                  'value': true,
                                  'label': 'Yes'
                                },
                                {
                                  'value': false,
                                  'label': 'No'
                                }
                              ]
                            },
                            'fieldType': 'QuickPickView',
                            'label': 'Show In Search',
                            'value': false
                          },
                          {
                            '_id': '5a2ca10e06269a00049e51e2',
                            'extraProps': {
                              'values': [
                                {
                                  'score': '1',
                                  'id': 'BJMWb7cbz',
                                  'value': 'Yes',
                                  'label': 'Yes'
                                },
                                {
                                  'score': '2',
                                  'id': 'HyeM-WX9Wf',
                                  'value': 'No',
                                  'label': 'No'
                                }
                              ]
                            },
                            'fieldType': 'ListFieldView',
                            'label': 'Options',
                            'value': false
                          },
                          {
                            '_id': '5a2ca10e06269a00049e51e1',
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
                            'fieldType': 'QuickPickView',
                            'label': 'Field Type',
                            'value': 'quickPick'
                          }
                        ],
                        'rules': [],
                        'fields': [],
                        '_id': '5a2ca10e06269a00049e51e0',
                        'values': {
                          'default': 'Yes'
                        },
                        'fieldId': '2',
                        'fieldType': 'QuickPick'
                      },
                      'value': '2',
                      'label': 'Page 1.Test'
                    },
                    {
                      'value': '3',
                      'label': 'Page 1.Question 2'
                    }
                  ],
                  'label': 'Fields used in calculation',
                  'fieldType': 'FormFieldPickerView',
                  '_id': ObjectId('5a2ca10e06269a00049e51e9')
                }
              ]
            },
            {
              'fieldType': 'ScoreCalculator',
              'fieldId': '1',
              'values': {
                'default': ''
              },
              '_id': ObjectId('5a2ca10e06269a00049e51e8'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Score',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a2ca10e06269a00049e51eb')
                },
                {
                  'value': 'mean',
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
                  '_id': ObjectId('5a2ca10e06269a00049e51ea')
                },
                {
                  'value': [
                    {
                      'field': {
                        'settings': [
                          {
                            '_id': '5a2ca10e06269a00049e51e7',
                            'fieldType': 'TextFieldView',
                            'label': 'Label',
                            'value': 'Test'
                          },
                          {
                            '_id': '5a2ca10e06269a00049e51e6',
                            'extraProps': {
                              'options': [
                                {
                                  'value': true,
                                  'label': 'Yes'
                                },
                                {
                                  'value': false,
                                  'label': 'No'
                                }
                              ]
                            },
                            'fieldType': 'QuickPickView',
                            'label': 'Required',
                            'value': false
                          },
                          {
                            '_id': '5a2ca10e06269a00049e51e5',
                            'extraProps': {
                              'options': [
                                {
                                  'value': true,
                                  'label': 'Yes'
                                },
                                {
                                  'value': false,
                                  'label': 'No'
                                }
                              ]
                            },
                            'fieldType': 'QuickPickView',
                            'label': 'Read Only',
                            'value': false
                          },
                          {
                            '_id': '5a2ca10e06269a00049e51e4',
                            'extraProps': {
                              'options': [
                                {
                                  'value': true,
                                  'label': 'Yes'
                                },
                                {
                                  'value': false,
                                  'label': 'No'
                                }
                              ]
                            },
                            'fieldType': 'QuickPickView',
                            'label': 'Hidden',
                            'value': false
                          },
                          {
                            '_id': '5a2ca10e06269a00049e51e3',
                            'extraProps': {
                              'options': [
                                {
                                  'value': true,
                                  'label': 'Yes'
                                },
                                {
                                  'value': false,
                                  'label': 'No'
                                }
                              ]
                            },
                            'fieldType': 'QuickPickView',
                            'label': 'Show In Search',
                            'value': false
                          },
                          {
                            '_id': '5a2ca10e06269a00049e51e2',
                            'extraProps': {
                              'values': [
                                {
                                  'score': '1',
                                  'id': 'BJMWb7cbz',
                                  'value': 'Yes',
                                  'label': 'Yes'
                                },
                                {
                                  'score': '2',
                                  'id': 'HyeM-WX9Wf',
                                  'value': 'No',
                                  'label': 'No'
                                }
                              ]
                            },
                            'fieldType': 'ListFieldView',
                            'label': 'Options',
                            'value': false
                          },
                          {
                            '_id': '5a2ca10e06269a00049e51e1',
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
                            'fieldType': 'QuickPickView',
                            'label': 'Field Type',
                            'value': 'quickPick'
                          }
                        ],
                        'rules': [],
                        'fields': [],
                        '_id': '5a2ca10e06269a00049e51e0',
                        'values': {
                          'default': 'Yes'
                        },
                        'fieldId': '2',
                        'fieldType': 'QuickPick'
                      },
                      'value': '2',
                      'label': 'Page 1.Test'
                    },
                    {
                      'value': '3',
                      'label': 'Page 1.Question 2'
                    }
                  ],
                  'label': 'Fields used in calculation',
                  'fieldType': 'FormFieldPickerView',
                  '_id': ObjectId('5a2ca10e06269a00049e51e9')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '2',
              'values': {
                'score': '1',
                'default': 'Yes'
              },
              '_id': ObjectId('5a2ca10e06269a00049e51e0'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Test',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a2ca10e06269a00049e51e7')
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
                  '_id': ObjectId('5a2ca10e06269a00049e51e6')
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
                  '_id': ObjectId('5a2ca10e06269a00049e51e5')
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
                  '_id': ObjectId('5a2ca10e06269a00049e51e4')
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
                  '_id': ObjectId('5a2ca10e06269a00049e51e3')
                },
                {
                  'value': false,
                  'label': 'Options',
                  'fieldType': 'ListFieldView',
                  'extraProps': {
                    'values': [
                      {
                        'score': '1',
                        'id': 'BJMWb7cbz',
                        'value': 'Yes',
                        'label': 'Yes'
                      },
                      {
                        'score': '2',
                        'id': 'HyeM-WX9Wf',
                        'value': 'No',
                        'label': 'No'
                      }
                    ]
                  },
                  '_id': ObjectId('5a2ca10e06269a00049e51e2')
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
                  '_id': ObjectId('5a2ca10e06269a00049e51e1')
                }
              ]
            },
            {
              'fieldType': 'QuickPick',
              'fieldId': '3',
              'values': {
                'score': '3',
                'default': 'Uncle'
              },
              '_id': ObjectId('5a2ca4ce06269a00049e51ec'),
              'fields': [],
              'rules': [],
              'settings': [
                {
                  'value': 'Question 2',
                  'label': 'Label',
                  'fieldType': 'TextFieldView',
                  '_id': ObjectId('5a2ca4ce06269a00049e51f3')
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
                  '_id': ObjectId('5a2ca4ce06269a00049e51f2')
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
                  '_id': ObjectId('5a2ca4ce06269a00049e51f1')
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
                  '_id': ObjectId('5a2ca4ce06269a00049e51f0')
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
                  '_id': ObjectId('5a2ca4ce06269a00049e51ef')
                },
                {
                  'value': false,
                  'label': 'Options',
                  'fieldType': 'ListFieldView',
                  'extraProps': {
                    'values': [
                      {
                        'id': 'S1BhVQq-f',
                        'score': '4',
                        'value': 'bob',
                        'label': 'bob'
                      },
                      {
                        'id': 'Hyvn4Q5-M',
                        'score': '3',
                        'value': 'Uncle',
                        'label': 'Uncle'
                      }
                    ]
                  },
                  '_id': ObjectId('5a2ca4ce06269a00049e51ee')
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
                  '_id': ObjectId('5a2ca4ce06269a00049e51ed')
                }
              ]
            }
          ]
        }
      ],
      'editGroups': [],
      'viewGroups': []
    }
  ],
  'restrictedGroups': [],
  'lastFieldId': 3,
  '__v': 9
}
