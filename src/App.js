import React from 'react';
import './styles/app.scss';
import Game from './components/Game';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Game />
    </div>
  );
}

export default App;
