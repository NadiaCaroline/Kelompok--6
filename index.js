//  import expressnya
const express = require("express")

// import cors
const cors = require("cors")
const routes = require("./routes")
const app = express()
// port => backed bakal running
const port = 8000

// buat handle cors
app.use(cors())
// buat handle input dari klien berupa json
app.use(express.json())
// urlencoded = data
app.use(express.urlencoded({ extended: true }))
// Welcome API => buat ngetes ketika deploy di server berhasil atau tidak
app.get('/', async (req, res) => {
  res.status(200).send({
    status: true,
    data: "Welcome to API Todo List and Express"
  })
})

// Routes API
routes(app)

// buat berjalannya
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
