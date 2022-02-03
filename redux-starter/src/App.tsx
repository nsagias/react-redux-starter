import React, { Fragment } from 'react';
import { forEachChild } from 'typescript';

import './App.css';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header />
        <Auth /> 
      <Counter />
    </Fragment>
  );
}

export default App;
