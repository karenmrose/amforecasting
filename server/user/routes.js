'use strict'

const Boom = require('boom')
const express = require('express')
const router = express.Router()

const UserModel = require('./model')

router.get('/api/users', async (req, res) => {
	const users = await UserModel.find().lean()

	res.json(users)
})

router.post('/api/users', async (req, res) => {
	const { firstName, lastName, emailAddress, title } = req.body

	const newUser = await UserModel.create({
		firstName,
		lastName,
		emailAddress,
		title,
	})

	res.json(newUser)
})

router.put('/api/users/:userId', async (req, res) => {
	const { userId } = req.params
	const { firstName, lastName, emailAddress, title } = req.body

	const user = await UserModel.findOne({ _id: userId }).lean()
	if (!user) {
		throw Boom.notFound(`User not found by id ${userId}`)
	}

	await UserModel.update({
		...user,
		firstName,
		lastName,
		emailAddress,
		title,
		dateUpdated: Date.now(),
	})

	const updatedUser = await UserModel.findOne({ _id: userId }).lean()

	res.json(updatedUser)
})

router.delete('/api/users/:userId', async (req, res) => {
	const { userId } = req.params

	const user = await UserModel.findOne({ _id: userId }).lean()
	if (!user) {
		throw Boom.notFound(`User not found by id ${userId}`)
	}

	await UserModel.update({
		...user,
		isRemoved: true,
		dateRemoved: Date.now(),
	})

	const removedUser = await UserModel.findOne({ _id: userId }).lean()

	res.json(removedUser)
})

module.exports = router
