import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/index';  
import { authenticationActions } from '../store/auth';
import { IAuthFormSubmit } from '../authentication.model';

import classes from './Auth.module.css';
import React from 'react';

const Auth: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleLoginSubmit: IAuthFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch( authenticationActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLoginSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
