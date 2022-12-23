const express = require('express');
const app = express();
const port = 3000
const axios=require("axios");




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todos', (req, res) => {
   axios.get("https://jsonplaceholder.typicode.com/todos")
   .then(response => {
    console.log(reponse.data);
}) 
.catch(err => {
    console.error(err);

});

res.send("1234");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
