var admin = require('firebase-admin');

var serviceAccount = require('../../jcfk.json');
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://<DATABASE_NAME>.firebaseio.com',
});

/*
process.env['GOOGLE_APPLICATION_CREDENTIALS'] = 'c:/jcf.json'; // TODO sollte man anders machen. Siehe https://firebase.google.com/docs/admin/setup unter Initialize SDK
admin.initializeApp({
	credential: admin.credential.applicationDefault(),
	databaseURL: 'https://jorroch-consulting.firebaseio.com',
});
*/

const verifyFirebaseIdToken = async (req, res, next) => {
	const idToken = req.header('firebase-idToken');
	if (idToken === 'undefined') {
		const errorMessage = 'Access Denied: No access token sent.';
		console.log(errorMessage);
		return res.status(403).json(errorMessage);
	}
	try {
		const decodedToken = await admin.auth().verifyIdToken(idToken);
		req.decodedUID = decodedToken.uid;
		return next();
	} catch (error) {
		return res.status(403).json('Acess Denied: Cannot verify sent token: ' + error.message);
	}
};

module.exports = verifyFirebaseIdToken;
