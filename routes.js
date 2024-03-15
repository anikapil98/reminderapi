const express = require('express');
const router = express.Router();
const Reminder = require('./model');


router.post('/reminders',async(req,res) => {
    try{
     const { date, time,message,method} = req.body;
     
     const newReminder = new Reminder({
        date,
        time,
        message,
        method
        
     })

     await newReminder.save();
     res.status(201).json(newReminder);
    }
    catch(err)
    {
        console.err(err);
        res.status(500).json({error:'an error occured'})
    }
});

module.exports = router;