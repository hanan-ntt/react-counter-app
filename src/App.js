import React, { useReducer, createContext } from 'react';
import './App.css';
import DecreaseBtn from './components/DecreaseBtn';
import IncreaseBtn from './components/IncreaseBtn';
import ResetBtn from './components/ResetBtn';

const initialState = {
  startingState: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, startingState: state.startingState + 1 };
    case 'decrease':
      return { ...state, startingState: state.startingState - 1 };
    case 'reset':
      return initialState;
    default:
      return state.startingState;
  }
};
export const CounterContext = createContext();

function App() {
  const [counter, dispatch] = useReducer(counterReducer, initialState);
  return (
    <CounterContext.Provider
      value={{ countState: counter, countDispatch: dispatch }}
    >
      <div className='App'>
        <div>Current Count {counter.startingState}</div>
        <IncreaseBtn />
        <DecreaseBtn />
        <ResetBtn />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
