import React from "react";
import styled from "@emotion/styled";
import SVGIconSmall from "../SVGIconSmall";

const Path = styled.path`
  fill: ${props => props.theme.colors.corporatedesignsecondary};
`;

function Enlarge(props) {
  return (
    <SVGIconSmall {...props}>
      {props.isClicked ? (
        <>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" />
        </>
      ) : (
        <>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z" />
        </>
      )}
    </SVGIconSmall>
  );
}

export default Enlarge;
