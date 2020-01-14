import React from "react";
import styled from "@emotion/styled";
import SVGSquareButton from "./SVGSquareButton";

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  min-width: 200px;
  width: 100%;
  background-color: ${props => props.theme.colors.corporateDesignSecondary};
  border: none;
  color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.company.borderRadius};
  font-size: 14px;
  font-weight: 400;
  margin: 0px;
  padding: 0 0 0 4px;
`;

const Span = styled.span`
  margin: 4px;
`;

function SvgTextFooterButton({ svg, text, ...other }) {
  return (
    <ButtonWrapper {...other}>
      <Span>{text}</Span>
      <SVGSquareButton>{svg}</SVGSquareButton>
    </ButtonWrapper>
  );
}

export default SvgTextFooterButton;
