import React, { useContext } from 'react';
import CounterContext from '../store/count-context';

const DecreaseBtn = () => {
  const { ctxDispatch } = useContext(CounterContext);
  const onClickDecreaseHandler = () => {
    ctxDispatch({ type: 'decrease' });
  };
  return <button onClick={onClickDecreaseHandler}>Decrease by 1</button>;
};

export default DecreaseBtn;
