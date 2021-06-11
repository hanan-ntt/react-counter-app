import React, { useContext } from 'react';
import { CounterContext } from '../App';

const IncreaseBtn = () => {
  const counterCTX = useContext(CounterContext);
  const onClickIncreaseHandler = () => {
    counterCTX.countDispatch({ type: 'increase' });
  };
  return <button onClick={onClickIncreaseHandler}>Increase by 1</button>;
};

export default IncreaseBtn;
