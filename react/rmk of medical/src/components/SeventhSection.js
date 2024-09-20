import React from 'react';
import './App.css';

const locations = [
    { city: 'Warsaw', imgSrc: './icons/warsaw.png' },
    { city: 'Barcelona', imgSrc: './icons/barcelona.png' },
    { city: 'Munich', imgSrc: './icons/munich.png' },
    { city: 'Istanbul', imgSrc: './icons/istanbul.png' },
    { city: 'Rome', imgSrc: './icons/rome.png' },
    { city: 'Bologna', imgSrc: './icons/bologna.png' },
    { city: 'Curitiba', imgSrc: './icons/curitiba.png' },
    { city: 'Rio De Janeiro', imgSrc: './icons/rio-janeiro.png' },
    { city: 'Mexico City', imgSrc: './icons/mexico-city.png' },
];

const SeventhSection = () => {
    return (
        <section className="seventh_section">
            {locations.map((location, index) => (
                <div className="division1_seventh_section" key={index}>
                    <div className="sub1_seventh_section">
                        <img className="imgsub1_seventh_section" src={location.imgSrc} alt={location.city} />
                        <div className="div1sub1_seventh_section">
                            <h3 className="h3sub1_seventh_section">{location.city}</h3>
                            <button className="btnsub1_seventh_section">SEE OPENINGS</button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default SeventhSection;
