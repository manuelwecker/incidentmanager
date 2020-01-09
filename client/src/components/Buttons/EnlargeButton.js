import React from "react";
import styled from "@emotion/styled";
import { Enlarge } from "../../assets/Icons";

const SvgButtonOnly = styled.button`
  width: 34px;
  height: 34px;
  background-color: ${props => props.theme.colors.secondary};
  margin: 0px;
  padding: 0px;
  border-radius: 4px;
  border: none;
`;

function EnlargeButton(props) {
  return (
    <>
      <SvgButtonOnly {...props}>
        <Enlarge isClicked={props.isClicked} />
      </SvgButtonOnly>
    </>
  );
}

export default EnlargeButton;
