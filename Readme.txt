CORS -> Durch das Einsetzen des CORS Package als Middleware im Express-Server werden die nötigen Header gesendet, so dass
        der Browser sich nicht beschwer, wenn ich von Localhost oder All-Ink auf den Heroku-Server zugreifen.

Express

Mongoose -> Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, 
        provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.


Server-Re-Deploy
        heroku login
        git add .
        git commit -m 'another commit'
        git push origin master
        Unter Heroku Website -> Deploy ganz unten Manual Deploy aus Github triggern


MLab.com -> mongodb+srv://admin:<password>@cluster0-xzovj.mongodb.net/test?retryWrites=true&w=majority
        admin:admin

dotenv -> Um sensitive Daten in eine .env Datei zu packen

body-parser -> Parsed requests im router zu JSON

npm install firebase-admin -> Um im AuthHelper den Token zu verifiyen. Man muss dazu erst auf der Firebase-Console (Firebase Webstie - Projekteinstellungen - Dienstkonten)
        eine json Datei erstellen. Diese enthält die Zugangsknoten und einen private Key. Die Datei gilt es zu sichern. Optimalerweise setzt man eine Umgebungsvariable unter Windows/Linux
        oder macht in der Powershell "$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\service-account-file.json"". Ich habe das jetzt im Code gemacht, was unsicher ist. 
        Beschreibung von Google siehe unter: https://firebase.google.com/docs/admin/setup