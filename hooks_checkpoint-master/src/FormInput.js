import './App.css';
import { useState } from 'react';


const FormInput = ({ movies, setMovies }) => {
    const [movie, setMovie] = useState({
        title: "",
        description: "",
        posterURL: "",
        rating: ""
    })

    const getInputs = (e) => {
        const { name, value } = e.target;

        setMovie((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <div className='inputForm'>
            <div className="input-wrapper">
                <label className='inputLabel'>Title</label>
                <input name="title" value={movie.title} onChange={getInputs} className='inputField' id="titleId" placeholder=''></input>
            </div>
            <div className="input-wrapper">
                <label className='inputLabel'>Description</label>
                <input name="description" value={movie.description} onChange={getInputs} className='inputField' id="descriptionId" placeholder=''></input>
            </div>
            <div className="input-wrapper">
                <label className='inputLabel'>PosterURL</label>
                <input name="posterURL" value={movie.posterURL} onChange={getInputs} className='inputField' id="posterURLId" placeholder=''></input>
            </div>
            <div className="input-wrapper">
                <label className='inputLabel'>Rating</label>
                <input name="rating" value={movie.rating} onChange={getInputs} className='inputField' id="ratingId" placeholder=''></input>
            </div>
            <button className='addButton' onClick={() => {
                setMovies([...movies, movie]);
                setMovie({
                    title: "",
                    description: "",
                    posterURL: "",
                    rating: ""
                });
            }}> ADD </button>
        </div >);
}


export default FormInput;