import React, { useState } from 'react';
import './DeletePlayer.css';

const DeletePlayer = () => {
    const [id, setId] = useState('');

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/players/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to delete player');
            }

            console.log("Player deleted with ID:", id);
            alert(`Player with ID ${id} deleted successfully!`); // Success alert
            // Reset ID field after deletion
            setId('');
        } catch (error) {
            console.error("Error:", error.message);
            alert(`Error: ${error.message}`); // Error alert
        }
    };

    return (
        <div className="add-player-container">
            <h2>Delete a Player</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID:</label>
                    <input type="text" name="id" value={id} onChange={handleChange} required />
                </div>
                <button type="submit">Delete Player</button>
            </form>
        </div>
    );
};

export default DeletePlayer;
