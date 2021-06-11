import React, { createContext, useReducer } from 'react';

const CounterContext = createContext({
  ctxCounter: 0,
  ctxDispatch: { type: 'reset' },
});

const initialCount = {
  startingCount: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, startingCount: state.startingCount + 1 };
    case 'decrease':
      return { ...state, startingCount: state.startingCount - 1 };
    case 'reset':
      return initialCount;
    default:
      return state.startingCount;
  }
};

export const CounterProvider = (props) => {
  const [counter, dispatch] = useReducer(countReducer, initialCount);
  return (
    <CounterContext.Provider
      value={{ ctxCounter: counter, ctxDispatch: dispatch }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
