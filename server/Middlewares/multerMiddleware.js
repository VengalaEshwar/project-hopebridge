const multer = require('multer');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save files
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    req.body.imagePath = `uploads/${uniqueName}`; // Add the file path to req.body
    cb(null, uniqueName);
  },
});

// Configure multer for single-file uploads
const upload = multer({ storage });

const uploadIfExist = (req, res, next) => {
  const isMultipart = req.headers['content-type']?.includes('multipart/form-data');
  if (isMultipart) {
    upload.single('image')(req, res, (err) => {
      if (err) {
        // Handle Multer errors
        console.log("error in uploading the image")
        return res.json({ success: false, message: 'File upload error', error: err.message });
      }
      next(); // Proceed if the file was handled
    });
  } else {
    // Parse non-file fields
    upload.none()(req, res, (err) => {
      if (err) {
        console.log("error in uploading the image")
        return res.json({ success: false, message: 'Form data parsing error', error: err.message });
      }
      next(); // Proceed if no file and no error
    });
  }
};

module.exports = uploadIfExist;
