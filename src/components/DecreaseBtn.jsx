import React, { useContext } from 'react';
import { CounterContext } from '../App';

const DecreaseBtn = () => {
  const counterCTX = useContext(CounterContext);
  const onClickDecreaseHandler = () => {
    counterCTX.countDispatch({ type: 'decrease' });
  };
  return <button onClick={onClickDecreaseHandler}>Decrease by 1</button>;
};

export default DecreaseBtn;
