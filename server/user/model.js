'use strict'

const mongoConnection = require('../mongo-connections').localhost
const mongooseSchema = require('./mongoose-schema')

module.exports = mongoConnection.model('User', mongooseSchema)
