const express = require('express')

const router = express.Router()

const room = require('../model/room')

const booking = require('../model/booking')


router.get('/getAll' , (req,res,next)=>{
   room.find(function(err , room){
    res.json(room)
   })
})

router.post('/add' , (req,res,next)=>{
    let newRoom =  new room({
        room_no:req.body.roomNo,
        room_type:req.body.roomType,
        sleeps:req.body.sleeps,
        current_price:req.body.price,
        facilities:req.body.facilities,
        description:req.body.description,
        image_url:req.body.image_url
    })

    newRoom.save((err,room)=>{
        if(err){
            res.json({msg:"faled to add room",err:err})
        }
        else{
            res.json({msg:"added"})
        }
    })
 })

 router.delete('/delete/:roomNo' , (req,res,next)=>{
    room.remove({room_no:req.params.roomNo} , function(err , result){
        if(err){
            res.json(err)
        }
        else{
            res.json({msg:"deleted"})
        }
    })
 })

module.exports = router