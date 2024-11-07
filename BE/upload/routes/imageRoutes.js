const express = require('express');
const multer = require('multer');
const { uploadVehicle, getVehicles, getImageById } = require('../controllers/imageController');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Định nghĩa các route
router.post('/add', upload.single('image'), uploadVehicle); // Đảm bảo uploadVehicle không undefined
router.get('/home', getVehicles); // Đảm bảo getVehicles không undefined
router.get('/:id', getImageById); // Đảm bảo getImageById không undefined

module.exports = router;
