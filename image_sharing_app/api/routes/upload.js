const express = require("express");
const { uploadPhoto } = require("../controller/uploadController");
const upload = multer({ dest: "./public/images/" });

const router = express.Router();

router.post("/", upload.single("photo"), uploadPhoto);