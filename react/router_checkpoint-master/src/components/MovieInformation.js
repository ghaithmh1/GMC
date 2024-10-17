import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieInformation.css';


const MovieInformation = ({ movies }) => {
    const { id } = useParams();
    const movieObject = movies.find((el) => el.id === id);
    console.log("MovieObject", movieObject);
    return (
        <div className="movieInfoDiv">
            <section className="movieInfo_SectionOne">
                <iframe width="100%" height="300px"
                    src={`${movieObject.trailerURL}I?&autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </section>
            <section className="movieInfo_SectionTwo">
                <div className='shaperDiv'></div>
                <div className='firstUnder'>
                    <img className="imgPoster" src={movieObject.posterURL}></img>
                </div>
                <div className='secondUnder'>
                    <h1>{movieObject.title}</h1>
                    <p>{movieObject.description}</p>
                    <label>{movieObject.rating}</label>
                </div>

            </section>
        </div >

    );
}
export default MovieInformation;


