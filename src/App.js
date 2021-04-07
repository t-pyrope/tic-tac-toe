import React from 'react';
import './styles/app.scss';
import Game from './components/Game';
import Nav from './components/Nav';
import Controls from './components/Controls';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="App">
      <Nav />
      <Game />
      <Controls />
      <Statistics />
    </div>
  );
}

export default App;
