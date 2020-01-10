import React from "react";
import styled from "@emotion/styled";
import SVGSquareButton from "./SVGSquareButton";

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  width: 100%;
  background-color: ${props => props.theme.colors.corporateDesignSecondary};
  border: none;
  color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.company.borderRadius};
  font-size: 14px;
  font-weight: 400;
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
