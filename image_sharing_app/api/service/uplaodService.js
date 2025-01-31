const photo = require("../models/Photo");

const savePhoto = async (file) => {
  const photo = new photo({
    name: file.originlname,
    photo: file.path,
    contentType: file.mimetype,
  });
  return await photo.save();
};
module.exports = { savePhoto };