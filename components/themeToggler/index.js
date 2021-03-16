import togglerStyles from "./index.module.scss";

import React, { useContext } from "react";
import { themeContext } from "../../pages/_app";

export default function ThemeToggler() {
  return (
    <>
      <label id="switch" className={togglerStyles["switch"]}>
        <input type="checkbox" id="slider" />
        <span
          className={[togglerStyles["slider"], togglerStyles["round"]].join(
            " "
          )}
        ></span>
      </label>
    </>
  );
}
