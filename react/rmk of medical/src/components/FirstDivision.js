import React from 'react';
import './App.css';

import FirstSection from './FirstSection'; // Import your section components
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';


const FirstDivision = () => {
    return (
        <div className="first_division">
            
            <FirstSection />

            
            <SecondSection />

            
            <ThirdSection />

          
            <FourthSection />
        </div>
    );
}

export default FirstDivision;
