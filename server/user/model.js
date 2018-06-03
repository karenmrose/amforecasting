'use strict'

const mongoose = require('mongoose')

const schema = require('./schema')

const userSchema = mongoose.Schema(schema)
const UserModel = mongoose.model('Users', userSchema)

module.exports = UserModel
