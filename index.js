const express = require('express')
const path = require('path')
const cors = require('cors')
//const math = require('mathjs')
//const { Recoverable } = require('repl')
const app1 = express()

app1.use(express.static(path.join(__dirname , '/aplicacion1')))
app1.use(cors())
app1.use(express.json())
app1.use(express.urlencoded({extended:true}))



app1.get('/revisasivivo',(req, res)=>{
    //console.log("hentai");
    res.statusCode = 200;
    res.send({"status":"estoy bien"})
    //res.sendFile(path.join(__dirname, 'html', 'index.html'))
})


app1.listen(3500 , function(){
    console.log('app is running in http://localhost:3500')
})




