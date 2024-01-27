import React, { createContext, useContext, useState } from 'react';

export const BackgroundColorContext = createContext();

export const BackgroundColorContextProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('#E9E6E2');

  return (
    <BackgroundColorContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};
