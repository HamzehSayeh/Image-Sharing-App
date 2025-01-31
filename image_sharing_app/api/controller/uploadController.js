const uplaodService = require("../service/uplaodService");

const uploadPhoto = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).send({ error: "no photo provided" });
    }

    const photo = await uplaodService.savePhoto(req.file);
    
    res.status(201).send({
      message: "File uploaded",
      photo: {
        name: req.file.originalname,
        url: `/images/${req.file.filename}`,
      },
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { uploadPhoto };
