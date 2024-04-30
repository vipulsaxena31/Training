const express =require('express');

const app = express()

const port = 3000

app.set ('view engine', 'ejs');

app.get('/',(req,res) => {
    const data ={
        title:'Dynamic example',
        message:'Rendering views with data'
    };

    res.render('index', {data});
});

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`)
})