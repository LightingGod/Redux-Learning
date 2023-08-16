import {createStore} from 'redux';

const ReducerFunction  = (state = {counter: 0,showCounter: true} ,action)=>{
  if(action.type==='increment'){
    return (
      {
        counter: state.counter+1,
        showCounter: true,
      }
    );
  }

  if(action.type==='increase'){
    return (
      {
        counter: state.counter+action.val,
        showCounter: true,
      }
    )
  }
  
  if(action.type==='decrement'){
    return (
      {
        counter: state.counter-1,
        showCounter: true,
      }
    );
  }

  if(action.type==='hide'){
    return ({
      counter: state.counter,
      showCounter: false
    })
  }

  if(action.type==='show'){
    return ({
      counter: state.counter,
      showCounter: true
    })
  }

  return state;
}

const store = createStore(ReducerFunction);

export default store;

