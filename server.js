// Dependencies

const express = require('express');
const router = require('./route');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoute = require('./route/api');
const htmlRoute= require('./route/html');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//use apiRoutes
app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});