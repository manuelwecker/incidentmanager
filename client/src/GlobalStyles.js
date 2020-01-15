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
        input[type="text"] {
          all: unset;
          padding: 0 0 0 4px;
        }
        a {
          text-decoration: none;
          color: ${theme.colors.font};
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
