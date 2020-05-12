import express from 'express'
import renderer from './helpers/renderer'

const app = express()
const port = 3000 || process.env.PORT

app.use(express.static('public'))

app.get('*', function (req, res) {
  res.send(renderer(req))
})

app.listen(port, function () {
  console.log(`Server listening on port ${port}.`)
})
