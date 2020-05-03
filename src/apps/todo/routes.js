const express = require('express');
const router = express.Router();
const TodoApp = require('./models/Model');
const generateUID = require('../../helper/IdHelper');

router.post('/init', async (req, res) => {
	const userid = req.body.userid;
	const appData = await TodoApp.findOne({ userid: userid });
	if (appData) return res.status(400).send("Todo-App data for the user with id '" + req.body.userid + "' already exists.");
	const todoApp = new TodoApp({
		userid: userid,
		customTodoLists: {
			todoLists: [
				{
					id: generateUID(),
					title: 'Dummy-Liste',
					description: 'Beim Init erstellt',
					todos: [
						{
							id: generateUID(),
							title: 'Dummy-Todo',
							description: 'Beim Init erstellt',
						},
					],
				},
			],
		},
	});

	try {
		const savedTodoApp = await todoApp.save();
		res.status(200).json(savedTodoApp);
	} catch (error) {
		res.status(500).json({ message: error });
	}
});

router.get('/data', async (req, res) => {
	console.log('App-Todo -> Get-Whole-Data-Request for: ', req.query);
	const todoApp = await TodoApp.findOne({ userid: req.query.userid });
	if (!todoApp) return res.status(400).send("No data for user with id '" + req.body.userid + "' found");
	res.status(200).json(todoApp);
});

router.put('/data', async (req, res) => {
	console.log('Put-Data-Request-Body unformatted: ', req.body);
	const appObject = new TodoApp(req.body);
	console.log('Put-Data-Request tansformed to Schema-Object.toJson(): ', JSON.stringify(appObject));
	let updatedTodoApp = await TodoApp.findOneAndUpdate({ _id: appObject._id }, appObject, { new: true });
	if (!updatedTodoApp) return res.status(400).send("Update of Todo-App data for user with id '" + appObject.userid + "' failed");
	res.status(200).json(updatedTodoApp);
});

module.exports = router;
