const express = require('express')
const path = require('path')
const port = 3000

const app = express()
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {
    req: req,
    title: "aidxnCC",
    description: "aidxnCC",
    tags: [ "example", "test" ]
  })
})

app.listen(port, () => {
  console.log('Listening on port: ' + port)
})