'use strict'

const express = require('express')
const router = express.Router()
const passwordless = require('passwordless')

router.post('/sendtoken', passwordless.requestToken(function (user, delivery, callback) {
	callback(null, user)
}), function (req, res) {
	res.json({ 'sent': true })
})

module.exports = router
