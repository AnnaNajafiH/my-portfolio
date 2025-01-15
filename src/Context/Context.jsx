import { createContext, useReducer, useEffect } from 'react';

// Create the theme context
export const themeContext = createContext();


// Get the initial theme state from localStorage or fallback to default
const initialState = {
  darkMode: JSON.parse(localStorage.getItem('darkMode')) ?? true, // Default to true if not set
};

// Reducer function to handle actions
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

// Context Provider Component
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Update localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
  }, [state.darkMode]);
  
    return (
        <themeContext.Provider value={{state, dispatch}}>
            {children}
        </themeContext.Provider>
    )
}




// import {createContext, useReducer} from 'react';

// export const themeContext= createContext();

// const initialState = {darkMode: true};
// const themeReducer = (state, action) => {
//     switch(action.type){
//         case 'TOGGLE':
//             return {darkMode: !state.darkMode};
//         default:
//             return state;
//     }
// } 

// export const ThemeProvider = ({children}) => {
//     const [state, dispatch] = useReducer(themeReducer, initialState);
//     return (
//         <themeContext.Provider value={{state, dispatch}}>
//             {children}
//         </themeContext.Provider>
//     )
// }