import React, { useContext } from 'react';
import { CounterContext } from '../App';

const ResetBtn = () => {
  const counterCTX = useContext(CounterContext);
  const onClickResetHandler = () => {
    counterCTX.countDispatch({ type: 'reset' });
  };
  return <button onClick={onClickResetHandler}>Reset</button>;
};

export default ResetBtn;
