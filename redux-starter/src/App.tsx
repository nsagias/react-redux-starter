import React from 'react';

import './App.css';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';

function App() {
  return (
    <div className="App">     
      <Header />
        <Auth /> 
      <Counter />
    </div>
  );
}

export default App;
