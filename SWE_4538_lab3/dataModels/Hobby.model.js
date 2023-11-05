const mongoose = require("mongoose");

const HobbySchema = new mongoose.Schema({
  hobbyName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  hobby_image: {
    type: String,
    default: "",
  },
  images: {
    type: [String],
    default: [],
  },
  audios: {
    type: [String],
    default: [],
  },
});

const Hobby = mongoose.model("Hobby", HobbySchema);
module.exports = Hobby;
