import React from "react";
import styled from "@emotion/styled";
import SVGIconSmall from "../SVGIconSmall";

const Path = styled.path`
  fill: ${props => props.theme.colors.corporateDesignSecondary};
`;

function Plus(props) {
  return (
    <SVGIconSmall {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" />
      <Path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z" />
    </SVGIconSmall>
  );
}

export default Plus;
