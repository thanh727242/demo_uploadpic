import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ImageGallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        const response = await axios.get('http://localhost:5000/api/images');
        setImages(response.data);
    };

    const deleteImage = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/images/${id}`);
            alert('Image deleted successfully');
            fetchImages(); // Tải lại danh sách ảnh sau khi xóa
        } catch (error) {
            alert('Error deleting image');
        }
    };

    return (
        <div>
            <h2>Image Gallery</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {images.map((image) => (
                    <div key={image._id} style={{ margin: '10px' }}>
                        <img
                            src={`http://localhost:5000/api/images/${image._id}`}
                            alt="Uploaded"
                            style={{ width: '200px', height: '200px' }}
                        />
                        <button onClick={() => deleteImage(image._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;
