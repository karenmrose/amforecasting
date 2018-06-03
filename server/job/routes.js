'use strict'

const Boom = require('boom')
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

router.put('/api/jobs/:jobId', async (req, res) => {
	const { jobId } = req.params
	const { jobName, numberOfWorkers } = req.body

	const job = await JobModel.findOne({ _id: jobId }).lean()
	if (!job) {
		throw Boom.notFound(`Job not found by id ${jobId}`)
	}

	await JobModel.update({
		...job,
		jobName,
		numberOfWorkers,
		dateUpdated: Date.now(),
	})

	const updatedJob = await JobModel.findOne({ _id: jobId }).lean()

	res.json(updatedJob)
})

module.exports = router
