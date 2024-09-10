const express = require('express');
const app = express();

app.get('/', (req, res,next) =>{
   const {name, favAnimal} = req.query 
  res.send(`hi ${name} you lke fluffy ${favAnimal}`)
})

 const PORT = 8080; 
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
});