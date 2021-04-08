import React from 'react';
import './styles/app.scss';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
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
