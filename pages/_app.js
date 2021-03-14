import { createContext } from "react";
import "../sass/app.scss";
// import { toggleDarkMode } from/ "../components/darkMode";

import { useState } from "react";

export const themeContext = createContext();

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState({
    beamOpacity: "0",
    beamAnimate: "",
  });

  const toggleDarkMode = (event) => {
    if (theme.beamOpacity === "0") {
      setTheme({ beamOpacity: "0.45", beamAnimate: "light-effect" });
      
    } else {
      setTheme({ beamOpacity: "0", beamAnimate: "" });

    }
  };

  return (
    <themeContext.Provider
      value={{ toggleDarkMode: toggleDarkMode, theme: theme }}
    >
      <Component {...pageProps} />
    </themeContext.Provider>
  );
}

export default MyApp;
