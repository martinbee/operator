import React, { createContext, memo, useState, useCallback } from 'react';

const initialState = {
  numberOfCalls: 1,
  message: '',
};

const CallDetailsContext = createContext(initialState);
const CallDetailsProvider = memo(({ children }) => {
  const [numberOfCalls, setNumberOfCalls] = useState(initialState.numberOfCalls);
  const [message, setMessage] = useState(initialState.message);

  const resetContext = useCallback(() => {
    setNumberOfCalls(initialState.numberOfCalls);
    setMessage(initialState.message);
  }, [setNumberOfCalls, setMessage, initialState]);

  const context = {
    numberOfCalls,
    setNumberOfCalls,
    message,
    setMessage,
    resetContext,
  };

  return (
    <CallDetailsContext.Provider value={context}>
      {children}
    </CallDetailsContext.Provider>
  );
});

export {
  CallDetailsContext,
  CallDetailsProvider,
};
