import React, { useState } from 'react';
import './UpdatePlayer.css'

const UpdatePlayer = () => {
    const [player, setPlayer] = useState({ });

    const handleChange = (e) => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Create an updated player object, only including fields with values
        const updatedPlayer = {};
        Object.keys(player).forEach(key => {
            if (player[key]) {
                updatedPlayer[key] = player[key];
            }
        });

        try {
            const response = await fetch(`http://localhost:5000/players/${player.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPlayer),
            });

            if (!response.ok) {
                throw new Error('Failed to update player');
            }

            alert('Player updated successfully!');
            setPlayer({ id: '', name: '', team: '', nationality: '', jerseyNumber: '', age: '', imgUrl: '' });
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return (
        <div>
            <h2>Update a Player</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder="ID" value={player.id} onChange={handleChange} required />
                <input type="text" name="name" placeholder="Name" value={player.name} onChange={handleChange} />
                <input type="text" name="team" placeholder="Team" value={player.team} onChange={handleChange} />
                <input type="text" name="nationality" placeholder="Nationality" value={player.nationality} onChange={handleChange} />
                <input type="number" name="jerseyNumber" placeholder="Jersey Number" value={player.jerseyNumber} onChange={handleChange} />
                <input type="number" name="age" placeholder="Age" value={player.age} onChange={handleChange} />
                <input type="text" name="imgUrl" placeholder="Image URL" value={player.imgUrl} onChange={handleChange} />
                <button type="submit">Update Player</button>
            </form>
        </div>
    );
};

export default UpdatePlayer;
