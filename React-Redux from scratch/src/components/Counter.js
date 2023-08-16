import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux';

const Counter = () => {
  const mycounter  = useSelector((state)=>{
    return (state.counter);
  });

  const myshow = useSelector((state)=>{
    return (state.showCounter);
  });

  const dispatch =  useDispatch();

  const incrementhandler = ()=>{
    dispatch({type: 'increment'});
  }

  const decrementhandler  =()=>{
    dispatch({type: 'decrement'});
  }

  const increase = ()=>{
    dispatch({type: 'increase',val: 5});
  }

  const toggleCounterHandler = () => {
    if(myshow===true){
      dispatch({type: 'hide'});
    }
    if(myshow===false){
      dispatch({type: 'show'});
    }
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {myshow===true && <div className={classes.value}>{mycounter}</div> }
      <div>
        <button onClick={incrementhandler}>Incremnet</button>
        <button onClick={increase}>Increment by 5</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
