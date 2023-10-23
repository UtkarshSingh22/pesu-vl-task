const mongoose = require("mongoose");

const { Schema } = mongoose;

const peopleSchema = new Schema({
    male: {
        type: Number,
    },
    female: {
        type: Number,
    },
    girl: {
        type: Number,
    },
    boy: {
        type: Number,
    },
});

module.exports = mongoose.model("People", peopleSchema);
