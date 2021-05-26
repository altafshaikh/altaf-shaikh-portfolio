import { createContext } from "react";
import "../sass/app.scss";
import "../fontawesome/fontawesome";

// import { toggleDarkMode } from/ "../components/darkMode";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/global";
import { lightTheme, darkTheme } from "../components/theme";

export const themeContext = createContext();

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState({
    beamOpacity: "0",
    beamAnimate: "",
    mode: "dark",
  });

  const toggleDarkMode = (event) => {
    if (theme.mode === "light") {
      setTheme({
        beamOpacity: "0.45",
        beamAnimate: "light-effect",
        mode: "dark",
      });
    } else {
      setTheme({ beamOpacity: "0", beamAnimate: "", mode: "light" });
    }
  };

  return (
    <themeContext.Provider
      value={{ toggleDarkMode: toggleDarkMode, theme: theme }}
    >
      <ThemeProvider theme={theme.mode === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </themeContext.Provider>
  );
}

export default MyApp;
