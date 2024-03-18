const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3030
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.json({response: 'home page'})
})
app.use('/auth', require('./Routes/Auth'))









app.listen(port,()=>{
    console.log(`app is listening on port ${port} ...`)
})