const express = require("express");
const router = express.Router();
const {
  postHobby,
  updateHobby,
  getHobbyInfo,
  deleteHobby,
} = require("../controllers/hobby.controller");
console.log("ttt");
router.post("/new-hobby", postHobby);
router.get("/hobbies", getHobbyInfo);
router.patch("/update-hobby/:id", updateHobby);
router.delete("/delete-hobby/:id", deleteHobby);
// upload images
const {
  uploadProfileImage,
  uploadAudioFile,
} = require("../middlewares/image.middleware");
const {
  postHobbyImage,
  postMultipleHobbyImages,
  getMultipleImages,
  postMultipleAudioFile,
  getAudioFile,
} = require("../controllers/hobby.controller");

// router.get('/media-pages', getMediaPage)
router.post(
  "/upload/hobby_image",
  uploadProfileImage.single("image"),
  postHobbyImage
);
router.post(
  "/upload/multiple_image",
  uploadProfileImage.array("images", 5),
  postMultipleHobbyImages
);
router.get("/multiple_image", getMultipleImages);

router.post(
  "/upload/audio",
  uploadAudioFile.single("audio"),
  postMultipleAudioFile
);
router.get("/audio", getAudioFile);
module.exports = router;
