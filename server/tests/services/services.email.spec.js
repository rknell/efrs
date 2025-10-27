/* eslint-disable no-unused-expressions */
const email = require('../../api/services/email')
const expect = require('chai').expect

describe('email service', () => {
  it('should send an email with a csv attachement', () => {
    const result = email._sendSendgrid('test', 'test subject', 'from@example.com', 'from name', 'to@example.com', {
      isTest: true,
      textAttachments: [
        { data: 'Hello world' }
      ]
    })

    expect(result.body.attachments.length).to.equal(1)
  })
})
