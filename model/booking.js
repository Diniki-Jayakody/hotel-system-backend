const mongoose = require('mongoose')


const bookingSchema = mongoose.Schema({
    room_no:{
        type : Number,
        required : true
    },
    customerId:{
        type:String,
        required : true
    },
    noOf_people:{
        type:Number,
        required : true
    },
    check_in_date:{
        type:String,
        required : true
    },
    check_out_date:{
        type:String,
        required : true
    }
   
})

const booking = module.exports = mongoose.model('booking',bookingSchema)