function ObjectId (data) {
  return data
}

function ISODate (data) {
  return data
}

export default {
  setupUser: {
    '_id': ObjectId('5a36fa6aac023a4b3bae2f22'),
    'createdAt': ISODate('2017-12-17T23:14:50.373Z'),
    'updatedAt': ISODate('2017-12-17T23:14:50.390Z'),
    'password': '$2a$08$gtSMlrmdhH0zOeeYJzPh.egq2I65fD9WFV5PypJfNWqikrZOzFQJq',
    'username': 'user12@example.com',
    'email': 'user12@example.com',
    'domain': 'example.com.au',
    'firstName': 'Admin',
    'lastName': 'User',
    'relationships': [],
    'pushTokens': [],
    'isSetup': true,
    '__v': 0,
    'company': ObjectId('5a36fa6aac023a4b3bae2f20')
  },
  newUser: {
    '_id': ObjectId('5a36fa6aac023a4b3bae2f22'),
    'createdAt': ISODate('2017-12-17T23:14:50.373Z'),
    'updatedAt': ISODate('2017-12-17T23:14:50.390Z'),
    'password': '$2a$08$gtSMlrmdhH0zOeeYJzPh.egq2I65fD9WFV5PypJfNWqikrZOzFQJq',
    'username': 'user12@example.com',
    'email': 'user12@example.com',
    'domain': 'example.com.au',
    'firstName': 'Admin',
    'lastName': 'User',
    'relationships': [],
    'pushTokens': [],
    'isSetup': false,
    '__v': 0,
    'company': ObjectId('5a36fa6aac023a4b3bae2f20')
  }
}
