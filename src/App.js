import React, { useContext } from 'react';
import './App.css';
import DecreaseBtn from './components/DecreaseBtn';
import IncreaseBtn from './components/IncreaseBtn';
import ResetBtn from './components/ResetBtn';
import CounterContext from './store/count-context';

function App() {
  const { ctxCounter } = useContext(CounterContext);
  const { startingCount: count } = ctxCounter;
  return (
    <div className='App'>
      <div>Current Count {count}</div>
      <IncreaseBtn />
      <DecreaseBtn />
      <ResetBtn />
    </div>
  );
}

export default App;
