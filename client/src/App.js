import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainScreen from './screens/MainScreen/MainScreen';
import ParallaxScreen from './components/ParallaxScreen';
function App() {


  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <ParallaxScreen />
      {/* <section className='section-style'><MainScreen /></section> */}

    </div>
  );
}

export default App;
