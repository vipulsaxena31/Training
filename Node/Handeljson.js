//making  server
const express = require('express')

const app = express();
const port = 4000

//handlung JSON

app.get('/json', (req,res) => {
    const jsonData = {message: 'This is the JSON response', name:'Vipul', age: 30}

    res.header('content-Type', 'application/json')

    res.send(jsonData)
})

//handel HTML

app.get('/html', (req,res) => {
    const htmlContent = 
    `<!DOCTYPE html>
    <html>
        <head>
            <tittle>HTML RESPONSE</tittle>
        </head>
        <body>
            <h1>THIS  IS  BODY</h1>
        </body>
    </html>`

    res.header('Content-Type', 'text/plain');

    res.send(htmlContent)
})

//server starting
app.listen(port, () => {
    console.log(`server started ${port}`)
})