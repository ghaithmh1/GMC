import React from 'react';
import MovieCard from './MovieCard';
import '../App.css';
import blueLogo from '../icons/checked-eye.png';
import grayLogo from '../icons/unchecked_eye.png';

const MovieList = ({ movies, handleChecked, seenCounter, unSeenCounter }) => {
    return (
        <div className="divMovieList">
            <div className="middleDiv">
                <output className='seenCounterOutput'>{seenCounter}</output>
                <img className='AppEyeIcon' src={blueLogo} alt=''></img>
                <output className='unSeenCounterOutput'>{unSeenCounter}</output>
                <img className='AppEyeIcon' src={grayLogo} alt=''></img>
            </div>
            <div className="movieList">
                {movies.map((movie, index) => (
                    <MovieCard key={index} handleChecked={handleChecked} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
