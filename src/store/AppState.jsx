import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  console.log("state provider", mode);
  const value = { mode, toggleMode, setMode };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
