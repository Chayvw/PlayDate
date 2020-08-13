const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayDateSchema = new Schema({
    name: { type: String, required: "Enter the name of the event" },
    date: { type: Date, required: "Enter date of " },
    location: { type: String, required: "Park location of your event" },
    description: { type: String, required: "Event description" }
    // modified : { type: Date, required : [true, "Date modified required"]}
});

const PlayDate = mongoose.model("PlayDate", PlayDateSchema);

module.exports = PlayDate;
