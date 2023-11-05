const Hobby = require("../dataModels/Hobby.model");
const User = require("../dataModels/User.model");
const path = require("path");

const postHobby = async (req, res) => {
  const { hobbyName, description } = req.body;
  const userId = req.user.id;
  const hobby = new Hobby({
    hobbyName,
    description,
    userId,
  });
  try {
    await hobby.save();
    res.send(hobby);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getHobbyInfo = async (req, res) => {
  try {
    const userId = req.user.id;
    const hobbies = await Hobby.find({ userId: userId });
    res.json(hobbies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateHobby = async (req, res) => {
  try {
    const { hobbyName, description } = req.body;
    const userId = req.params.id;
    const hobby = await Hobby.findById(userId);
    console.log(userId);
    hobby.hobbyName = hobbyName;
    hobby.description = description;
    await hobby.save();
    res.send(hobby);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteHobby = async (req, res) => {
  try {
    const userId = req.params.id;
    const hobby = await Hobby.findById(userId);
    await hobby.deleteOne({ userId: userId });
    res.json({ message: "Hobby deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const postHobbyImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Please upload a file" });
    }
    const photo = req.file.filename;
    const userId = req.user.id;
    const hobby = await Hobby.findOne({ userId: userId });
    if (photo) {
      hobby.hobby_image = photo;
    }
    await hobby.save();
    res.json({ message: "Hobby image uploaded successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const postMultipleHobbyImages = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ message: "Please upload a file" });
    }
    const photos = req.files.map((file) => file.filename);
    const userId = req.user.id;
    const hobby = await Hobby.findOne({ userId: userId });
    hobby.images = [...hobby.images, ...photos];
    await hobby.save();
    res.json({ message: "Multiple images uploaded successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getMultipleImages = async (req, res) => {
  try {
    const userId = req.user.id;
    const hobby = await Hobby.findOne({ userId: userId });
    const images = hobby.images;
    res.json({ images });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const postMultipleAudioFile = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ message: "Please upload a file" });
    }
    const audios = req.files.map((file) => file.filename);
    const userId = req.user.id;
    const hobby = await Hobby.findOne({ userId: userId });
    hobby.audios = [...hobby.audios, ...audios];
    await hobby.save();
    res.json({ message: "Multiple audios uploaded successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getAudioFile = async (req, res) => {
  try {
    const userId = req.user.id;
    const hobby = await Hobby.findOne({ userId: userId });
    const audios = hobby.audios;
    res.json({ audios });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  postHobby,
  getHobbyInfo,
  updateHobby,
  deleteHobby,
  postHobbyImage,
  postMultipleHobbyImages,
  getMultipleImages,
  postMultipleAudioFile,
  getAudioFile,
};
