import NetworkRequestHandler from '../../app/stores/NetworkRequestHandler'

it('should set a header', () => {
  const nrh = new NetworkRequestHandler('testPath', false, err => {
    expect(err).not.toBeDefined()
  })

  nrh.setHeader('newHeader', true)
  expect(nrh.headers.newHeader).toBe(true)
})

it('should clear a header', () => {
  const nrh = new NetworkRequestHandler('testPath', false, err => {
    expect(err).not.toBeDefined()
  })

  nrh.setHeader('newHeader', true)
  expect(nrh.headers.newHeader).toBe(true)
  nrh.clearHeader('newHeader')
  expect(nrh.headers.newHeader).not.toBe(true)
})

it('should execute a call', done => {
  const nrh = new NetworkRequestHandler('api', true, err => {
    expect(err).not.toBeDefined()
  })

  nrh.call({ endpoint: '/test' })
    .then(result => {
      done()
    })
    .catch(done)
})

it('should handle an error', done => {
  const nrh = new NetworkRequestHandler('api', true, () => {
    done()
    throw new Error('error')
  })

  nrh.call({ endpoint: '/testerror', handleError: false })
    .then(result => {
      done(new Error('it should not have hit success'))
    })
})
