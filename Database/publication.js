const mongoose = require("mongoose");

// Creating author Schema
const PublicationSchema = mongoose.Schema({
    id: Number,
    name: String,
    books: [String]
});

// Creating Book Model
const PublicationModel = mongoose.model("publication", PublicationSchema);

module.exports = PublicationModel;