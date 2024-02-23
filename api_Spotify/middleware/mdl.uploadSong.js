const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let destinationPath;
        if (file.mimetype === "audio/mpeg") {
            destinationPath = "storage/fileSong/audios";
        } else {
            if (req.body.albumId) {
                destinationPath = "storage/fileSong/images/album";
            } else {
                destinationPath = "storage/fileSong/images";
            }
        }
        cb(null, destinationPath);
    },

    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage });

module.exports = upload;
