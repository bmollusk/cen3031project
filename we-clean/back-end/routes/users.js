const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update
router.put("/:id", async(req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        if(req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch(err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
            });
            return res.status(200).json("Account has been updated");
        } catch(err) {
            return res.status(500).json(err);
        }
        
    } else {
        return res.status(403).json("You can only update your own account");
    }
});

//delete
router.delete("/:id", async(req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        
        try {
            await User.findByIdAndDelete(req.params.id);
            return res.status(200).json("Account has been deleted");
        } catch(err) {
            return res.status(500).json(err);
        }
        
    } else {
        return res.status(403).json("You can only delete your own account");
    }
});

//get
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc;
        res.status(200).json(other);
    } catch(err) {
        res.status(500).json(err);
    }
});
//follow
router.put("/:id/follow", async (req, res) => {
    if(req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)) {
                await user.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {followings: req.params.id}});
                res.status(200).json("User has been followed");
            } else {
                res.status(403).json("You already follow this user");
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can't follow yourself!");
    }
});

//unfollow
router.put("/:id/unfollow", async (req, res) => {
    if(req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)) {
                await user.updateOne({$pull: {followers: req.body.userId}});
                await currentUser.updateOne({$pull: {followings: req.params.id}});
                res.status(200).json("You unfollowed this user");
            } else {
                res.status(403).json("You do not follow this user");
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can't follow yourself!");
    }
});

module.exports = router