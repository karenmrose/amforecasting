'use strict'

const express = require('express')
const router = express.Router()
const passwordless = require('passwordless')

const UserModel = require('./user/model')

router.post('/api/sendtoken', passwordless.requestToken((user, delivery, callback) => {
	callback(null, user)
}), (req, res) => {
	res.json({ 'sent': true })
})

router.get('/api/users', async (req, res) => {
	const users = await UserModel.find()

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

router.delete('/api/users/:userId', async (req, res) => {
	const { userId } = req.params
	const user = await UserModel.find({ _id: userId })

	await UserModel.update({
		...user,
		isRemoved: true,
		dateRemoved: Date.now(),
	})

	const removedUser = await UserModel.find({ _id: userId })

	res.json(removedUser)
})

module.exports = router
