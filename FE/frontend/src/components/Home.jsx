import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/images/home');
                setVehicles(response.data);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
            }
        };
        fetchVehicles();
    }, []);

    return (
        <div>
            <h2>Vehicle Information</h2>
            {vehicles.map((vehicle) => (
                <div key={vehicle._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                    <img
                        src={`http://localhost:5000/api/images/${vehicle._id}`}
                        alt={vehicle.Phuongtien}
                        style={{ width: '100px', height: '100px', marginRight: '10px' }}
                    />
                    <h3>{vehicle.Phuongtien}</h3>
                    <p><strong>Driver:</strong> {vehicle.Taixe}</p>
                    <p><strong>Start:</strong> {vehicle.Diemxuatphat}</p>
                    <p><strong>Destination:</strong> {vehicle.Diemden}</p>
                    <p><strong>Start Time:</strong> {new Date(vehicle.Tgiankhoihanh * 1000).toLocaleString()}</p>
                    <p><strong>End Time:</strong> {new Date(vehicle.Tgianketthuc * 1000).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
