import express from 'express'

const app = express()
const router = express.Router()
app.use(express.static('public'))

router.get("/", (req, res) => {
  res.sendFile('index.html', {root:'public'})
})

app.listen(5001, () => {
  console.log("Server is listening on port 5000");
});