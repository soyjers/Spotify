const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.mimetype == "audio/mpeg") {
            cb(null, "storage/fileSong/audios");
        } else {
            cb(null, "storage/fileSong/images");
        }
    },

    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({ storage })

module.exports = upload