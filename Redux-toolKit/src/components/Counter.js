import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux';
import { CounterActions } from '../Store/Slices/counter';

const Counter = () => {
  const mycounter  = useSelector((state)=>{
    return (state.counter.counter);
  });

  const myshow = useSelector((state)=>{
    return (state.counter.showCounter);
  });

  const dispatch =  useDispatch();

  const incrementhandler = ()=>{
    dispatch(CounterActions.increment());
  }

  const decrementhandler  =()=>{
    dispatch(CounterActions.decrement());
  }

  const increase = ()=>{
    dispatch(CounterActions.increase(5));
  }

  const toggleCounterHandler = () => {
    if(myshow===true){
      dispatch(CounterActions.hide());
    }
    if(myshow===false){
      dispatch(CounterActions.show());
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
