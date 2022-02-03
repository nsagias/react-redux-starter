import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';

import './App.css';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
  const isAuth = useSelector((state: RootState) => state.authentication.isAuthenticated);

  return (
    <Fragment>
      <Header />
       {!isAuth && <Auth /> }
       {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
