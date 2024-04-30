// // const express = require('express');

// // const port = 4000

// // const app = express();

// // // routingnode 
 
// // app.get('/', (req, res) => {

// //     res.send("Hello world, This is the express")
// // })

// // app.get('/data', (req, res) => {
// //     res.send({id: 1, name: 'vipul'})
// // })

// // app.listen(port, () => {
// //     console.log(`Server is staring on port ${port}`)
// // })






// const express = require("express");
// const ejs = require("ejs");

// const app = express();
// const port = 3000;

// app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");

// app.get("/", (Req, res) => {
//   res.render('layout', { pageTitle: "Home page" , message:"this is a body"});
// });

// app.listen(port, () => {
//   console.log(`Server is running at port ${port}`);
// });

const express = require('express');
const app = express();
 
// Set EJS as the view engine
app.set('view engine', 'ejs');
 
// Define a route that renders a view and passes data to it
app.get('/example', (req, res) => {
  // Sample data
  const data = {
    pageTitle: 'Express.js Example',
    message: 'Hello, this is an example of passing data to views!',
    items: ['Item 1', 'Item 2', 'Item 3']
  };
 
  // Render the 'example.ejs' view and pass data to it
  res.render('example', data);
});
 
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});