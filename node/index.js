const express = require('express');
const app = express();
const note = require('./service/note');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Credentials", "*");
    res.header("Access-Control-Max-Age", "*");
    next()
});

app.use('/note', note);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running @ ${PORT}`);
});