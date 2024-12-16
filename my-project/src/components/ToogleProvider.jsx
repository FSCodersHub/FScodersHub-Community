import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

const useToggle = () => {
  return useContext(MyContext);
};


const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState('en'); 

  return (
    <MyContext.Provider value={{ toggle, setToggle }}>
      {children}
    </MyContext.Provider>
  );
};

export { ToggleProvider, useToggle };
