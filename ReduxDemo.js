const redux = require('redux');

const DataReducer = (state = {counter: 0 },action)=>{     //Reducer Function used to do changes in the central data.It also get executed at first to inialtilize the central data thus at that time no state exist thus pass default.
  if(action.type=='increment'){
    return {
      counter: state.counter+1,
    }  
  }
  return state;
}

const store = redux.createStore(DataReducer);   //Central Data through redux.createStore()

// Now make the subscription that will attach the central data and components.
const counterSubscriber = ()=>{
  const lateststate = store.getState();               //Give me latest state snapshot and get triggered whenever we have change in central data.
  console.log(lateststate); 
}

store.subscribe(counterSubscriber);             //It is the method which track changes in central data and when there is change it call the function iside it. 
store.dispatch({type: 'increment'});            //Used to dispatch the changes in the reducer function.

// Reducer function here is similar to usereducer.