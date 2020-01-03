import React from "react";
import styled from "@emotion/styled";
import SVGIcon from "./SVGIcon";

const Path = styled.path`
  fill: red;
`;

function IconTypeAccident2(props) {
  return (
    <SVGIcon {...props}>
      <Path
        d="M32.07,25.22c3.78,0,6.86-3.08,6.86-6.86c0-3.78-3.08-6.86-6.86-6.86c-3.78,0-6.86,3.08-6.86,6.86
			C25.21,22.14,28.29,25.22,32.07,25.22z M32.07,13.59c2.63,0,4.77,2.14,4.77,4.77c0,2.63-2.14,4.77-4.77,4.77
			c-2.63,0-4.77-2.14-4.77-4.77C27.31,15.73,29.45,13.59,32.07,13.59z"
      />
    </SVGIcon>
  );
}

export default IconTypeAccident2;
