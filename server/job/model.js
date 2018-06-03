'use strict'

const mongoose = require('mongoose')

const schema = require('./schema')

const jobSchema = mongoose.Schema(schema)
const JobModel = mongoose.model('Jobs', jobSchema)

module.exports = JobModel
