import React, { useState } from 'react';

const Btn2 = () => {
    const [name, setName] = useState('Foulen');

    const handleClick = () => {
        setName(prevName => (prevName === 'Foulen' ? 'Ghaith' : 'Foulen'));
    };

    return (
        <div>
        
            <button onClick={handleClick}>Toggle Name</button>
            <p>{name.length ? `Hello ${name}` : 'Hello There!'}</p>
        </div>
    );
};

export default Btn2;
