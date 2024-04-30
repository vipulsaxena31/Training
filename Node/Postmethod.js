const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/get', (req, res) => {
    res.send("Hello, this is from GET method");
});

app.post('/post', (req, res) => {
    const { name, username, password } = req.body;
    res.json({ 
        name: name,
        username: username,
        password: password
    });
});

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
