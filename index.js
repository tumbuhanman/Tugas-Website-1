const express = require('express')
var app = express()
var port = 3000

app.use(express.static('views'))
app.set('view engine', 'ejs')

const rootRoute = require('./route/rootRoute')
app.use(rootRoute)

app.listen(port,() => {
    console.log(`example app listening at http://localhost:${port}`)
    
})