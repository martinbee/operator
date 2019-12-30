import React, { createContext, memo, useState } from 'react';

const initialState = {
  numberOfCalls: 1,
  message: '',
};

const CallDetailsContext = createContext(initialState);
const CallDetailsProvider = memo(({ children }) => {
  const [numberOfCalls, setNumberOfCalls] = useState(1);
  const [message, setMessage] = useState('');
  const context = {
    numberOfCalls,
    setNumberOfCalls,
    message,
    setMessage,
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
