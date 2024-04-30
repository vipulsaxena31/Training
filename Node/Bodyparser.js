const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, this is a GET request');
});

app.post('/', (req, res) => {
    const dataFromClient = req.body;
    res.json({ message: 'Received POST request', data: dataFromClient });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
