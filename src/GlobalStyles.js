import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        body {
          font-size: 16px;
          margin: 0;
          background: ${theme.colors.background};
          font-family: "Frutiger Neue", Arial, sans-serif;
        }
      `}
    />
  );
}

export default GlobalStyles;
