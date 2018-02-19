const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

//connectie naar de database staat in een config file
//deze ".database" is omdat in die config file database:'mongodb:... staat,
//het kon ook pipo heten als dat in die config file zo zou heten, het is dus niet
//de naam van de file
//var promise = mongoose.createConnection(config.database, {useMongoClient: true})
mongoose.connect(config.database);

//dit komt te staan als je nodemon gebruikt, dit is niet verplicht
//maar zo kan je laten zien dat de connectie ontstaan is
mongoose.connection.on('connected', function () {
    console.log('Geconnecteerd naar database: ' + config.database)
})

//dit toont als er een error is in de db
mongoose.connection.on('error', function (error) {
    console.log('Database error: ' + error)
})

const app = express();

//dit gaat naar de map routes en daaronder de file order
const order = require('./routes/order');


//poort nummer voor back end
//const port = process.env.PORT || 8080;
const port = 3002;

//CORS gebruiken
app.use(cors());

//Statische folder, als je daar een index.html in zou zetten,
// zou die meteen naar daar gaan
app.use(express.static(path.join(__dirname, 'public')));

//Body parser middleware
app.use(bodyparser.json());

//paswoord middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//'/order" moet overeenkomen met de js file onder routes
app.use('/order', order);

//route van de index
app.get('/', function (req,res) {
    res.send('Deze pagina bestaat niet');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//start server en toon in console venster
app.listen(port, function () {
    console.log('Server is opgestart op poort '+port)
});