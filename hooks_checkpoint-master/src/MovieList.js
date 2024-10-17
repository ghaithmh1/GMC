import React, { useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';

const MovieList = ({ filteredMovies, handleChecked, setMovies }) => {

    const deleteMovie = (key) => {
        console.log("the key to the movie:", key);
        let movie = filteredMovies.find(movie => movie.id === key);
        if (!movie) {
            alert('Movie not found');
        } else {
            let updatedMovies = filteredMovies.filter(movie => movie.id !== key);
            console.log("The list of the Movies before Delete:", filteredMovies);
            setMovies(updatedMovies);
            console.log("The list of the movies after delete:", filteredMovies);
        }
    };
    return (
        <div className="movieList">
            {filteredMovies.map((movie, index) => (
                <MovieCard key={index}
                    handleChecked={handleChecked}
                    movie={movie}
                    deleteMovie={deleteMovie} />
            ))}
        </div>
    );
};

export default MovieList;
