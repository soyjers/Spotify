const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let Path;
        if (file.mimetype === "audio/mpeg") {
            Path = "storage/fileSong/audios";
        } else if (req.body.albumId) {
            Path = "storage/fileSong/images/album";
        } else if (req.body.artistId) {
            Path = "storage/fileSong/images/artist";
        } else {
            Path = "storage/fileSong/images";
        }
        cb(null, Path);
    },

    filename: function (req, file, cb) {
        cb(null, `${Date.now()}`);
    }
});

const upload = multer({ storage });

module.exports = upload;