import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/players');
                setPlayers(response.data);
            } catch (err) {
                setError('Error fetching players');
            } finally {
                setLoading(false);
            }
        };
        fetchPlayers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container">
            <div className="row">
                {players.map((player) => (
                    <div className="col-md-4" key={player._id}>
                        <PlayerCard player={player} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerList;
