'use strict'

let errorHandler = (res) => {
  return (err) => {
    try {
      if (err) {
        if (err.code === 11000) {
          res.status(400).json({ message: 'Record already exists' })
        } else {
          console.error(err.stack)
          res.status(err.code || err.status || err.statusCode || 500).json({ message: err.message || 'An error occurred, please check your data and try again' })
        }
      } else {
        console.error('Error without a stack', null)
        console.trace()
        res.status(500).json({ message: 'An unknown error occurred. Please try again.' })
      }
    } catch (e) {
      console.error(e)
      res.status(500).json({ message: 'An unknown error occurred. Please try again.' })
    }
  }
}

module.exports = errorHandler
