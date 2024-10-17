import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
//import * as yup from 'yup';

// Design Section
import 'bootstrap/dist/css/bootstrap.min.css';


//Import Components Section
import Movie from './components/Movie';
import MovieList from './components/MovieList';

import FormInput from './components/formInput';
import NavBar from './components/NavBar';
import MovieInformation from './components/MovieInformation';


function App() {
  const [movies, setMovies] = useState(Movie);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);
  const [movieNumber, setMovieNumber] = useState(movies.length);
  const [checked, setChecked] = useState();
  const [seenCounter, setSeenCounter] = useState(movies.filter((el) => el.checked).length);
  const [unSeenCounter, setUnSeenCounter] = useState(movies.filter((el) => !el.checked).length);
  const refTitle = useRef();
  const refDescription = useRef();
  const refPosterURL = useRef();
  const refTrailerURL = useRef();
  const refRating = useRef();

  console.log("Movie List :", movies);

  // const userSchema = yup.object().shape({

  //   refTitle: yup.string().required('Title is Missing'),
  //   refDescription: yup.string(),
  //   refPosterURL: yup.string(),
  //   refRating: yup.number()
  // })

  useEffect(() => {
    setMovieNumber(movies.length);
  }, [movies.length]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'title') {
      setFilterTitle(value);
    } else if (filterType === 'rating') {
      setFilterRating(value);
    }
  };

  const addMovie = async () => {
    let newMovie = {};
    console.log('Title : ', refTitle.current.value);
    console.log('Description : ', refDescription.current.value);
    console.log('posterURL : ', refPosterURL.current.value);
    console.log('Rating : ', refRating.current.value);

    newMovie.id = uuidv4();
    newMovie.title = refTitle.current.value;
    newMovie.description = refDescription.current.value;
    newMovie.posterURL = refPosterURL.current.value;
    newMovie.trailerURL = refTrailerURL.current.value;
    newMovie.rating = refRating.current.value;

    setMovies([...movies, newMovie]);
    refTitle.current.value = '';
    refDescription.current.value = '';
    refPosterURL.current.value = '';
    refTrailerURL.current.value = '';
    refRating.current.value = '';

  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= parseFloat(filterRating)
  );

  const handleChecked = (id, value) => {
    const index = filteredMovies.findIndex(obj => {
      return obj.id === id;
    });
    filteredMovies[index].checked = value;
    setSeenCounter(filteredMovies.filter((el) => el.checked).length);
    setUnSeenCounter(filteredMovies.filter((el) => !el.checked).length);
  };

  return (
    <div className="App">
      <NavBar movieNumber={movieNumber} filterTitle={filterTitle} filterRating={filterRating} onFilterChange={handleFilterChange} />
      <FormInput refTitle={refTitle} refDescription={refDescription} refPosterURL={refPosterURL} refTrailerURL={refTrailerURL} refRating={refRating} addMovie={addMovie} />
      <Routes>
        <Route path="/" element={<MovieList seenCounter={seenCounter} unSeenCounter={unSeenCounter} setChecked={setChecked} handleChecked={handleChecked} movies={filteredMovies} />} />
        <Route path="/MovieInformation/:id" element={<MovieInformation movies={filteredMovies} />} />
      </Routes>
    </div>
  );
}
export default App;
