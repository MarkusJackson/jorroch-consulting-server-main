const express = require('express');
const router = express.Router();
const TodoApp = require('./models/Model');
const generateUID = require('../../helper/IdHelper');

router.post('/init', async (req, res) => {
	const userid = req.decodedUID;
	const appData = await TodoApp.findOne({ userid: userid });
	if (appData) return res.status(400).send("Todo-App data for the user with id '" + userid + "' already exists.");
	const todoApp = new TodoApp({
		userid: userid,
		customTodoLists: {
			todoLists: [
				{
					id: generateUID(),
					title: 'Ihre erste Liste',
					description: 'Dieses Liste wurde bei der Initialisierung erstellt. <br/> Fügen sie Todos hinzu oder neue Listen.',
					todos: [
						{
							id: generateUID(),
							title: 'Ihr erstes Todo',
							description: 'Dieses Todo wurde bei der Initialisierung erstellt. <br/> Fügen sie Todos hinzu oder neue Listen.',
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
	console.log('App-Todo -> Get-Whole-Data-Request for: ', req.decodedUID);
	try {
		const todoApp = await TodoApp.findOne({ userid: req.decodedUID });
	} catch (err) {
		console.log('Error getting data for user: ' + req.decodedUID + ' - ' + err);
		return res.status(500).send("Could not load data for user with id '" + req.decodedUID + "' -> " + err);
	}
	if (!todoApp) return res.status(404).send("No data for user with id '" + req.decodedUID + "' found");
	res.status(200).json(todoApp);
});

router.post('/data', async (req, res) => {
	console.log('Put-Data-Request-Body unformatted: ', req.body);
	console.log('Todo-App: Updating todo app content for user: ', req.decodedUID);
	const appObject = new TodoApp(req.body);
	// console.log('Put-Data-Request tansformed to Schema-Object.toJson(): ', JSON.stringify(appObject));
	let updatedTodoApp = await TodoApp.findOneAndUpdate({ _id: appObject._id }, appObject, { new: true });
	if (!updatedTodoApp) return res.status(400).send("Update of Todo-App data for user with id '" + appObject.userid + "' failed");
	res.status(200).json(updatedTodoApp);
});

module.exports = router;
