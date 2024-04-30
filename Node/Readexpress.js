const express = require('express')

const fs = require('fs')//predefined module

const app = express();

app.get('/readFile', (req,res) => {

    const filePath= "hello.txt"

    fs.readFile(filePath, 'utf8',(err,data) => {
        if (err){
            return res.status(500).send('Error reading file')
        }
        res.send(data)
    })
})

const port = 4000;

app.listen(port, () => {
    console.log(`Server Started ${port}`)
})