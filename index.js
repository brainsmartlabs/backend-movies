const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const moviesRouter = require('./routes/movies.js');

app.use(moviesRouter);


app.all('*', (req, res) => {
    res.send('page Not found');
});

app.listen(5000, () => {
    console.log("Backend Server Started at Port No: 5000");
});