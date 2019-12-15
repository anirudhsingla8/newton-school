const express = require('express');
const mongodb = require('mongodb');
const routes = require('./routes/index.js')
const DB_URI = 'mongodb+srv://anirudh:rj13sl1608@cluster0-lcda6.mongodb.net/test?retryWrites=true&w=majority'
const app = express()

const HOSTNAME = '127.0.0.1'
const PORT = 2222
app.use(express.json())
// prevent CORS error
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



console.log('checking connection with DB...')

mongodb.MongoClient.connect(DB_URI, (error, dbClient) => {
    if(error) {
        console.log('error connecting to database', error)
        return
    }

    console.log('successfully connected to database instance');
    const database = dbClient.db('todo-app');
    routes(app,database);
    app.listen(PORT, HOSTNAME, () => {
        console.log(`Server started at http://${HOSTNAME}:${PORT} ......`);
    })

})
