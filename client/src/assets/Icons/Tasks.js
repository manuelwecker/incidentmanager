import React from "react";
import styled from "@emotion/styled";
import SVGIconSmall from "../SVGIconSmall";

const Path = styled.path`
  fill: ${props => props.theme.colors.corporatedesignsecondary};
`;

function Tasks(props) {
  return (
    <SVGIconSmall {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" />
      </svg>
    </SVGIconSmall>
  );
}

export default Tasks;