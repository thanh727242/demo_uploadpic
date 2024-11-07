import React, { useState } from 'react';
import axios from 'axios';

function AddVehicle() {
    const [formData, setFormData] = useState({
        Phuongtien: '',
        Taixe: '',
        Diemxuatphat: '',
        Diemden: '',
        Tgiankhoihanh: '',
        Tgianketthuc: '',
        idxe: ''
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('image', file);
        data.append('Phuongtien', formData.Phuongtien);
        data.append('Taixe', formData.Taixe);
        data.append('Diemxuatphat', formData.Diemxuatphat);
        data.append('Diemden', formData.Diemden);
        data.append('Tgiankhoihanh', formData.Tgiankhoihanh);
        data.append('Tgianketthuc', formData.Tgianketthuc);
        data.append('idxe', formData.idxe);

        try {
            await axios.post('http://localhost:5000/api/images/add', data);
            alert('Vehicle added successfully');
            setFormData({
                Phuongtien: '',
                Taixe: '',
                Diemxuatphat: '',
                Diemden: '',
                Tgiankhoihanh: '',
                Tgianketthuc: '',
                idxe: ''
            });
            setFile(null);
        } catch (error) {
            console.error('Error adding vehicle:', error);
        }
    };

    return (
        <div>
            <h2>Add New Vehicle</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Phuongtien" placeholder="Phuong tien" value={formData.Phuongtien} onChange={handleChange} required />
                <input type="text" name="Taixe" placeholder="Tai xe" value={formData.Taixe} onChange={handleChange} required />
                <input type="text" name="Diemxuatphat" placeholder="Diem xuat phat" value={formData.Diemxuatphat} onChange={handleChange} required />
                <input type="text" name="Diemden" placeholder="Diem den" value={formData.Diemden} onChange={handleChange} required />
                <input type="number" name="Tgiankhoihanh" placeholder="Thoi gian khoi hanh (timestamp)" value={formData.Tgiankhoihanh} onChange={handleChange} required />
                <input type="number" name="Tgianketthuc" placeholder="Thoi gian ket thuc (timestamp)" value={formData.Tgianketthuc} onChange={handleChange} required />
                <input type="text" name="idxe" placeholder="ID xe" value={formData.idxe} onChange={handleChange} required />
                <input type="file" onChange={handleFileChange} required />
                <button type="submit">Add Vehicle</button>
            </form>
        </div>
    );
}

export default AddVehicle;
