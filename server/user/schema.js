'use strict'

module.exports = {
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	emailAddress: {
		type: String,
	},
	title: {
		type: String,
		enum: ['PROJECT_MANAGER', 'SUPERVISOR'],
	},
}
