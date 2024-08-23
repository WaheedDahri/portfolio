const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/upload', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const fileSchema = new mongoose.Schema({
  filename: String,
  filepath: String,
  filetype: String,
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const File = mongoose.model('File', fileSchema);

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
}).single('file');

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif|mp4/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images and Videos Only!');
  }
}

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/upload', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Error uploading file:', err);
      res.status(400).json({ error: err.message || 'Error uploading file' });
    } else {
      if (req.file === undefined) {
        res.status(400).json({ error: 'No file selected' });
      } else {
        const newFile = new File({
          filename: req.file.filename,
          filepath: `/uploads/${req.file.filename}`,
          filetype: req.file.mimetype,
        });

        try {
          const savedFile = await newFile.save();
          res.json({ filePath: savedFile.filepath });
        } catch (error) {
          console.error('Error saving file info to database:', error);
          res.status(500).json({ error: 'Error saving file info to database' });
        }
      }
    }
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
