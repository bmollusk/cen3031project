const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            max: 500
        },
        date: {
            type: String,
            max: 10
        },
        location: {
            type: String,
            max: 50
        },
        img: {
            type: String
        },
        signedUp: {
            type: Array,
            default: []
        },
    },
{timestamps: true}
);

module.exports = mongoose.model("Event", EventSchema);