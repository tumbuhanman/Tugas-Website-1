var express =require('express')
var app = express()
var port = 4000

app.get('/'),(req,res) => {
    res.send('test')

}

app.listen(port,() => {
    console.log('example app listening at http://localhost:${port}')
    
})
