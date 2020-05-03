CORS -> Durch das Einsetzen des CORS Package als Middleware im Express-Server werden die nötigen Header gesendet, so dass
        der Browser sich nicht beschwer, wenn ich von Localhost oder All-Ink auf den Heroku-Server zugreifen.

Express

Mongoose -> Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, 
        provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.


Server-Re-Deploy
        heroku login
        git add .
        git commit -m 'another commit'
        git push heroku master
        Unter https://jorroch-consulting.herokuapp.com/ prüfen


MLab.com -> mongodb+srv://admin:<password>@cluster0-xzovj.mongodb.net/test?retryWrites=true&w=majority
        admin:admin

dotenv -> Um sensitive Daten in eine .env Datei zu packen

body-parser -> Parsed requests im router zu JSON