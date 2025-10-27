var ObjectId = require('mongodb').ObjectID
var ISODate = function (date) {
  return new Date(date)
}

module.exports = [
  {
    '_id': '58d8d82843aa85c1c660596f',
    'password': '$2a$08$F1xyyVi1fLND4BxnxdLoDOAuFOJPzQDLplz2p98rGX.N0GcRwSh3W',
    'username': 'user1@example.com',
    'email': 'user1@example.com',
    'company': '58d8d82843aa85c1c660596d',
    'domain': 'example.com',
    'pushTokens': []
  }, {
    '_id': '58d8d82843aa85c1c660594f',
    'password': '$2a$08$F1xyyVi1fLND4BxnxdLoDOAuFOJPzQDLplz2p98rGX.N0GcRwSh3W',
    'username': 'user2@example.com',
    'firstName': 'Supervisor',
    'lastName': 'Example',
    'email': 'user2@example.com',
    'company': '592bff55905e450004e096e2',
    'domain': 'example.org',
    'pushTokens': [],
    'relationships': [
        {name: 'supervisor', user: '58d8d82843aa85c1c660596f'}
    ]
  }
]
