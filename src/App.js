import React, { useState } from 'react';
// import './App.css';

const App = () => {

  const [tempVal, setTempVal] = useState(10);
  const [tempColor, setTempColor] = useState('cold'); 

  const increaseTemperature = () => {
    if (tempVal === 30) return


    const newTemperature = tempVal + 1

    if (newTemperature >=  15){
      setTempColor('hot')
    }
    setTempVal(newTemperature);

  };


  const decreaseTemperature = () => {
    if (tempVal === 0) return
    
    const newTemperature = tempVal - 1

    if (newTemperature >  15){
      setTempColor('cold')
    }

    setTempVal(newTemperature);

  };
  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${tempColor}`}> {tempVal} &deg;C</div>
      </div>
      <div className='button-container'>
        <button onClick={() => increaseTemperature() }>+</button>
        <button onClick={() => decreaseTemperature() }>-</button>
      </div>
    </div>
  );
};

export default App;
