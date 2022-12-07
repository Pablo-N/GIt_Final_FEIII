import { createContext, useMemo, useReducer,useEffect } from "react";

export const initialTheme = { theme: "theme--light", data: [] };
export const ThemeContext = createContext(initialTheme);

export const GlobalContext = (props) => {
  const initialTheme = { theme: "theme--light", data: [] };

  const actions = {
    THEME__LIGHT: "theme--light",
    THEME__DARK: "theme--dark",
    DATA: "data",
  };

  const themeReducer = (state, action) => {
    switch (action.type) {
      case actions.THEME__LIGHT:
        return { ...state, theme: "theme--light" };
      case actions.THEME__DARK:
        return { ...state, theme: "theme--dark" };
      case actions.DATA:
        return { ...state, data: action.payload };
      default: {
        return state;
      }
    }
  };

  const [themeState, themeDispacher] = useReducer(themeReducer, initialTheme);

  const providerState = useMemo(
    () => ({
      data: themeState.data,
      theme: themeState.theme,

      setLightTheme: () => {
        themeDispacher({ type: actions.THEME__LIGHT });
      },

      setDarkTheme: () => {
        themeDispacher({ type: actions.THEME__DARK });
      },  

      setData: (array) => {
        themeDispacher({ type: actions.DATA, payload: array });
      },
    }),
    [themeState, themeDispacher]
  );


  const handleFetchRequest = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonResponse = await response.json();
    providerState.setData(jsonResponse);
  };

  useEffect(() => {
    handleFetchRequest();
  }, [providerState]);



  return (
    <ThemeContext.Provider value={providerState}>
      <div className={themeState.theme}>{props.children}</div>
    </ThemeContext.Provider>
  );
};
