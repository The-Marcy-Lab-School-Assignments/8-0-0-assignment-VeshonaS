const express = require('express');
const app = express();

app.get('/api', (req, res, next) =>{
   const {name, favAnimal} = req.query 
  res.send(`hi ${name} you lke fluffy ${favAnimal}`)
})
/** FEEDBACK: Does this data show? If I were to go to the /api endpoint will I ever be able to see what my favorite color is?
 * How can I change the endpoint so that the favorite color shows up?
 */
app.get('/api',(req, res, next) => {
  const {favColor} = req.query  
  res.send(`your favorite color is ${favColor}`)
})

app.get('/', (req, res, next) => {
  res.send('<h1>Hello World</h1>')
})
/** FEEDBACK: When I hit this endpoint in the browser, what happens? What HTML text shows up? 
 * What can we change about this endpoint to have it show Goodbye World?
 */
app.get('/', (req, res, next) => {
  res.send('<h1>Goodbye World</h1>')
})

 const PORT = 8080; 
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
});