import React, { useState, useRef, useEffect, useContext } from 'react';
//import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import MovieList from './MovieList';
import Filter from './Filter';
import FormInput from './FormInput';
import blueLogo from './icons/checked-eye.png';
import grayLogo from './icons/unchecked_eye.png';
import MyContext from './MyContext';
import CategoryMessages from './CategoryMessages';


function App() {

  const { value, setValue } = useContext(MyContext);

  const [movies, setMovies] = useState(Movie);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);
  const [movieNumber, setMovieNumber] = useState(movies.length);
  const [checked, setChecked] = useState();
  const [seenCounter, setSeenCounter] = useState(movies.filter((el) => el.checked).length);
  const [unSeenCounter, setUnSeenCounter] = useState(movies.filter((el) => !el.checked).length);

  useEffect(() => {
    setMovieNumber(movies.length);
    setTimeout(() => {
      setValue(CategoryMessages);
    }, 0);
  }, [movies.length,
    setValue
  ]);


  const handleFilterChange = (filterType, value) => {
    if (filterType === 'title') {
      setFilterTitle(value);
    } else if (filterType === 'rating') {
      setFilterRating(value);
    }
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
    console.log("The filtred array for seen:",
      filteredMovies
    );
    console.log("The filtred array for unseen:",
      filteredMovies);

    setSeenCounter(filteredMovies.filter((el) => el.checked).length);
    setUnSeenCounter(filteredMovies.filter((el) => !el.checked).length);
  };

  return (


    <div className="App">
      <h1 style={{ textAlign: 'center', fontFamily: "fantasy", fontSize: 100, fontStyle: "oblique" }}>Movies{movieNumber}</h1>

      <section className='firstSection'>
        <div className="divFilter">
          <Filter
            filterTitle={filterTitle}
            filterRating={filterRating}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="divInputForm">
          <FormInput
            movies={movies}
            setMovies={setMovies}
          />
        </div>
      </section>
      <div className="middleDiv">
        <output className='seenCounterOutput'>{seenCounter}</output>
        <img className='AppEyeIcon' src={blueLogo} alt=''></img>
        <output className='unSeenCounterOutput'>{unSeenCounter}</output>
        <img className='AppEyeIcon' src={grayLogo} alt=''></img>
      </div>
      <div className="divMovieList">
        <MovieList setChecked={setChecked} handleChecked={handleChecked} filteredMovies={filteredMovies} setMovies={setMovies} />
      </div>
    </div >


  );
}
export default App;
