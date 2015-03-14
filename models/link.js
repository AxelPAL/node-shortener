var mongoose = require("mongoose");

var LinkSchema = new mongoose.Schema({
    shortLink: {
        type: String,
        index: true
    },
    fullLink: {
        type: String,
        index: true
    },
    visits: {
        type: Number,
        index: true
    }
});

module.exports = mongoose.model('Link', LinkSchema);