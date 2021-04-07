import React from 'react';
import './styles/app.scss';
import Game from './components/Game';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Game />
      <div className="bg-image-red">
        <div className="bg-image-blue">
          <div className="bg-image-green" />
        </div>
      </div>
    </div>
  );
}

export default App;
