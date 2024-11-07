const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String,
    Phuongtien: String,
    Taixe: String,
    Diemxuatphat: String,
    Diemden: String,
    Tgiankhoihanh: Number,
    Tgianketthuc: Number,
    idxe: String
});

module.exports = mongoose.model('Image', imageSchema);
