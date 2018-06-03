'use strict'

const express = require('express')
const router = express.Router()

const JobModel = require('./model')

router.get('/api/jobs', async (req, res) => {
	const jobs = await JobModel.find().lean()

	res.json(jobs)
})

module.exports = router
