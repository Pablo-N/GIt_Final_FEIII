import { createContext, useReducer } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

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
