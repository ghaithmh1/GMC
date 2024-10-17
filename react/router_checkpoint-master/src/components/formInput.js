import '../App.css';
//import PropTypes from 'prop-types';

function formInput(props) {
    return (
        <div className="hamburger-container">
            <input className="checkbox" type="checkbox" id="hamburger-toggle" aria-label="Toggle Navigation" />
            <label className="hamburger" htmlFor="hamburger-toggle">
                <span className="slice"></span>
                <span className="slice"></span>
                <span className="slice"></span>
            </label>

            <div className="drawer">
                <div className="divInputForm">
                    <div className='inputForm'>
                        <div className="input-wrapper">
                            <label className='inputLabel'>Title</label>
                            <input ref={props.refTitle} className='inputField' id="titleId" placeholder=''></input>
                        </div>
                        <div className="input-wrapper">
                            <label className='inputLabel'>Description</label>
                            <input ref={props.refDescription} className='inputField' id="descriptionId" placeholder=''></input>
                        </div>
                        <div className="input-wrapper">
                            <label className='inputLabel'>PosterURL</label>
                            <input ref={props.refPosterURL} className='inputField' id="posterURLId" placeholder=''></input>
                        </div>
                        <div className="input-wrapper">
                            <label className='inputLabel'>TrailerURL</label>
                            <input ref={props.refTrailerURL} className='inputField' id="trailerURLId" placeholder=''></input>
                        </div>
                        <div className="input-wrapper">
                            <label className='inputLabel'>Rating</label>
                            <input ref={props.refRating} className='inputField' id="ratingId" placeholder=''></input>
                        </div>
                        <button className='addButton' onClick={() => props.addMovie()}> ADD </button>
                    </div>
                </div>
            </div>
        </div>
    );

}
formInput.defaultProps = {
    refTitle: 'Xxxxxxxxx',
    refDescription: 'Xxxxxxxxxxxxx',
    refRating: 0.0,
    refPosterURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923'
}

export default formInput;