/* eslint-disable no-unused-expressions */
const middleware = require('../../api/middleware')
const expect = require('chai').expect
const http = require('../mocks/http')

describe('middleware', () => {
  it('should disable an endpoint', (done) => {
    const req = http.req()
    const res = http.res()

    res.when('status').then(status => {
      expect(status).to.equal(404)
      done()
    }).catch(done)

    middleware.disabled(req, res)
  })

  it('should handle an authenticated user', (done) => {
    const req = http.req(null, null, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGQ4ZDgyODQzYWE4NWMxYzY2MDU5NmYiLCJleHAiOjE1NTgwNzY3MjQsImlhdCI6MTQ5NTAwNDcyNH0.MIAGHnxf8MdMDetgaFhb3kz0XtVW-u-TIdIrpofKlQM')
    const res = http.res()

    res.when('status').then(() => done())

    middleware.isAuthenticated(req, res, () => done())
  })

  it('should bounce an unauthenticated user', (done) => {
    const req = http.req(null, null, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJaWQiOiI1OGQ4ZDgyODQzYWE4NWMxYzY2MDU5NmYiLCJleHAiOjE1NTgwNzY3MjQsImlhdCI6MTQ5NTAwNDcyNH0.MIAGHnxf8MdMDetgaFhb3kz0XtVW-u-TIdIrpofKlQM')
    const res = http.res()

    res.when('status').then(status => {
      expect(status).to.equal(401)
      done()
    }).catch(done)

    /* istanbul ignore next */
    middleware.isAuthenticated(req, res, () => done('should not have continued'))
  })

  it('should should bounce a token without permissions', (done) => {
    const req = http.req(null, null, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGQ4ZDgyODQzYWE4NWMxYzY2MDU5NmYiLCJleHAiOjE1NTgwNzY3MjQsImlhdCI6MTQ5NTAwNDcyNH0.MIAGHnxf8MdMDetgaFhb3kz0XtVW-u-TIdIrpofKlQM')
    const res = http.res()

    res.when('status').then(() => {
      done()
    })

    middleware.hasPermission('canViewResponses')(req, res, () => done('should not have continued'))
  })

  it('should handle a permission', (done) => {
    const req = http.req(null, null, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGQ4ZDgyODQzYWE4NWMxYzY2MDU5NmYiLCJleHAiOjE1NTk1MjYzNzAsInBlcm1pc3Npb25zIjp7Il9fcGFyZW50QXJyYXkiOnRydWUsIl9fcGFyZW50Ijp0cnVlLCIkX18iOnRydWUsIl9kb2MiOnRydWUsInRvT2JqZWN0Ijp0cnVlLCJ0b0pTT04iOnRydWUsIiRfX2lzTmVzdGVkIjp0cnVlLCJjYW5EZWxldGVGb3JtcyI6dHJ1ZSwiY2FuRWRpdEZvcm1zIjp0cnVlLCJjYW5DcmVhdGVGb3JtcyI6dHJ1ZSwiY2FuRXhwb3J0UmVzcG9uZXMiOnRydWUsImNhblJlbW92ZVJlc3BvbnNlcyI6dHJ1ZSwiY2FuQ3JlYXRlUmVzcG9uc2VzIjp0cnVlLCJjYW5WaWV3UmVzcG9uc2VzIjp0cnVlLCJjYW5FZGl0Q29tcGFueSI6dHJ1ZSwiY2FuVmlld1BsYW4iOnRydWUsImNhbkVkaXRQbGFuIjp0cnVlLCJjYW5WaWV3VXNlcnMiOnRydWUsImNhbkVkaXRVc2VycyI6dHJ1ZSwiY2FuUmVtb3ZlVXNlcnMiOnRydWUsImNhbkFkZFVzZXJzIjp0cnVlfSwiZ3JvdXBzIjpbIjU4ZDhkODI4NDNhYTg1YzFjNjYwNTk2ZSJdLCJjb21wYW55IjoiNThkOGQ4Mjg0M2FhODVjMWM2NjA1OTZkIiwiaWF0IjoxNDk2NDU0MzcwfQ.wQ66xH6m92GN6tFuceko4RaQgf3qSDUJ05g5A5vgJtA')
    const res = http.res()

    res.when('status').then(() => done())

    middleware.hasPermission('canViewResponses')(req, res, () => done())
  })

  it('should handle an any permission', (done) => {
    const req = http.req(null, null, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGQ4ZDgyODQzYWE4NWMxYzY2MDU5NmYiLCJleHAiOjE1NTk1MjYzNzAsInBlcm1pc3Npb25zIjp7Il9fcGFyZW50QXJyYXkiOnRydWUsIl9fcGFyZW50Ijp0cnVlLCIkX18iOnRydWUsIl9kb2MiOnRydWUsInRvT2JqZWN0Ijp0cnVlLCJ0b0pTT04iOnRydWUsIiRfX2lzTmVzdGVkIjp0cnVlLCJjYW5EZWxldGVGb3JtcyI6dHJ1ZSwiY2FuRWRpdEZvcm1zIjp0cnVlLCJjYW5DcmVhdGVGb3JtcyI6dHJ1ZSwiY2FuRXhwb3J0UmVzcG9uZXMiOnRydWUsImNhblJlbW92ZVJlc3BvbnNlcyI6dHJ1ZSwiY2FuQ3JlYXRlUmVzcG9uc2VzIjp0cnVlLCJjYW5WaWV3UmVzcG9uc2VzIjp0cnVlLCJjYW5FZGl0Q29tcGFueSI6dHJ1ZSwiY2FuVmlld1BsYW4iOnRydWUsImNhbkVkaXRQbGFuIjp0cnVlLCJjYW5WaWV3VXNlcnMiOnRydWUsImNhbkVkaXRVc2VycyI6dHJ1ZSwiY2FuUmVtb3ZlVXNlcnMiOnRydWUsImNhbkFkZFVzZXJzIjp0cnVlfSwiZ3JvdXBzIjpbIjU4ZDhkODI4NDNhYTg1YzFjNjYwNTk2ZSJdLCJjb21wYW55IjoiNThkOGQ4Mjg0M2FhODVjMWM2NjA1OTZkIiwiaWF0IjoxNDk2NDU0MzcwfQ.wQ66xH6m92GN6tFuceko4RaQgf3qSDUJ05g5A5vgJtA')
    const res = http.res()

    res.when('status').then(() => done())

    middleware.hasAnyPermission(['canViewResponses', 'canViewMyResponses'])(req, res, () => done())
  })

  it('should handle an any permission, first permission is no', (done) => {
    const req = http.req(null, null, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGQ4ZDgyODQzYWE4NWMxYzY2MDU5NmYiLCJleHAiOjE1NTk1MjYzNzAsInBlcm1pc3Npb25zIjp7Il9fcGFyZW50QXJyYXkiOnRydWUsIl9fcGFyZW50Ijp0cnVlLCIkX18iOnRydWUsIl9kb2MiOnRydWUsInRvT2JqZWN0Ijp0cnVlLCJ0b0pTT04iOnRydWUsIiRfX2lzTmVzdGVkIjp0cnVlLCJjYW5EZWxldGVGb3JtcyI6dHJ1ZSwiY2FuRWRpdEZvcm1zIjp0cnVlLCJjYW5DcmVhdGVGb3JtcyI6dHJ1ZSwiY2FuRXhwb3J0UmVzcG9uZXMiOnRydWUsImNhblJlbW92ZVJlc3BvbnNlcyI6dHJ1ZSwiY2FuQ3JlYXRlUmVzcG9uc2VzIjp0cnVlLCJjYW5WaWV3UmVzcG9uc2VzIjp0cnVlLCJjYW5FZGl0Q29tcGFueSI6dHJ1ZSwiY2FuVmlld1BsYW4iOnRydWUsImNhbkVkaXRQbGFuIjp0cnVlLCJjYW5WaWV3VXNlcnMiOnRydWUsImNhbkVkaXRVc2VycyI6dHJ1ZSwiY2FuUmVtb3ZlVXNlcnMiOnRydWUsImNhbkFkZFVzZXJzIjp0cnVlfSwiZ3JvdXBzIjpbIjU4ZDhkODI4NDNhYTg1YzFjNjYwNTk2ZSJdLCJjb21wYW55IjoiNThkOGQ4Mjg0M2FhODVjMWM2NjA1OTZkIiwiaWF0IjoxNDk2NDU0MzcwfQ.wQ66xH6m92GN6tFuceko4RaQgf3qSDUJ05g5A5vgJtA')
    const res = http.res()

    res.when('status').then(() => done())

    middleware.hasAnyPermission(['canViewMyResponses', 'canViewResponses'])(req, res, () => done())
  })

  it('should reject an any permission', (done) => {
    const req = http.req(null, null, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGQ4ZDgyODQzYWE4NWMxYzY2MDU5NmYiLCJleHAiOjE1NTk1MjYzNzAsInBlcm1pc3Npb25zIjp7Il9fcGFyZW50QXJyYXkiOnRydWUsIl9fcGFyZW50Ijp0cnVlLCIkX18iOnRydWUsIl9kb2MiOnRydWUsInRvT2JqZWN0Ijp0cnVlLCJ0b0pTT04iOnRydWUsIiRfX2lzTmVzdGVkIjp0cnVlLCJjYW5EZWxldGVGb3JtcyI6dHJ1ZSwiY2FuRWRpdEZvcm1zIjp0cnVlLCJjYW5DcmVhdGVGb3JtcyI6dHJ1ZSwiY2FuRXhwb3J0UmVzcG9uZXMiOnRydWUsImNhblJlbW92ZVJlc3BvbnNlcyI6dHJ1ZSwiY2FuQ3JlYXRlUmVzcG9uc2VzIjp0cnVlLCJjYW5WaWV3UmVzcG9uc2VzIjp0cnVlLCJjYW5FZGl0Q29tcGFueSI6dHJ1ZSwiY2FuVmlld1BsYW4iOnRydWUsImNhbkVkaXRQbGFuIjp0cnVlLCJjYW5WaWV3VXNlcnMiOnRydWUsImNhbkVkaXRVc2VycyI6dHJ1ZSwiY2FuUmVtb3ZlVXNlcnMiOnRydWUsImNhbkFkZFVzZXJzIjp0cnVlfSwiZ3JvdXBzIjpbIjU4ZDhkODI4NDNhYTg1YzFjNjYwNTk2ZSJdLCJjb21wYW55IjoiNThkOGQ4Mjg0M2FhODVjMWM2NjA1OTZkIiwiaWF0IjoxNDk2NDU0MzcwfQ.wQ66xH6m92GN6tFuceko4RaQgf3qSDUJ05g5A5vgJtA')
    const res = http.res()

    res.when('status').then(status => {
      expect(status).to.equal(403)
      done()
    })
      .catch(done)

    middleware.hasAnyPermission(['canViewMyResponses'])(req, res, done)
  })
})
