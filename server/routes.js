'use strict'

const express = require('express')
const router = express.Router()
const passwordless = require('passwordless')

router.post('/api/sendtoken', passwordless.requestToken((user, delivery, callback) => {
	callback(null, user)
}), (req, res) => {
	res.json({ 'sent': true })
})

module.exports = router
