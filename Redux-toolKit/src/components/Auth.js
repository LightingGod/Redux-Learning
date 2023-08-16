import classes from './Auth.module.css';
import { AuthAction } from '../Store/Slices/Auth';
import { useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch =  useDispatch();
  
  const formsubmithandler = (event)=>{
    event.preventDefault();
    dispatch(AuthAction.verify());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formsubmithandler}>
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
