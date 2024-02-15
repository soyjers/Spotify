const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // const pathStorage = `${__dirname}/../storage`
        cb(null, "../storage");
    },

    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({storage})

// const uploadMiddleware = multer({ storage })

// uploadMiddleware.single("myfile"), (req, res) => {
//     res.send({ message: "file created successfully"});
// }