import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    const cardStyle = {
        width: '18rem',
        margin: '10px',
        textAlign: 'center',
    };

    return (
        <Card style={cardStyle}>
            <Card.Img variant="top" src={imageUrl} alt={`${name} image`} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Team: {team}</Card.Text>
                <Card.Text>Nationality: {nationality}</Card.Text>
                <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
                <Card.Text>Age: {age}</Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.propTypes = {
    name: PropTypes.string,
    team: PropTypes.string,
    nationality: PropTypes.string,
    jerseyNumber: PropTypes.number,
    age: PropTypes.number,
    imageUrl: PropTypes.string,
};

Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 0,
    imageUrl: "https://via.placeholder.com/150",
};

export default Player;
