import React, { useState } from 'react';
import axios from 'axios';
import './AddPlayer.css'
const AddPlayer = () => {
    const [player, setPlayer] = useState({
        name: '',
        team: '',
        nationality: '',
        jerseyNumber: '',
        age: '',
        imgUrl: ''
    });
    const [notification, setNotification] = useState('');

    const handleChange = (e) => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(player).some(value => !value)) {
            setNotification('All fields are required');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/players', player);
            console.log("Player added:", response.data);
            setNotification('Player added successfully!');
            setPlayer({ name: '', team: '', nationality: '', jerseyNumber: '', age: '', imgUrl: '' });
        } catch (error) {
            setNotification('Error adding player');
        }
    };

    return (
        <div>
            <h2>Add a Player</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={player.name} onChange={handleChange} required />
                <input type="text" name="team" placeholder="Team" value={player.team} onChange={handleChange} required />
                <input type="text" name="nationality" placeholder="Nationality" value={player.nationality} onChange={handleChange} required />
                <input type="number" name="jerseyNumber" placeholder="Jersey Number" value={player.jerseyNumber} onChange={handleChange} required />
                <input type="number" name="age" placeholder="Age" value={player.age} onChange={handleChange} required />
                <input type="text" name="imgUrl" placeholder="Image URL" value={player.imgUrl} onChange={handleChange} required />
                <button type="submit">Add Player</button>
            </form>
            {notification && <p>{notification}</p>}
        </div>
    );
};

export default AddPlayer;
