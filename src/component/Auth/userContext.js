import React from 'react';

const userContext = React.createContext({});
export const UserContextProvider=userContext.Provider;
export const UserContextConsumer=userContext.Consumer;
export { userContext };
