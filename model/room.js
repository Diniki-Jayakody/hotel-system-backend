const mongoose = require('mongoose')


const roomShema = mongoose.Schema({
    room_no:{
        type : Number,
        required : true
    },
    room_type:{
        type:String,
        required : true
    },
    sleeps:{
        type:String,
        required : true
    },
    current_price:{
        type:Number,
        required : true
    },
    facilities:{
        type:String,
        required : true
    },
    description:{
        type:String,
        required : true
    },
    image_url:{
        type:String,
        required : true
    },
})

const room = module.exports = mongoose.model('room',roomShema,"room")