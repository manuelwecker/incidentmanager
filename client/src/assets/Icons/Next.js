import React from "react";
import styled from "@emotion/styled";
import SVGIconSmall from "../SVGIconSmall";

const Path = styled.path`
  fill: ${props => props.theme.colors.corporateDesignSecondary};
`;

function Next() {
  return (
    <SVGIconSmall>
      <>
        <path fill="none" d="M0 0h24v24H0V0z" />
        <Path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
      </>
    </SVGIconSmall>
  );
}

export default Next;
