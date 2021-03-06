import { createContext, useContext, useReducer } from 'react';



// context
export const context = createContext();

// context provider
export const Stateprovider = ({ reducer, initalState, children }) => (
    <context.Provider value={useReducer(reducer, initalState)}>
        {children}
    </context.Provider>
    );

//  export value in con
export const useStateValue = () => useContext(context)
