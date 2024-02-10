import { createContext } from "react";

export const LangContext = createContext();

const LangContextProvider = ({ children }) => {
  return <LangContext.Provider value="pl">{children}</LangContext.Provider>;
};

export default LangContextProvider;
