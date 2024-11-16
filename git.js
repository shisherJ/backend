const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const cors = require("cors");

app.use(cors());
app.get("/",(req,res)=>{
    res.send('backend!!!!')
})

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})