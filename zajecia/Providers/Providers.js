import LangContextProvider from "./LangProvider";
import ThemeContextProvider from "./ThemeProvider";

const Providers = ({ children }) => {
  return (
    <LangContextProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </LangContextProvider>
  );
};

export default Providers;
