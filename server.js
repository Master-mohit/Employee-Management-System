const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('Welcome to the EMS server!');
})


app.listen(3000, () => {
    console.log('EMS server is running on port 3000');
})