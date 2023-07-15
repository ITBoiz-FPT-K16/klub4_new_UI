
const fs = require('fs');
const imageUpload = async (req, res, next) => {
    try {
        if (!req.files || Object.values(req.files).flat() === 0) {
          return res.status(400).json({ message: "Uploading images failed" });
        }
        let files = Object.values(req.files).flat();
        files.forEach((file) => {
          if (
            file.mimetype !== "image/jpeg" &&
            file.mimetype !== "image/png" &&
            file.mimetype !== "image/gif" &&
            file.mimetype !== "image/webp"
          ) {
            removeTmp(file.tempFilePath);
            return res.status(400).json({ message:'unsupported format' });
          }
          if(file.size > 1024 * 1024 * 5) {
            removeTmp(file.tempFilePath);
            return res.status(400).json({ message:'File size is too large' });
          }
        });
        next()
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

const removeTmp = (path) => {
    fs.unlink(path,(err)=>{
        if(err) return res.status(404).send(err);
    })
}
module.exports = imageUpload