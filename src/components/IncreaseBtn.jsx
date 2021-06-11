import React, { useContext } from 'react';
import CounterContext from '../store/count-context';

const IncreaseBtn = () => {
  const { ctxDispatch } = useContext(CounterContext);
  const onClickIncreaseHandler = () => {
    ctxDispatch({ type: 'increase' });
  };
  return <button onClick={onClickIncreaseHandler}>Increase by 1</button>;
};

export default IncreaseBtn;
