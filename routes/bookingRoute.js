const express = require('express')

const router = express.Router()

const booking = require('../model/booking')

router.post('/add' , (req,res,next)=>{
    let newBooking =  new booking({
        room_no:req.body.roomNo,
        customerId:req.body.customerId,
        noOf_people:req.body.noOf_people,
        check_in_date:req.body.check_in_date,
        check_out_date:req.body.check_out_date
    })

    newBooking.save((err,booking)=>{
        if(err){
            res.json({msg:"faled to add room"})
        }
        else{
            res.json({msg:"added"})
        }
    })
 })

 router.get('/getByRoomNo/:roomNo' , (req,res,next)=>{
        booking.find(function(err , booking){
            let newBooking = []
         for(let i=0; i<booking.length; i++){
            if(booking[i].room_no==req.params.roomNo){
                newBooking.push(booking[i])
                
            }
         }
    
         res.json(newBooking)
        })
     })

     module.exports = router