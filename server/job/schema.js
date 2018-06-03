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
	jobName: {
		type: String,
		required: true,
	},
	numberOfWorkers: {
		type: Number,
		required: true,
	},
	isRemoved: {
		type: Boolean,
	},
}
