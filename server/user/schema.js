'use strict'

module.exports = {
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	emailAddress: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		enum: ['PROJECT_MANAGER', 'SUPERVISOR'],
	},
}
