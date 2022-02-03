import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';

import './App.css';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useSelector((state: RootState) => state.)

  return (
    <Fragment>
      <Header />
        <Auth /> 
      <Counter />
    </Fragment>
  );
}

export default App;
