const ObjectId = require('mongodb').ObjectID
const ISODate = function (date) {
  return new Date(date)
}

module.exports = {
  form: {
    '_id': ObjectId('5aebed8ef81811f45bceb50f'),
    'createdAt': ISODate('2018-05-04T05:20:14.782Z'),
    'updatedAt': ISODate('2018-05-04T06:06:10.689Z'),
    'version': 4,
    'company': ObjectId('592bff55905e450004e096e2'),
    'name': 'Compare Dates Test',
    'createdBy': ObjectId('592bff55905e450004e096e4'),
    'dateStarted': ISODate('2018-05-04T05:19:51.506Z'),
    'emailResponses': '',
    'isArchived': false,
    'pages': [
      {
        'name': 'Page 1',
        '_id': ObjectId('5aebed8ef81811f45bceb510'),
        'groups': [
          {
            '_id': ObjectId('5aebed8ef81811f45bceb511'),
            'fields': [
              {
                'fieldType': 'Date',
                'fieldId': '1',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5aebed8ef81811f45bceb51e'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Date Field 1',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebed8ef81811f45bceb529')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Yes',
                          'value': true
                        },
                        {
                          'label': 'No',
                          'value': false
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb528')
                  },
                  {
                    'value': '',
                    'label': 'Max Days Future',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebed8ef81811f45bceb527')
                  },
                  {
                    'value': '',
                    'label': 'Max Days Past',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebed8ef81811f45bceb526')
                  },
                  {
                    'value': '',
                    'label': 'Default Date Offset (Days)',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebed8ef81811f45bceb525')
                  },
                  {
                    'value': false,
                    'label': 'Default to Today',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Yes',
                          'value': true
                        },
                        {
                          'label': 'No',
                          'value': false
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb524')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Yes',
                          'value': true
                        },
                        {
                          'label': 'No',
                          'value': false
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb523')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Yes',
                          'value': true
                        },
                        {
                          'label': 'No',
                          'value': false
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb522')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Yes',
                          'value': true
                        },
                        {
                          'label': 'No',
                          'value': false
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb521')
                  },
                  {
                    'value': 'date',
                    'label': 'Data Type',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Date',
                          'value': 'date'
                        },
                        {
                          'label': 'Time',
                          'value': 'time'
                        },
                        {
                          'label': 'Date & Time',
                          'value': 'datetime'
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb520')
                  },
                  {
                    'value': false,
                    'label': 'Set Now Button',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Yes',
                          'value': true
                        },
                        {
                          'label': 'No',
                          'value': false
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb51f')
                  }
                ]
              },
              {
                'fieldType': 'Date',
                'fieldId': '2',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5aebed8ef81811f45bceb512'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Date Field 2',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebed8ef81811f45bceb51d')
                  },
                  {
                    'value': false,
                    'label': 'Show In Search',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Yes',
                          'value': true
                        },
                        {
                          'label': 'No',
                          'value': false
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb51c')
                  },
                  {
                    'value': '',
                    'label': 'Max Days Future',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebed8ef81811f45bceb51b')
                  },
                  {
                    'value': '',
                    'label': 'Max Days Past',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebed8ef81811f45bceb51a')
                  },
                  {
                    'value': '',
                    'label': 'Default Date Offset (Days)',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebed8ef81811f45bceb519')
                  },
                  {
                    'value': false,
                    'label': 'Default to Today',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Yes',
                          'value': true
                        },
                        {
                          'label': 'No',
                          'value': false
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb518')
                  },
                  {
                    'value': false,
                    'label': 'Required',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Yes',
                          'value': true
                        },
                        {
                          'label': 'No',
                          'value': false
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb517')
                  },
                  {
                    'value': false,
                    'label': 'Read Only',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Yes',
                          'value': true
                        },
                        {
                          'label': 'No',
                          'value': false
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb516')
                  },
                  {
                    'value': false,
                    'label': 'Hidden',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Yes',
                          'value': true
                        },
                        {
                          'label': 'No',
                          'value': false
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb515')
                  },
                  {
                    'value': 'date',
                    'label': 'Data Type',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Date',
                          'value': 'date'
                        },
                        {
                          'label': 'Time',
                          'value': 'time'
                        },
                        {
                          'label': 'Date & Time',
                          'value': 'datetime'
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb514')
                  },
                  {
                    'value': false,
                    'label': 'Set Now Button',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'label': 'Yes',
                          'value': true
                        },
                        {
                          'label': 'No',
                          'value': false
                        }
                      ]
                    },
                    '_id': ObjectId('5aebed8ef81811f45bceb513')
                  }
                ]
              },
              {
                'fieldType': 'CompareDateField',
                'fieldId': '4',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5aebee13f81811f45bceb52b'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Difference (Minutes)',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebee13f81811f45bceb530')
                  },
                  {
                    'value': [
                      {
                        'label': 'Page 1 - Date Field 1',
                        'value': '1',
                        'field': {
                          'fieldType': 'Date',
                          'fieldId': '1',
                          'values': {
                            'default': ''
                          },
                          '_id': '5aebed8ef81811f45bceb51e',
                          'fields': [],
                          'rules': [],
                          'settings': [
                            {
                              'value': 'Date Field 1',
                              'label': 'Label',
                              'fieldType': 'TextFieldView',
                              '_id': '5aebed8ef81811f45bceb529'
                            },
                            {
                              'value': false,
                              'label': 'Show In Search',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb528'
                            },
                            {
                              'value': '',
                              'label': 'Max Days Future',
                              'fieldType': 'TextFieldView',
                              '_id': '5aebed8ef81811f45bceb527'
                            },
                            {
                              'value': '',
                              'label': 'Max Days Past',
                              'fieldType': 'TextFieldView',
                              '_id': '5aebed8ef81811f45bceb526'
                            },
                            {
                              'value': '',
                              'label': 'Default Date Offset (Days)',
                              'fieldType': 'TextFieldView',
                              '_id': '5aebed8ef81811f45bceb525'
                            },
                            {
                              'value': false,
                              'label': 'Default to Today',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb524'
                            },
                            {
                              'value': false,
                              'label': 'Required',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb523'
                            },
                            {
                              'value': false,
                              'label': 'Read Only',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb522'
                            },
                            {
                              'value': false,
                              'label': 'Hidden',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb521'
                            },
                            {
                              'value': 'date',
                              'label': 'Data Type',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Date',
                                    'value': 'date'
                                  },
                                  {
                                    'label': 'Time',
                                    'value': 'time'
                                  },
                                  {
                                    'label': 'Date & Time',
                                    'value': 'datetime'
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb520'
                            },
                            {
                              'value': false,
                              'label': 'Set Now Button',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb51f'
                            }
                          ]
                        }
                      }
                    ],
                    'label': 'First Field',
                    'fieldType': 'FormFieldPickerView',
                    'extraProps': {
                      'single': true
                    },
                    '_id': ObjectId('5aebee13f81811f45bceb52f')
                  },
                  {
                    'value': [
                      {
                        'label': 'Page 1 - Date Field 2',
                        'value': '2',
                        'field': {
                          'fieldType': 'Date',
                          'fieldId': '2',
                          'values': {
                            'default': ''
                          },
                          '_id': '5aebed8ef81811f45bceb512',
                          'fields': [],
                          'rules': [],
                          'settings': [
                            {
                              'value': 'Date Field 2',
                              'label': 'Label',
                              'fieldType': 'TextFieldView',
                              '_id': '5aebed8ef81811f45bceb51d'
                            },
                            {
                              'value': false,
                              'label': 'Show In Search',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb51c'
                            },
                            {
                              'value': '',
                              'label': 'Max Days Future',
                              'fieldType': 'TextFieldView',
                              '_id': '5aebed8ef81811f45bceb51b'
                            },
                            {
                              'value': '',
                              'label': 'Max Days Past',
                              'fieldType': 'TextFieldView',
                              '_id': '5aebed8ef81811f45bceb51a'
                            },
                            {
                              'value': '',
                              'label': 'Default Date Offset (Days)',
                              'fieldType': 'TextFieldView',
                              '_id': '5aebed8ef81811f45bceb519'
                            },
                            {
                              'value': false,
                              'label': 'Default to Today',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb518'
                            },
                            {
                              'value': false,
                              'label': 'Required',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb517'
                            },
                            {
                              'value': false,
                              'label': 'Read Only',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb516'
                            },
                            {
                              'value': false,
                              'label': 'Hidden',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb515'
                            },
                            {
                              'value': 'date',
                              'label': 'Data Type',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Date',
                                    'value': 'date'
                                  },
                                  {
                                    'label': 'Time',
                                    'value': 'time'
                                  },
                                  {
                                    'label': 'Date & Time',
                                    'value': 'datetime'
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb514'
                            },
                            {
                              'value': false,
                              'label': 'Set Now Button',
                              'fieldType': 'QuickPickView',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              '_id': '5aebed8ef81811f45bceb513'
                            }
                          ]
                        }
                      }
                    ],
                    'label': 'Second Field',
                    'fieldType': 'FormFieldPickerView',
                    'extraProps': {
                      'single': true
                    },
                    '_id': ObjectId('5aebee13f81811f45bceb52e')
                  },
                  {
                    'value': 'diffMin',
                    'label': 'Operation',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'diffMin',
                          'label': 'Difference (Minutes)'
                        },
                        {
                          'value': 'diffHour',
                          'label': 'Difference (Hours)'
                        },
                        {
                          'value': 'diffMonth',
                          'label': 'Difference (Months)'
                        },
                        {
                          'value': 'diffYear',
                          'label': 'Difference (Years)'
                        },
                        {
                          'value': 'isAfter',
                          'label': 'Is First After Second'
                        },
                        {
                          'value': 'isBefore',
                          'label': 'Is First Before Second'
                        }
                      ]
                    },
                    '_id': ObjectId('5aebee13f81811f45bceb52d')
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
                    '_id': ObjectId('5aebee13f81811f45bceb52c')
                  }
                ]
              },
              {
                'fieldType': 'CompareDateField',
                'fieldId': '5',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5aebf852f81811f45bceb54c'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Difference (Hours)',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebf852f81811f45bceb551')
                  },
                  {
                    'value': [
                      {
                        'field': {
                          'settings': [
                            {
                              '_id': '5aebed8ef81811f45bceb529',
                              'fieldType': 'TextFieldView',
                              'label': 'Label',
                              'value': 'Date Field 1'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb528',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Show In Search',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb527',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Future',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb526',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Past',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb525',
                              'fieldType': 'TextFieldView',
                              'label': 'Default Date Offset (Days)',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb524',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Default to Today',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb523',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Required',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb522',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Read Only',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb521',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Hidden',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb520',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Date',
                                    'value': 'date'
                                  },
                                  {
                                    'label': 'Time',
                                    'value': 'time'
                                  },
                                  {
                                    'label': 'Date & Time',
                                    'value': 'datetime'
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Data Type',
                              'value': 'date'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51f',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Set Now Button',
                              'value': false
                            }
                          ],
                          'rules': [],
                          'fields': [],
                          '_id': '5aebed8ef81811f45bceb51e',
                          'values': {
                            'default': ''
                          },
                          'fieldId': '1',
                          'fieldType': 'Date'
                        },
                        'value': '1',
                        'label': 'Page 1 - Date Field 1'
                      }
                    ],
                    'label': 'First Field',
                    'fieldType': 'FormFieldPickerView',
                    'extraProps': {
                      'single': true
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb550')
                  },
                  {
                    'value': [
                      {
                        'field': {
                          'settings': [
                            {
                              '_id': '5aebed8ef81811f45bceb51d',
                              'fieldType': 'TextFieldView',
                              'label': 'Label',
                              'value': 'Date Field 2'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51c',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Show In Search',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51b',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Future',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51a',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Past',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb519',
                              'fieldType': 'TextFieldView',
                              'label': 'Default Date Offset (Days)',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb518',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Default to Today',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb517',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Required',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb516',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Read Only',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb515',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Hidden',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb514',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Date',
                                    'value': 'date'
                                  },
                                  {
                                    'label': 'Time',
                                    'value': 'time'
                                  },
                                  {
                                    'label': 'Date & Time',
                                    'value': 'datetime'
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Data Type',
                              'value': 'date'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb513',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Set Now Button',
                              'value': false
                            }
                          ],
                          'rules': [],
                          'fields': [],
                          '_id': '5aebed8ef81811f45bceb512',
                          'values': {
                            'default': ''
                          },
                          'fieldId': '2',
                          'fieldType': 'Date'
                        },
                        'value': '2',
                        'label': 'Page 1 - Date Field 2'
                      }
                    ],
                    'label': 'Second Field',
                    'fieldType': 'FormFieldPickerView',
                    'extraProps': {
                      'single': true
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb54f')
                  },
                  {
                    'value': 'diffHour',
                    'label': 'Operation',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'diffMin',
                          'label': 'Difference (Minutes)'
                        },
                        {
                          'value': 'diffHour',
                          'label': 'Difference (Hours)'
                        },
                        {
                          'value': 'diffMonth',
                          'label': 'Difference (Months)'
                        },
                        {
                          'value': 'diffYear',
                          'label': 'Difference (Years)'
                        },
                        {
                          'value': 'isAfter',
                          'label': 'Is First After Second'
                        },
                        {
                          'value': 'isBefore',
                          'label': 'Is First Before Second'
                        }
                      ]
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb54e')
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
                    '_id': ObjectId('5aebf852f81811f45bceb54d')
                  }
                ]
              },
              {
                'fieldType': 'CompareDateField',
                'fieldId': '6',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5aebf852f81811f45bceb546'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Difference (Months)',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebf852f81811f45bceb54b')
                  },
                  {
                    'value': [
                      {
                        'field': {
                          'settings': [
                            {
                              '_id': '5aebed8ef81811f45bceb529',
                              'fieldType': 'TextFieldView',
                              'label': 'Label',
                              'value': 'Date Field 1'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb528',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Show In Search',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb527',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Future',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb526',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Past',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb525',
                              'fieldType': 'TextFieldView',
                              'label': 'Default Date Offset (Days)',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb524',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Default to Today',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb523',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Required',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb522',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Read Only',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb521',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Hidden',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb520',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Date',
                                    'value': 'date'
                                  },
                                  {
                                    'label': 'Time',
                                    'value': 'time'
                                  },
                                  {
                                    'label': 'Date & Time',
                                    'value': 'datetime'
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Data Type',
                              'value': 'date'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51f',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Set Now Button',
                              'value': false
                            }
                          ],
                          'rules': [],
                          'fields': [],
                          '_id': '5aebed8ef81811f45bceb51e',
                          'values': {
                            'default': ''
                          },
                          'fieldId': '1',
                          'fieldType': 'Date'
                        },
                        'value': '1',
                        'label': 'Page 1 - Date Field 1'
                      }
                    ],
                    'label': 'First Field',
                    'fieldType': 'FormFieldPickerView',
                    'extraProps': {
                      'single': true
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb54a')
                  },
                  {
                    'value': [
                      {
                        'field': {
                          'settings': [
                            {
                              '_id': '5aebed8ef81811f45bceb51d',
                              'fieldType': 'TextFieldView',
                              'label': 'Label',
                              'value': 'Date Field 2'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51c',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Show In Search',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51b',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Future',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51a',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Past',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb519',
                              'fieldType': 'TextFieldView',
                              'label': 'Default Date Offset (Days)',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb518',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Default to Today',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb517',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Required',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb516',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Read Only',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb515',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Hidden',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb514',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Date',
                                    'value': 'date'
                                  },
                                  {
                                    'label': 'Time',
                                    'value': 'time'
                                  },
                                  {
                                    'label': 'Date & Time',
                                    'value': 'datetime'
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Data Type',
                              'value': 'date'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb513',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Set Now Button',
                              'value': false
                            }
                          ],
                          'rules': [],
                          'fields': [],
                          '_id': '5aebed8ef81811f45bceb512',
                          'values': {
                            'default': ''
                          },
                          'fieldId': '2',
                          'fieldType': 'Date'
                        },
                        'value': '2',
                        'label': 'Page 1 - Date Field 2'
                      }
                    ],
                    'label': 'Second Field',
                    'fieldType': 'FormFieldPickerView',
                    'extraProps': {
                      'single': true
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb549')
                  },
                  {
                    'value': 'diffMonth',
                    'label': 'Operation',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'diffMin',
                          'label': 'Difference (Minutes)'
                        },
                        {
                          'value': 'diffHour',
                          'label': 'Difference (Hours)'
                        },
                        {
                          'value': 'diffMonth',
                          'label': 'Difference (Months)'
                        },
                        {
                          'value': 'diffYear',
                          'label': 'Difference (Years)'
                        },
                        {
                          'value': 'isAfter',
                          'label': 'Is First After Second'
                        },
                        {
                          'value': 'isBefore',
                          'label': 'Is First Before Second'
                        }
                      ]
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb548')
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
                    '_id': ObjectId('5aebf852f81811f45bceb547')
                  }
                ]
              },
              {
                'fieldType': 'CompareDateField',
                'fieldId': '7',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5aebf852f81811f45bceb540'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Difference (Years)',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebf852f81811f45bceb545')
                  },
                  {
                    'value': [
                      {
                        'field': {
                          'settings': [
                            {
                              '_id': '5aebed8ef81811f45bceb529',
                              'fieldType': 'TextFieldView',
                              'label': 'Label',
                              'value': 'Date Field 1'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb528',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Show In Search',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb527',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Future',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb526',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Past',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb525',
                              'fieldType': 'TextFieldView',
                              'label': 'Default Date Offset (Days)',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb524',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Default to Today',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb523',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Required',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb522',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Read Only',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb521',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Hidden',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb520',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Date',
                                    'value': 'date'
                                  },
                                  {
                                    'label': 'Time',
                                    'value': 'time'
                                  },
                                  {
                                    'label': 'Date & Time',
                                    'value': 'datetime'
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Data Type',
                              'value': 'date'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51f',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Set Now Button',
                              'value': false
                            }
                          ],
                          'rules': [],
                          'fields': [],
                          '_id': '5aebed8ef81811f45bceb51e',
                          'values': {
                            'default': ''
                          },
                          'fieldId': '1',
                          'fieldType': 'Date'
                        },
                        'value': '1',
                        'label': 'Page 1 - Date Field 1'
                      }
                    ],
                    'label': 'First Field',
                    'fieldType': 'FormFieldPickerView',
                    'extraProps': {
                      'single': true
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb544')
                  },
                  {
                    'value': [
                      {
                        'field': {
                          'settings': [
                            {
                              '_id': '5aebed8ef81811f45bceb51d',
                              'fieldType': 'TextFieldView',
                              'label': 'Label',
                              'value': 'Date Field 2'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51c',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Show In Search',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51b',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Future',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51a',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Past',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb519',
                              'fieldType': 'TextFieldView',
                              'label': 'Default Date Offset (Days)',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb518',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Default to Today',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb517',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Required',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb516',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Read Only',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb515',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Hidden',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb514',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Date',
                                    'value': 'date'
                                  },
                                  {
                                    'label': 'Time',
                                    'value': 'time'
                                  },
                                  {
                                    'label': 'Date & Time',
                                    'value': 'datetime'
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Data Type',
                              'value': 'date'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb513',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Set Now Button',
                              'value': false
                            }
                          ],
                          'rules': [],
                          'fields': [],
                          '_id': '5aebed8ef81811f45bceb512',
                          'values': {
                            'default': ''
                          },
                          'fieldId': '2',
                          'fieldType': 'Date'
                        },
                        'value': '2',
                        'label': 'Page 1 - Date Field 2'
                      }
                    ],
                    'label': 'Second Field',
                    'fieldType': 'FormFieldPickerView',
                    'extraProps': {
                      'single': true
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb543')
                  },
                  {
                    'value': 'diffYear',
                    'label': 'Operation',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'diffMin',
                          'label': 'Difference (Minutes)'
                        },
                        {
                          'value': 'diffHour',
                          'label': 'Difference (Hours)'
                        },
                        {
                          'value': 'diffMonth',
                          'label': 'Difference (Months)'
                        },
                        {
                          'value': 'diffYear',
                          'label': 'Difference (Years)'
                        },
                        {
                          'value': 'isAfter',
                          'label': 'Is First After Second'
                        },
                        {
                          'value': 'isBefore',
                          'label': 'Is First Before Second'
                        }
                      ]
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb542')
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
                    '_id': ObjectId('5aebf852f81811f45bceb541')
                  }
                ]
              },
              {
                'fieldType': 'CompareDateField',
                'fieldId': '8',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5aebf852f81811f45bceb53a'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Difference (isAfterSecond)',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebf852f81811f45bceb53f')
                  },
                  {
                    'value': [
                      {
                        'field': {
                          'settings': [
                            {
                              '_id': '5aebed8ef81811f45bceb529',
                              'fieldType': 'TextFieldView',
                              'label': 'Label',
                              'value': 'Date Field 1'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb528',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Show In Search',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb527',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Future',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb526',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Past',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb525',
                              'fieldType': 'TextFieldView',
                              'label': 'Default Date Offset (Days)',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb524',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Default to Today',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb523',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Required',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb522',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Read Only',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb521',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Hidden',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb520',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Date',
                                    'value': 'date'
                                  },
                                  {
                                    'label': 'Time',
                                    'value': 'time'
                                  },
                                  {
                                    'label': 'Date & Time',
                                    'value': 'datetime'
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Data Type',
                              'value': 'date'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51f',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Set Now Button',
                              'value': false
                            }
                          ],
                          'rules': [],
                          'fields': [],
                          '_id': '5aebed8ef81811f45bceb51e',
                          'values': {
                            'default': ''
                          },
                          'fieldId': '1',
                          'fieldType': 'Date'
                        },
                        'value': '1',
                        'label': 'Page 1 - Date Field 1'
                      }
                    ],
                    'label': 'First Field',
                    'fieldType': 'FormFieldPickerView',
                    'extraProps': {
                      'single': true
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb53e')
                  },
                  {
                    'value': [
                      {
                        'field': {
                          'settings': [
                            {
                              '_id': '5aebed8ef81811f45bceb51d',
                              'fieldType': 'TextFieldView',
                              'label': 'Label',
                              'value': 'Date Field 2'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51c',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Show In Search',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51b',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Future',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51a',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Past',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb519',
                              'fieldType': 'TextFieldView',
                              'label': 'Default Date Offset (Days)',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb518',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Default to Today',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb517',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Required',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb516',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Read Only',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb515',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Hidden',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb514',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Date',
                                    'value': 'date'
                                  },
                                  {
                                    'label': 'Time',
                                    'value': 'time'
                                  },
                                  {
                                    'label': 'Date & Time',
                                    'value': 'datetime'
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Data Type',
                              'value': 'date'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb513',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Set Now Button',
                              'value': false
                            }
                          ],
                          'rules': [],
                          'fields': [],
                          '_id': '5aebed8ef81811f45bceb512',
                          'values': {
                            'default': ''
                          },
                          'fieldId': '2',
                          'fieldType': 'Date'
                        },
                        'value': '2',
                        'label': 'Page 1 - Date Field 2'
                      }
                    ],
                    'label': 'Second Field',
                    'fieldType': 'FormFieldPickerView',
                    'extraProps': {
                      'single': true
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb53d')
                  },
                  {
                    'value': 'isAfter',
                    'label': 'Operation',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'diffMin',
                          'label': 'Difference (Minutes)'
                        },
                        {
                          'value': 'diffHour',
                          'label': 'Difference (Hours)'
                        },
                        {
                          'value': 'diffMonth',
                          'label': 'Difference (Months)'
                        },
                        {
                          'value': 'diffYear',
                          'label': 'Difference (Years)'
                        },
                        {
                          'value': 'isAfter',
                          'label': 'Is First After Second'
                        },
                        {
                          'value': 'isBefore',
                          'label': 'Is First Before Second'
                        }
                      ]
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb53c')
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
                    '_id': ObjectId('5aebf852f81811f45bceb53b')
                  }
                ]
              },
              {
                'fieldType': 'CompareDateField',
                'fieldId': '9',
                'values': {
                  'default': ''
                },
                '_id': ObjectId('5aebf852f81811f45bceb534'),
                'fields': [],
                'rules': [],
                'settings': [
                  {
                    'value': 'Difference (isBeforeSecond)',
                    'label': 'Label',
                    'fieldType': 'TextFieldView',
                    '_id': ObjectId('5aebf852f81811f45bceb539')
                  },
                  {
                    'value': [
                      {
                        'field': {
                          'settings': [
                            {
                              '_id': '5aebed8ef81811f45bceb529',
                              'fieldType': 'TextFieldView',
                              'label': 'Label',
                              'value': 'Date Field 1'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb528',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Show In Search',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb527',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Future',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb526',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Past',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb525',
                              'fieldType': 'TextFieldView',
                              'label': 'Default Date Offset (Days)',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb524',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Default to Today',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb523',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Required',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb522',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Read Only',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb521',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Hidden',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb520',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Date',
                                    'value': 'date'
                                  },
                                  {
                                    'label': 'Time',
                                    'value': 'time'
                                  },
                                  {
                                    'label': 'Date & Time',
                                    'value': 'datetime'
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Data Type',
                              'value': 'date'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51f',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Set Now Button',
                              'value': false
                            }
                          ],
                          'rules': [],
                          'fields': [],
                          '_id': '5aebed8ef81811f45bceb51e',
                          'values': {
                            'default': ''
                          },
                          'fieldId': '1',
                          'fieldType': 'Date'
                        },
                        'value': '1',
                        'label': 'Page 1 - Date Field 1'
                      }
                    ],
                    'label': 'First Field',
                    'fieldType': 'FormFieldPickerView',
                    'extraProps': {
                      'single': true
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb538')
                  },
                  {
                    'value': [
                      {
                        'field': {
                          'settings': [
                            {
                              '_id': '5aebed8ef81811f45bceb51d',
                              'fieldType': 'TextFieldView',
                              'label': 'Label',
                              'value': 'Date Field 2'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51c',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Show In Search',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51b',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Future',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb51a',
                              'fieldType': 'TextFieldView',
                              'label': 'Max Days Past',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb519',
                              'fieldType': 'TextFieldView',
                              'label': 'Default Date Offset (Days)',
                              'value': ''
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb518',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Default to Today',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb517',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Required',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb516',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Read Only',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb515',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Hidden',
                              'value': false
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb514',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Date',
                                    'value': 'date'
                                  },
                                  {
                                    'label': 'Time',
                                    'value': 'time'
                                  },
                                  {
                                    'label': 'Date & Time',
                                    'value': 'datetime'
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Data Type',
                              'value': 'date'
                            },
                            {
                              '_id': '5aebed8ef81811f45bceb513',
                              'extraProps': {
                                'options': [
                                  {
                                    'label': 'Yes',
                                    'value': true
                                  },
                                  {
                                    'label': 'No',
                                    'value': false
                                  }
                                ]
                              },
                              'fieldType': 'QuickPickView',
                              'label': 'Set Now Button',
                              'value': false
                            }
                          ],
                          'rules': [],
                          'fields': [],
                          '_id': '5aebed8ef81811f45bceb512',
                          'values': {
                            'default': ''
                          },
                          'fieldId': '2',
                          'fieldType': 'Date'
                        },
                        'value': '2',
                        'label': 'Page 1 - Date Field 2'
                      }
                    ],
                    'label': 'Second Field',
                    'fieldType': 'FormFieldPickerView',
                    'extraProps': {
                      'single': true
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb537')
                  },
                  {
                    'value': 'isBefore',
                    'label': 'Operation',
                    'fieldType': 'QuickPickView',
                    'extraProps': {
                      'options': [
                        {
                          'value': 'diffMin',
                          'label': 'Difference (Minutes)'
                        },
                        {
                          'value': 'diffHour',
                          'label': 'Difference (Hours)'
                        },
                        {
                          'value': 'diffMonth',
                          'label': 'Difference (Months)'
                        },
                        {
                          'value': 'diffYear',
                          'label': 'Difference (Years)'
                        },
                        {
                          'value': 'isAfter',
                          'label': 'Is First After Second'
                        },
                        {
                          'value': 'isBefore',
                          'label': 'Is First Before Second'
                        }
                      ]
                    },
                    '_id': ObjectId('5aebf852f81811f45bceb536')
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
                    '_id': ObjectId('5aebf852f81811f45bceb535')
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
    'emailToSupervisor': false,
    'restrictedGroups': [],
    'lastFieldId': 9,
    '__v': 3
  },
  responses: {
    basic: {
      '_id': ObjectId('5aebeeb354ecda8a9ec7090d'),
      'version': 1,
      'company': ObjectId('592bff55905e450004e096e2'),
      'formId': ObjectId('5aebed8ef81811f45bceb50f'),
      'responses': {
        '1': {
          'values': {
            'default': '2018-05-04'
          }
        },
        '2': {
          'values': {
            'default': '2018-05-05'
          }
        }
      },
      'dateStarted': '2018-05-04T05:25:07.832Z',
      'createdAt': ISODate('2018-05-04T05:25:07.832Z'),
      'updatedAt': ISODate('2018-05-04T05:25:18.934Z'),
      'createdBy': ObjectId('592bff55905e450004e096e4'),
      'formVersion': 3,
      'files': [],
      'status': {
        'assignedToUser': null,
        'assignedToGroup': null,
        'name': ''
      },
      '__v': 0
    }
  }
}
