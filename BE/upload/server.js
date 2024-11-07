const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const imageRoutes = require('./routes/imageRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
connectDB();

// Sử dụng route API cho ảnh
app.use('/api/images', imageRoutes);

app.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
});
