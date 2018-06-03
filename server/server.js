'use strict'

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const email = require('emailjs')
const express = require('express')
const expressSession = require('express-session')
const passwordless = require('passwordless')
const mongoose = require('mongoose')
const MongoStore = require('passwordless-mongostore')
const logger = require('morgan')
const path = require('path')
const port = process.env.PORT || 5000

const pathToMongoDb = 'mongodb://localhost/amforecasting-local'
const host = 'http://localhost:8080/'

mongoose.Promise = require('bluebird')

const startDatabase = async () => {
	try {
		await mongoose.connect(pathToMongoDb)
		console.log('Connected to Mongo')
	} catch (error) {
		console.log('Error connecting to Mongo', error)
	}
}
startDatabase()

const app = express()

const yourEmail = process.env.AM_FORECASTING_EMAIL_ADDRESS
const yourPassword = process.env.AM_FORECASTING_EMAIL_PASSWORD
const yourSmtp = 'smtp.gmail.com'
const smtpServer = email.server.connect({
	user: yourEmail,
	password: yourPassword,
	timeout: 60000,
	host: yourSmtp,
	ssl: true,
})

passwordless.init(new MongoStore(pathToMongoDb))
passwordless.addDelivery(
	function (tokenToSend, uidToSend, recipient, callback) {
		const message = 'Click the link below to login to the A&M Forecasting System:'
		const token = `${host}?token=${tokenToSend}&uid=${encodeURIComponent(uidToSend)}`

		smtpServer.send({
			text: `${message}\n\n${token}`,
			from: yourEmail,
			to: recipient,
			subject: 'A&M Forecasting System Login',
			// attachment: [
			// 	{
			// 		data: "<html>INSERT HTML STRING LINKING TO TOKEN</html>",
			// 		alternative: true
			// 	}
			// ]
		}, function (err, message) {
			if (err) {
				console.log(err)
			}
			callback(err)
		})
	})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(expressSession({
	secret: 'quincylarsonisaprinceamongmen',
	saveUninitialized: false,
	resave: false,
	cookie: { maxAge: 60 * 60 * 24 * 365 * 10 },
}))
app.use(express.static(path.join(__dirname, 'public')))

// Passwordless middleware
app.use(passwordless.sessionSupport())
app.use(passwordless.acceptToken({ successRedirect: '/' }))

app.use('/',
	require('./routes'),
	require('./user/routes'),
)

app.listen(port, function () {
	console.log('Magic happens on port ' + port)
})
