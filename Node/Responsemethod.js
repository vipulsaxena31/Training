const express = require('express')

const app = express();

app.use((req, res, next) => {
    console.log(`Request received ${req.method} ${req.url}`)
    next();
})

app.get('/hello', (req, res) => {
    res.send('Hello, Express')
});

app.get('/json', (req, res) => {
    const data = {message: 'Hello, JSON'}
    res.json(data)
})

app.get('/redirect', (req, res) => {
    res.redirect('/hello')
})
const port = 4000

app.listen(port, () => {
    console.log(`Server Started at port ${port}`)
})