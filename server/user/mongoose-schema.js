'use strict'

const mongoose = require('mongoose')

const rawSchema = require('./schema')
const schema = new mongoose.Schema(rawSchema, {
	collection: 'Users',
})

module.exports = schema
