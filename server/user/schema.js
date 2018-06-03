'use strict'

module.exports = {
	// createdById: {
	//
	// },
	dateCreated: {
		type: Date,
		default: Date.now(),
		required: true,
	},
	dateRemoved: {
		type: Date,
	},
	dateUpdated: {
		type: Date,
	},
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
	isRemoved: {
		type: Boolean,
	},
}
