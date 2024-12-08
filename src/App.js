import React from 'react';
import Button from './Button';
import './App.css';
import BackgroundImage from './food.jpg';

function App(){
  return(
    <div style={{ backgroundColor: 'lightgrey', minHeight: '100vh', padding: '20px'}}>

    <h1>Welcome to the Recipe Nutrition Calculator</h1>
    <img src={BackgroundImage} alt="Background" className="background-image" />
    <Button />
    </div>
  );
};
export default App;