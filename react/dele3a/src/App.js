import React, { useRef, useEffect } from 'react';
import BasicCard from './components/BasicCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import back from './watermelon.jpg';
import melon from './melon.png';
import Alert from 'react-bootstrap/Alert';
import Btn from './components/btn';
import Btn2 from './components/Btn2';
import Btn3 from './components/btn3';

function App() {
  const firstName = 'Foulen';
  const textStyle = { color: "red", fontFamily: "cursive", fontSize: 17 };
  const linkStyle = { fontFamily: "cursive", fontSize: 15 };
  const listStyle = { textAlign: "center", fontFamily: "fantasy", fontSize: 20 };
  const titleStyle = { fontFamily: "fantasy", fontSize: 20, fontStyle: "oblique" };
  const secondaryStyle = { width: '18rem' }; 
  
  // Create a render counter using useRef
  const renderCount = useRef(1);

  // Increment the render count on each render
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <>
      <div className="WaterMelonDiv" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '653px'
      }}>
        <div>
          <BasicCard
            linkStyle={linkStyle}
            titleStyle={titleStyle}
            textStyle={textStyle}
            listStyle={listStyle}
            secondarystyle={secondaryStyle}
          />
          <Alert className="Alert1" key='danger' variant='danger' style={{
            textAlign: "center",
            fontFamily: "fantasy",
            fontSize: 20
          }}>
            <Btn />
            <Btn2 />
            <Btn3 />
          </Alert>
          {/* Display the render count */}
          <h2>This component has rendered {renderCount.current} times</h2>
        </div>
        {firstName.length ? <img src={melon} style={{ width: 100, height: 100 }} alt="melon" /> : null}
      </div>
    </>
  );
}

export default App;
