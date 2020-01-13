import React from "react";
import styled from "@emotion/styled";

const RadioInput = styled.input`
  visibility: hidden;
  width: 0px;
  height: 0px;
  &:checked {
    border: 3px solid ${props => props.theme.colors.corporateDesignSecondary};
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Label = styled.label`
  width: 88px;
  height: 88px;
  margin: 0px;
  padding: 0px;
  font-size: 12px;

  background-color: ${props => props.theme.colors.background};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;

  &:hover {
    border: 3px solid ${props => props.theme.colors.corporateDesignSecondary};
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Span = styled.span`
  text-align: center;
`;

function Radio({ id, svg, text, isChecked, typeStored, ...other }) {
  if (id === typeStored) {
    isChecked = false;
  } else {
    isChecked = true;
  }
  let renderChecked = !isChecked ? "" : "checked";

  return (
    <>
      <RadioInput type="radio" id={id} {...other} checked={renderChecked} />
      <Label htmlFor={id}>
        {svg}
        <Span>{text}</Span>
      </Label>
    </>
  );
}

export default Radio;
