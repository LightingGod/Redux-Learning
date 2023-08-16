import classes from './Header.module.css';
import { useSelector,useDispatch} from 'react-redux';
import { AuthAction } from '../Store/Slices/Auth';

const Header = () => {
  
  const isAuthenticated = useSelector((state)=>{
    return state.auth.isAuth
  });

  const dispatch = useDispatch();

  const buttonClickhandler = ()=>{
    dispatch(AuthAction.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>

      {isAuthenticated===true && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={buttonClickhandler}>Logout</button>
          </li>
        </ul>
      </nav>}

    </header>
  );
};

export default Header;
