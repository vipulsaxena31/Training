const express = require('express')

const fs = require('fs')//predefined module

const app = express();

app.get('/writeFile', (req,res) => {

    const filePath= "newfile.txt"
    const content= 'Hello, content  of new file'

    fs.writeFile(filePath, content, 'utf8',(err,data) => {
        if (err){
            return res.status(500).send('Error reading file')
        }
        res.send('File has been  written')
    });
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server Started ${port}`)
})