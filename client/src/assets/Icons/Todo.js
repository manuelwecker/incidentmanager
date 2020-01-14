import React from "react";
import styled from "@emotion/styled";
import SVGIconSmall from "../SVGIconSmall";

const Path = styled.path`
  fill: ${props => props.theme.colors.corporateDesignSecondary};
`;

function Todo() {
  return (
    <SVGIconSmall>
      <>
        <Path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </>
    </SVGIconSmall>
  );
}

export default Todo;
