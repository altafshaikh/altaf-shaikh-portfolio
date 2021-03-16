import togglerStyles from "./index.module.scss";

import React, { useContext } from "react";
import { themeContext } from "../../pages/_app";

export default function ThemeToggler() {
  const { toggleDarkMode, theme } = useContext(themeContext);

  const check = theme.mode === "light" ? false : true;

  return (
    <>
      <label
        id="switch"
        className={togglerStyles["switch"]}
        onChange={toggleDarkMode}
      >
        <input type="checkbox" id="slider" checked={check} />
        <span
          className={[togglerStyles["slider"], togglerStyles["round"]].join(
            " "
          )}
        ></span>
      </label>
    </>
  );
}
