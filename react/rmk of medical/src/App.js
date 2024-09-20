import React from 'react';
import FirstDivision from './components/FirstDivision';
import SecondDivision from './components/SecondDivision';
import ThirdDivision from './components/ThirdDivision';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstDivision />
      <SecondDivision />
      <ThirdDivision />
    </div>
  );
}

export default App;
