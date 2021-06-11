import React, { useContext } from 'react';
import CounterContext from '../store/count-context';

const ResetBtn = () => {
  const { ctxDispatch } = useContext(CounterContext);
  const onClickResetHandler = () => {
    ctxDispatch({ type: 'reset' });
  };
  return <button onClick={onClickResetHandler}>Reset</button>;
};

export default ResetBtn;
