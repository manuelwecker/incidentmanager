import React from "react";
import styled from "@emotion/styled";

const ButtonBasic = styled.button`
  width: 34px;
  height: 34px;
  margin: 0px;
  padding: 4px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  border: none;
`;

function Button() {
  return <ButtonBasic></ButtonBasic>;
}

export default Button;
