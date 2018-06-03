'use strict'

const express = require('express')
const router = express.Router()

const JobModel = require('./model')

router.get('/api/jobs', async (req, res) => {
	const jobs = await JobModel.find().lean()

	res.json(jobs)
})

router.post('/api/jobs', async (req, res) => {
	const { jobName, numberOfWorkers } = req.body

	const newJob = await JobModel.create({
		jobName,
		numberOfWorkers,
	})

	res.json(newJob)
})

module.exports = router
