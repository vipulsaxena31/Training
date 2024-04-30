const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(cookieParser());

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    const username = req.session.username || 'Guest';
    res.send(`Hello, ${username}!`);
});

app.get('/set-session/:username', (req, res) => {
    req.session.username = req.params.username;
    res.send('Session data set!');
});

app.get('/clear-session', (req,res) => {
    req.session.destroy();
    res.send('Session data cleared')
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
