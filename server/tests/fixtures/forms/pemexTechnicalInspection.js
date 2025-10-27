const ObjectId = require('mongodb').ObjectID
const ISODate = function (date) {
  return new Date(date)
}


module.exports = ﻿{
  form: {
    "_id" : ObjectId("5b05e7293279160afadf8ab1"),
      "createdAt" : ISODate("2018-05-23T22:11:53.864Z"),
      "updatedAt" : ISODate("2018-05-24T04:38:17.513Z"),
      "version" : 13,
      "company" : ObjectId("5ab4426306051300041dd65e"),
      "name" : "INSPECCIÓN TÉCNICA",
      "createdBy" : ObjectId("5ab4426306051300041dd660"),
      "dateStarted" : ISODate("2018-05-23T22:09:18.333Z"),
      "emailResponses" : "",
      "isArchived" : false,
      "pages" : [
      {
        "name" : "Página 1",
        "_id" : ObjectId("5b05e7293279160afadf8ab2"),
        "groups" : [
          {
            "_id" : ObjectId("5b05e7293279160afadf8ab3"),
            "fields" : [
              {
                "fieldType" : "QuickPick",
                "fieldId" : "1",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b05e7293279160afadf8ab4"),
                "fields" : [],
                "rules" : [],
                "settings" : [
                  {
                    "value" : "Refineria",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b05e7293279160afadf8abc")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "value" : true,
                          "label" : "Yes"
                        },
                        {
                          "value" : false,
                          "label" : "No"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b05e7293279160afadf8abb")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "value" : true,
                          "label" : "Yes"
                        },
                        {
                          "value" : false,
                          "label" : "No"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b05e7293279160afadf8aba")
                  },
                  {
                    "value" : false,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "value" : true,
                          "label" : "Yes"
                        },
                        {
                          "value" : false,
                          "label" : "No"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b05e7293279160afadf8ab9")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "value" : true,
                          "label" : "Yes"
                        },
                        {
                          "value" : false,
                          "label" : "No"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b05e7293279160afadf8ab8")
                  },
                  {
                    "value" : false,
                    "label" : "Select Multiple Items",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "value" : true,
                          "label" : "Yes"
                        },
                        {
                          "value" : false,
                          "label" : "No"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b05e7293279160afadf8ab7")
                  },
                  {
                    "value" : false,
                    "label" : "Options",
                    "fieldType" : "ListFieldView",
                    "extraProps" : {
                      "values" : [
                        {
                          "selected" : true,
                          "id" : "H1QfPP7kQ",
                          "score" : "",
                          "value" : "Miguel Hidalgo",
                          "label" : "Miguel Hidalgo"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b05e7293279160afadf8ab6")
                  },
                  {
                    "value" : "dropDown",
                    "label" : "Field Type",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "value" : "dropDown",
                          "label" : "Drop Down / List"
                        },
                        {
                          "value" : "quickPick",
                          "label" : "Quick Pick"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b05e7293279160afadf8ab5")
                  }
                ]
              },
              {
                "fieldType" : "QuickPick",
                "fieldId" : "2",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8c43"),
                "fields" : [],
                "rules" : [],
                "settings" : [
                  {
                    "value" : "Sector",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c4b")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c4a")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c49")
                  },
                  {
                    "value" : false,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c48")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c47")
                  },
                  {
                    "value" : false,
                    "label" : "Select Multiple Items",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c46")
                  },
                  {
                    "value" : false,
                    "label" : "Options",
                    "fieldType" : "ListFieldView",
                    "extraProps" : {
                      "values" : [
                        {
                          "selected" : false,
                          "label" : "7",
                          "value" : "7",
                          "score" : "",
                          "id" : "Hy2jvwQy7"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c45")
                  },
                  {
                    "value" : "dropDown",
                    "label" : "Field Type",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Drop Down / List",
                          "value" : "dropDown"
                        },
                        {
                          "label" : "Quick Pick",
                          "value" : "quickPick"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c44")
                  }
                ]
              },
              {
                "fieldType" : "Date",
                "fieldId" : "3",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8c37"),
                "fields" : [],
                "rules" : [],
                "settings" : [
                  {
                    "value" : "Fecha",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c42")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c41")
                  },
                  {
                    "value" : "",
                    "label" : "Max Days Future",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c40")
                  },
                  {
                    "value" : "",
                    "label" : "Max Days Past",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c3f")
                  },
                  {
                    "value" : "",
                    "label" : "Default Date Offset (Days)",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c3e")
                  },
                  {
                    "value" : true,
                    "label" : "Default to Today",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c3d")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c3c")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c3b")
                  },
                  {
                    "value" : false,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c3a")
                  },
                  {
                    "value" : "date",
                    "label" : "Data Type",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Date",
                          "value" : "date"
                        },
                        {
                          "label" : "Time",
                          "value" : "time"
                        },
                        {
                          "label" : "Date & Time",
                          "value" : "datetime"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c39")
                  },
                  {
                    "value" : false,
                    "label" : "Set Now Button",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c38")
                  }
                ]
              },
              {
                "fieldType" : "Date",
                "fieldId" : "6",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8c2b"),
                "fields" : [],
                "rules" : [],
                "settings" : [
                  {
                    "value" : "Hora",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c36")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c35")
                  },
                  {
                    "value" : "",
                    "label" : "Max Days Future",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c34")
                  },
                  {
                    "value" : "",
                    "label" : "Max Days Past",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c33")
                  },
                  {
                    "value" : "",
                    "label" : "Default Date Offset (Days)",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c32")
                  },
                  {
                    "value" : true,
                    "label" : "Default to Today",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c31")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c30")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c2f")
                  },
                  {
                    "value" : false,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c2e")
                  },
                  {
                    "value" : "time",
                    "label" : "Data Type",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Date",
                          "value" : "date"
                        },
                        {
                          "label" : "Time",
                          "value" : "time"
                        },
                        {
                          "label" : "Date & Time",
                          "value" : "datetime"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c2d")
                  },
                  {
                    "value" : false,
                    "label" : "Set Now Button",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c2c")
                  }
                ]
              },
              {
                "fieldType" : "QuickPick",
                "fieldId" : "4",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8c22"),
                "fields" : [],
                "rules" : [],
                "settings" : [
                  {
                    "value" : "Planta",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c2a")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c29")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c28")
                  },
                  {
                    "value" : false,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c27")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c26")
                  },
                  {
                    "value" : false,
                    "label" : "Select Multiple Items",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c25")
                  },
                  {
                    "value" : false,
                    "label" : "Options",
                    "fieldType" : "ListFieldView",
                    "extraProps" : {
                      "values" : [
                        {
                          "selected" : false,
                          "label" : "ALQUILACIÓN",
                          "value" : "ALQUILACIÓN",
                          "score" : "",
                          "id" : "H1NJ_w7km"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c24")
                  },
                  {
                    "value" : "dropDown",
                    "label" : "Field Type",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Drop Down / List",
                          "value" : "dropDown"
                        },
                        {
                          "label" : "Quick Pick",
                          "value" : "quickPick"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c23")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "7",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8c13"),
                "fields" : [],
                "rules" : [],
                "settings" : [
                  {
                    "value" : "Asunto",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c21")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c20")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c1f")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c1e")
                  },
                  {
                    "value" : false,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c1d")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c1c")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c1b")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c1a")
                  },
                  {
                    "value" : false,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c19")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c18")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c17")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c16")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c15")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c14")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "8",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8c04"),
                "fields" : [],
                "rules" : [],
                "settings" : [
                  {
                    "value" : "Antecedentes",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c12")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c11")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c10")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c0f")
                  },
                  {
                    "value" : false,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c0e")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c0d")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c0c")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c0b")
                  },
                  {
                    "value" : false,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c0a")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c09")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c08")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c07")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c06")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c05")
                  }
                ]
              },
              {
                "fieldType" : "Header",
                "fieldId" : "9",
                "_id" : ObjectId("5b060fad3279160afadf8c01"),
                "fields" : [],
                "rules" : [],
                "settings" : [
                  {
                    "value" : "Observaciones",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c03")
                  },
                  {
                    "value" : false,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8c02")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "10",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8bf2"),
                "fields" : [],
                "rules" : [],
                "settings" : [
                  {
                    "value" : "1",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8c00")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bff")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bfe")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bfd")
                  },
                  {
                    "value" : false,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bfc")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bfb")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bfa")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bf9")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bf8")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bf7")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bf6")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bf5")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bf4")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bf3")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "12",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8be3"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0610cf3279160afadf8c50"),
                    "conditions" : [
                      {
                        "field" : "10",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0610cf3279160afadf8c51")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "2",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bf1")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bf0")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bef")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bee")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bed")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bec")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8beb")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bea")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8be9")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8be8")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8be7")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8be6")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8be5")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8be4")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "13",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8bd4"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0616333279160afadf8c65"),
                    "conditions" : [
                      {
                        "field" : "12",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0616333279160afadf8c66")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "3",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8be2")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8be1")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8be0")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bdf")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bde")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bdd")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bdc")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bdb")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bda")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bd9")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bd8")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bd7")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bd6")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bd5")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "14",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8bc5"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0616333279160afadf8c63"),
                    "conditions" : [
                      {
                        "field" : "13",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0616333279160afadf8c64")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "4",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bd3")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bd2")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bd1")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bd0")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bcf")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bce")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bcd")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bcc")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bcb")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bca")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bc9")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bc8")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bc7")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bc6")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "15",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8bb6"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0616333279160afadf8c61"),
                    "conditions" : [
                      {
                        "field" : "14",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0616333279160afadf8c62")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "5",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bc4")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bc3")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bc2")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bc1")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bc0")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bbf")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bbe")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bbd")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bbc")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bbb")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bba")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bb9")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bb8")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bb7")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "16",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8ba7"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0616333279160afadf8c5f"),
                    "conditions" : [
                      {
                        "field" : "15",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0616333279160afadf8c60")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "6",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bb5")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bb4")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bb3")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bb2")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bb1")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bb0")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8baf")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bae")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bad")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8bac")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8bab")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8baa")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ba9")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ba8")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "17",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8b98"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0616333279160afadf8c5d"),
                    "conditions" : [
                      {
                        "field" : "16",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0616333279160afadf8c5e")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "7",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8ba6")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8ba5")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ba4")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ba3")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ba2")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ba1")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8ba0")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b9f")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b9e")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b9d")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b9c")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b9b")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b9a")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b99")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "18",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8b89"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b06167f3279160afadf8c69"),
                    "conditions" : [
                      {
                        "field" : "17",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b06167f3279160afadf8c6a")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "8",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b97")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b96")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b95")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b94")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b93")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b92")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b91")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b90")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b8f")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b8e")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b8d")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b8c")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b8b")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b8a")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "19",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8b7a"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0616333279160afadf8c5b"),
                    "conditions" : [
                      {
                        "field" : "18",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0616333279160afadf8c5c")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "9",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b88")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b87")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b86")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b85")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b84")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b83")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b82")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b81")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b80")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b7f")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b7e")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b7d")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b7c")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b7b")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "20",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8b6b"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0616333279160afadf8c59"),
                    "conditions" : [
                      {
                        "field" : "19",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0616333279160afadf8c5a")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "10",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b79")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b78")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b77")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b76")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b75")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b74")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b73")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b72")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b71")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b70")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b6f")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b6e")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b6d")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b6c")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "21",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8b5c"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0616333279160afadf8c57"),
                    "conditions" : [
                      {
                        "field" : "20",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0616333279160afadf8c58")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "11",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b6a")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b69")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b68")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b67")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b66")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b65")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b64")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b63")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b62")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b61")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b60")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b5f")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b5e")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b5d")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "22",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8b4d"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0616333279160afadf8c55"),
                    "conditions" : [
                      {
                        "field" : "21",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0616333279160afadf8c56")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "12",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b5b")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b5a")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b59")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b58")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b57")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b56")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b55")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b54")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b53")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b52")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b51")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b50")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b4f")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b4e")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "23",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8b3e"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0616333279160afadf8c53"),
                    "conditions" : [
                      {
                        "field" : "22",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0616333279160afadf8c54")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "13",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b4c")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b4b")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b4a")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b49")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b48")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b47")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b46")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b45")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b44")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b43")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b42")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b41")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b40")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b3f")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "24",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8b2f"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0617d63279160afadf8c79"),
                    "conditions" : [
                      {
                        "field" : "23",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0617d63279160afadf8c7a")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "14",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b3d")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b3c")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b3b")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b3a")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b39")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b38")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b37")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b36")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b35")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b34")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b33")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b32")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b31")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b30")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "25",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8b20"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0617d63279160afadf8c77"),
                    "conditions" : [
                      {
                        "field" : "24",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0617d63279160afadf8c78")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "15",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b2e")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b2d")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b2c")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b2b")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b2a")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b29")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b28")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b27")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b26")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b25")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b24")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b23")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b22")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b21")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "26",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8b11"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0617d63279160afadf8c75"),
                    "conditions" : [
                      {
                        "field" : "25",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0617d63279160afadf8c76")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "16",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b1f")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b1e")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b1d")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b1c")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b1b")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b1a")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b19")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b18")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b17")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b16")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b15")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b14")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b13")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b12")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "27",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8b02"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0617d63279160afadf8c73"),
                    "conditions" : [
                      {
                        "field" : "26",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0617d63279160afadf8c74")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "17",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b10")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b0f")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b0e")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b0d")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b0c")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b0b")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b0a")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b09")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b08")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b07")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b06")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b05")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b04")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8b03")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "28",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8af3"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0617d63279160afadf8c71"),
                    "conditions" : [
                      {
                        "field" : "27",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0617d63279160afadf8c72")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "18",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b01")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8b00")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8aff")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8afe")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8afd")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8afc")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8afb")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8afa")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8af9")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8af8")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8af7")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8af6")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8af5")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8af4")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "29",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8ae4"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0617d63279160afadf8c6f"),
                    "conditions" : [
                      {
                        "field" : "28",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0617d63279160afadf8c70")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "19",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8af2")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8af1")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8af0")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8aef")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8aee")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8aed")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8aec")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8aeb")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8aea")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ae9")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8ae8")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ae7")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ae6")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ae5")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "30",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8ad5"),
                "fields" : [],
                "rules" : [
                  {
                    "operator" : "all",
                    "_id" : ObjectId("5b0617d63279160afadf8c6d"),
                    "conditions" : [
                      {
                        "field" : "29",
                        "operator" : "!==",
                        "value" : "",
                        "_id" : ObjectId("5b0617d63279160afadf8c6e")
                      }
                    ],
                    "action" : {
                      "setting" : "Hidden",
                      "value" : false
                    }
                  }
                ],
                "settings" : [
                  {
                    "value" : "20",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8ae3")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8ae2")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ae1")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ae0")
                  },
                  {
                    "value" : true,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8adf")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ade")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8add")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8adc")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8adb")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ada")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8ad9")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ad8")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ad7")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ad6")
                  }
                ]
              },
              {
                "fieldType" : "Photo",
                "fieldId" : "32",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8acf"),
                "fields" : [],
                "rules" : [],
                "settings" : [
                  {
                    "value" : "Fotos",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8ad4")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ad3")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ad2")
                  },
                  {
                    "value" : false,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ad1")
                  },
                  {
                    "value" : "",
                    "label" : "Max Photos",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8ad0")
                  }
                ]
              },
              {
                "fieldType" : "Text",
                "fieldId" : "35",
                "values" : {
                  "default" : ""
                },
                "_id" : ObjectId("5b060fad3279160afadf8ac0"),
                "fields" : [],
                "rules" : [],
                "settings" : [
                  {
                    "value" : "Conclusiones y Recomendaciones",
                    "label" : "Label",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8ace")
                  },
                  {
                    "value" : "",
                    "label" : "Placeholder",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8acd")
                  },
                  {
                    "value" : false,
                    "label" : "Required",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8acc")
                  },
                  {
                    "value" : false,
                    "label" : "Read Only",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8acb")
                  },
                  {
                    "value" : false,
                    "label" : "Hidden",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8aca")
                  },
                  {
                    "value" : false,
                    "label" : "Show In Search",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ac9")
                  },
                  {
                    "value" : "",
                    "label" : "Advanced Settings",
                    "fieldType" : "HeaderFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8ac8")
                  },
                  {
                    "value" : true,
                    "label" : "Auto Correct",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ac7")
                  },
                  {
                    "value" : true,
                    "label" : "Multi Line",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ac6")
                  },
                  {
                    "value" : false,
                    "label" : "Select Text on Focus",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ac5")
                  },
                  {
                    "value" : "",
                    "label" : "Max Length",
                    "fieldType" : "TextFieldView",
                    "_id" : ObjectId("5b060fad3279160afadf8ac4")
                  },
                  {
                    "value" : "default",
                    "label" : "Keyboard Type",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Default",
                          "value" : "default"
                        },
                        {
                          "label" : "Numeric",
                          "value" : "numeric"
                        },
                        {
                          "label" : "Email Address",
                          "value" : "email-address"
                        },
                        {
                          "label" : "Phone Pad",
                          "value" : "phone-pad"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ac3")
                  },
                  {
                    "value" : false,
                    "label" : "Barcode scan",
                    "fieldType" : "QuickPickView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "Yes",
                          "value" : true
                        },
                        {
                          "label" : "No",
                          "value" : false
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ac2")
                  },
                  {
                    "value" : "sentences",
                    "label" : "Auto Capitalize",
                    "fieldType" : "PickerView",
                    "extraProps" : {
                      "options" : [
                        {
                          "label" : "All Caps",
                          "value" : "characters"
                        },
                        {
                          "label" : "Each word",
                          "value" : "words"
                        },
                        {
                          "label" : "Sentences",
                          "value" : "sentences"
                        },
                        {
                          "label" : "None",
                          "value" : "none"
                        }
                      ]
                    },
                    "_id" : ObjectId("5b060fad3279160afadf8ac1")
                  }
                ]
              }
            ]
          }
        ],
        "editGroups" : [],
        "viewGroups" : []
      }
    ],
      "emailToSupervisor" : false,
      "restrictedGroups" : [],
      "lastFieldId" : 35,
      "__v" : 12,
      "headerImageURL" : "https://i.imgur.com/L1WeTi7.png"
  },
  responses: [﻿{
    "_id" : ObjectId("5b074b5737eba6ec195e5885"),
      "version" : 1,
      "company" : ObjectId("5ab4426306051300041dd65e"),
      "formId" : ObjectId("5b05e7293279160afadf8ab1"),
      "responses" : {
      "3" : {
        "values" : {
          "default" : "2018-05-24T23:31:35.210Z"
        }
      },
      "6" : {
        "values" : {
          "default" : "2018-05-24T23:31:35.216Z"
        }
      },
      "10" : {
        "values" : {
          "default" : "1"
        }
      }
    },
    "dateStarted" : "2018-05-24T23:31:35.092Z",
      "createdAt" : ISODate("2018-05-24T23:31:35.092Z"),
      "updatedAt" : ISODate("2018-05-24T23:31:53.093Z"),
      "createdBy" : ObjectId("5ab4426306051300041dd660"),
      "formVersion" : 13,
      "files" : [],
      "status" : {
      "assignedToUser" : null,
        "assignedToGroup" : null,
        "name" : ""
    },
    "__v" : 0
  }]
}