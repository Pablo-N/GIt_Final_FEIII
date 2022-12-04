import { createContext, useReducer, useState } from "react";

export const initialTheme = "theme--light";
export const ThemeContext = createContext(initialTheme);

export const GlobalContext = (props) => {
  const [themeState, setThemeState] = useState("theme--light");

  const switchTheme = () => {
    if (themeState === "theme--light") {
      const newThemeState = "theme--dark";
      setThemeState(newThemeState);
    }
    if (themeState === "theme--dark") {
      const newThemeState = "theme--light";
      setThemeState(newThemeState);
    }
  };

  return (
    <ThemeContext.Provider
      className={themeState}
      value={{ switchTheme, themeState }}
    >
      <div className={themeState}>{props.children}</div>
    </ThemeContext.Provider>
  );
};

/*
export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useReducer(togglerReducer, {type:"light", payload:"dark"})
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

const action= {type:theme, payload:"dark"}


  const togglerReducer (theme, action){

    switch(action.type){
      case action.type==="dark":
        action.type= "light";
        break;
      case action.type=== "light":
        action.type= "dark"
      break;
    }
  }

  

  return (
    <ContextGlobal.Provider value={{togglerReducer, theme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
*/

/*

  const [currentTheme, setCurrentTheme] = React.useState(
    localStorage.getItem('theme') || 'dark'
  )

  const toggleTheme = () => {
    if (currentTheme === 'light') {
      setCurrentTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setCurrentTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className={currentTheme}>
      <h1>Local Storage</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <TheBag />
    </div>
  )

*/

/*
export const TheBag = () => {
  const [value, setValue] = React.useState('')
  const [bag, dispatchBag] = React.useReducer(
    bagReducer, //funcion que se ejecuta cuando se hace un dispatch, retorna el nuevo estado
    [{ id: 100, value: 'manzana' }], //valor inicial
    init //funcion que calcula el valor inicial
  )
*/

/* 
NOT WORKING
  // const initialReducerValue = {
  //   isDark: false,
  //   theme: "theme--light",
  // };

  // const reducerTheme = (state = initialReducerValue, action) => {
  //   console.log("ValorEntrada: " + state);
  //   if (action.type === "theme") {
  //     const newState = {
  //       isDark: state.isDark,
  //       theme: state.isDark ? "theme--dark" : "theme--light",
  //     };
  //     console.log("ValorSalida: " + newState);
  //     return newState;
  //   }
  // };

  // const [themeState, themeDispatcher] = useReducer(
  //   reducerTheme,
  //   initialReducerValue
  // );

  // const switchTheme = () => {
  //   return themeDispatcher({ type: "theme" });
  // };

  // const changeTrue = "HI AND WORK";
*/
