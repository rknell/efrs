/* eslint-disable no-unused-expressions */
const company = require('../../api/services/company')

describe('service.company', () => {
  it('should create a company', (done) => {
    company.create({
      adminEmail: 'user30@example.com',
      name: 'Example Company AU',
      adminPassword: 'testpass',
      plan: 'free',
      domain: 'example.com.au'
    })
      .then(() => done())
      .catch((err) => {
        done(err)
      })
  })
})
