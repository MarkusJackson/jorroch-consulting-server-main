const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
	id: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	priority: {
		type: Number,
		required: true,
		default: 4,
	},
	remainingHours: {
		type: Number,
		required: true,
		default: 1,
	},
	remainingMinutes: {
		type: Number,
		required: true,
		default: 0,
	},
});

const TodoListSchema = mongoose.Schema({
	id: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	todos: [{ type: TodoSchema, required: true }],
});

const TodoAppSchema = mongoose.Schema({
	userid: {
		type: String,
		required: true,
	},
	calendarTodoLists: {
		numberOfListsToDisplay: {
			type: Number,
			required: true,
			default: 7,
		},
		firstDate2Display: {
			default: 7,
			type: Date,
			default: Date.now,
		},
		todoLists: [TodoListSchema],
	},
	customTodoLists: {
		numberOfListsToDisplay: {
			type: Number,
			required: true,
			default: 2,
		},
		todoLists: [{ type: TodoListSchema, required: true }],
	},
});

module.exports = mongoose.model('TodoApp', TodoAppSchema);
