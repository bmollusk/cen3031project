const router = require("express").Router();
const Event = require("../models/Event");
const User = require("../models/User");
//create
router.post("/", async (req, res) => {
    const newEvent = new Event(req.body);
    try {
        const savedEvent = await newEvent.save();
        res.status(200).json(savedEvent);
    } catch(err) {
        res.status(500).json(err);
    }
});
//update
router.put("/:id", async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if(event.userId === req.body.userId) {
            await event.updateOne({$set: req.body});
            res.status(200).json("The event has been updated!");
        } else {
            res.status(403).json("You cannot update a event that is not yours");
        }
    } catch(err) {
        res.status(500).json(err);
    }
    
});
//delete
router.delete("/:id", async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if(event.userId === req.body.userId) {
            await event.deleteOne();
            res.status(200).json("The event has been deleted!");
        } else {
            res.status(403).json("You cannot delete a event that is not yours");
        }
    } catch(err) {
        res.status(500).json(err);
    }
    
});

//sign up
router.put("/:id/signup", async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if(!event.signedUp.includes(req.body.userId)) { // sign up user
            await event.updateOne({$push: { signedUp: req.body.userId }}); 
            res.status(200).json("You signed up for this event!");
        } else { // take him off event list
            await event.updateOne({$pull: { signedUp: req.body.userId}});
            res.status(200).json("You have been taken off the event sign ups");
        }
    } catch(err) {
        res.status(500).json(err);
    }
    
});
//get event
router.get("/:id", async (req, res) => {
    try {
        const event = await event.findById(req.params.id);
        res.status(200).json(event);
    } catch(err) {
        res.status(500).json(err);
    }
    
});

module.exports = router;