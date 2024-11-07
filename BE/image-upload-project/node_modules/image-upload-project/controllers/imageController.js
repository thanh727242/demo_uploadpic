const Image = require('../models/imageModel');

// Hàm thêm phương tiện mới
exports.uploadVehicle = async (req, res) => {
    try {
        const newVehicle = new Image({
            data: req.file.buffer,
            contentType: req.file.mimetype,
            Phuongtien: req.body.Phuongtien,
            Taixe: req.body.Taixe,
            Diemxuatphat: req.body.Diemxuatphat,
            Diemden: req.body.Diemden,
            Tgiankhoihanh: req.body.Tgiankhoihanh,
            Tgianketthuc: req.body.Tgianketthuc,
            idxe: req.body.idxe
        });
        await newVehicle.save();
        res.status(201).send('Vehicle added successfully');
    } catch (error) {
        res.status(500).send('Error adding vehicle');
    }
};

// Hàm lấy danh sách phương tiện
exports.getVehicles = async (req, res) => {
    try {
        const vehicles = await Image.find({});
        res.json(vehicles);
    } catch (error) {
        res.status(500).send('Error fetching vehicles');
    }
};

// Hàm lấy ảnh theo ID
exports.getImageById = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        res.contentType(image.contentType);
        res.send(image.data);
    } catch (error) {
        res.status(404).send('Image not found');
    }
};
