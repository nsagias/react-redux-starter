import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/index';
import { authenticationActions } from '../store/auth';

import classes from './Header.module.css';

const Header: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.authentication.isAuthenticated);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogoutButton = (event: any) => {
    // event.preventDefault();
    dispatch( authenticationActions.logout());
  };


  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={handleLogoutButton}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
