const express = require("express")
const app = express()

app.get("/saludo",(req,res) =>{
  res.status(200).send("Hola me llamo saba y quiero ser programador")
})

app.listen(3000, () => console.log("proyecto arrancado por el puert 3000"))
