var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var cors = require('cors')
var path = require('path')

var app = express();

const roomRoute = require('./routes/roomRoute')

const bookingRoute = require('./routes/bookingRoute')

// const roomScema = {
//     roomNo : Number,
//     roomType: String
// }

// const room2 = mongoose.model(
//     "room",
//     roomScema,
//     "room"

// )

mongoose.connect('mongodb+srv://hotelUser:root@cluster0.t7jvtja.mongodb.net/?retryWrites=true&w=majority')

//mongoose.connect('mongodb://localhost:27017/sliit01')

mongoose.connection.on("connected",()=>{
    console.log('connected to the database')
})

mongoose.connection.on("error",(err)=>{
    if(err){
        console.log('connection error : ',err)
    }
})

const port = 3000

app.use(cors())

app.use(bodyparser.json())

app.use(express.static(path.join(__dirname,'public')))

app.use('/api/room',roomRoute)

app.use('/api/booking',bookingRoute)

app.get('/',(req,res)=>{
    res.send('footer')
})

// room2.find(function(err , room){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(room)
//     }
//    })

app.listen(port,()=>{
    console.log('server started in port : ',port)
})