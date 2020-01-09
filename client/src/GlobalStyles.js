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
        *:a {
          text-decoration: none;
        }

        body {
          font-size: 16px;
          margin: 0;
          background: ${theme.colors.background};
          font-family: "Istok Web", "Frutiger", "Arial", sans-serif;
        }
      `}
    />
  );
}

export default GlobalStyles;
