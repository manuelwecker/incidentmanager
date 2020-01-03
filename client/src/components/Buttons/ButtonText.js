import React from "react";
import styled from "@emotion/styled";
import Button from "../Buttons/Button";

// const ButtonTextOnly = styled(Button)`
const ButtonTextOnly = styled.button`
  min-width: 100%;
  min-height: 28px;
  background-color: ${props => props.theme.colors.corporatedesignsecondary};
  color: ${props => props.theme.colors.background};
  font-weight: 400;
  border: none;
`;

function ButtonText({ text }) {
  return <ButtonTextOnly>{text}</ButtonTextOnly>;
}

export default ButtonText;
