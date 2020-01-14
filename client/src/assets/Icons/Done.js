import React from "react";
import styled from "@emotion/styled";
import SVGIconSmall from "../SVGIconSmall";

const Path = styled.path`
  fill: ${props => props.theme.colors.corporateDesignSecondary};
`;

function Done() {
  return (
    <SVGIconSmall>
      <>
        <path fill="none" d="M0 0h24v24H0V0z" />
        <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z" />
      </>
    </SVGIconSmall>
  );
}

export default Done;
