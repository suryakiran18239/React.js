import React, { createContext } from "react";
import MainComponent from './MainComponent'


 export const LoginContext = createContext();

 const CreateContext_provider = () => {
  return (
    <LoginContext.Provider value={true}>
      <div>
        <MainComponent />
      </div>
    </LoginContext.Provider>
  );

}

export default CreateContext_provider

/* 
    useContext Hook is used to manage global data in react applications 
    like Global state, Themes, Services, User settings.
    
    How to create Context?
    1. Creating the context.
    2. Providing the context.
    3. Consuming the context.


*/
