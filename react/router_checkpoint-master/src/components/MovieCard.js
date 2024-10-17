import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import blueLogo from '../icons/checked-eye.png';
import grayLogo from '../icons/unchecked_eye.png';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

const MovieCard = ({ movie, handleChecked }) => {
    const [getChecked, setGetChecked] = useState(movie.checked);
    handleChecked(movie.id, getChecked);

    return (
        <Card border="secondary" style={{ width: '18rem', margin: '10px' }} >
            <Card.Img className='EyeIcon' variant="top" onClick={() => setGetChecked(movie.checked = !movie.checked)} src={movie.checked ? blueLogo : grayLogo} />
            <Link to={`/MovieInformation/${movie.id}`}><Card.Img variant="top" src={movie.posterURL} onClick={() => setGetChecked(movie.checked = !movie.checked)} /></Link>
            <Card.Body>
                <Card.Title style={{ fontFamily: "fantasy", fontSize: 20, fontStyle: "oblique" }}>{movie.title}</Card.Title>
                <Card.Text style={{ fontFamily: "cursive", fontSize: 17 }}>{movie.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={{ textAlign: "center", fontFamily: "fantasy", fontSize: 20 }}>{movie.rating}</ListGroup.Item>
            </ListGroup>
        </Card >

    );
};

MovieCard.defaultProps = {
    posterURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923',
    title: "Xxxxxxxxx",
    description: "Xxxxxxxxxxxxx",
    rating: 0.0

}

MovieCard.propTypes = {
    posterURL: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number
};

export default MovieCard;