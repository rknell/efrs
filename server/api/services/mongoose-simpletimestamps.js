'use strict'

exports.SimpleTimestamps = function (schema) {
  schema.add({
    createdAt: Date,
    updatedAt: Date
  })

  schema.pre('save', function (next) {
    if (!this.createdAt) {
      this.createdAt = this.updatedAt = new Date()
    } else {
      if (!this.skipHooks) {
        this.updatedAt = new Date()
      }
    }
    next()
  })
}
