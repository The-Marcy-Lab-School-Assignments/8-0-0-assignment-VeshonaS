const express = require('express');
const app = express();

app.get('/api', (req, res, next) =>{
   const {name, favAnimal} = req.query 
  res.send(`hi ${name} you lke fluffy ${favAnimal}`)
})

app.get('/api',(req, res, next) => {
  const {favColor} = req.query  
  res.send(`your favorite color is ${favColor}`)
})

app.get('/greetings', (req, res, next) => {
  res.send('<h1>Hello World</h1>')
})
app.get('/farewell', (req, res, next) => {
  res.send('<h1>Goodbye World</h1>')
})

 const PORT = 8080; 
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
});