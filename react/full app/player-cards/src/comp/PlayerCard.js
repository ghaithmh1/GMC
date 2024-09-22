import React from 'react';

const PlayerCard = ({ player }) => {
    const { name, team, nationality, jerseyNumber, age, _id, imgUrl } = player;
    const defaultImage = 'path/to/placeholder/image.png'; // Update with your actual placeholder image path

    return (
        <div className="card" style={{ width: '18rem', margin: '1rem' }}>
            <img 
                src={imgUrl || defaultImage} 
                className="card-img-top"
                alt={name || 'Player Image'}
                style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Team: {team}</h6>
                <p className="card-text">Nationality: {nationality}</p>
                <p className="card-text">Jersey Number: {jerseyNumber}</p>
                <p className="card-text">Age: {age}</p>
                <p className="card-text">ID: {_id}</p>
            </div>
        </div>
    );
};

export default PlayerCard;
