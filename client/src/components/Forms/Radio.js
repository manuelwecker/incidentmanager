import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const RadioInput = styled.input`
  visibility: hidden;
  width: 0px;
  height: 0px;
  &:checked + label {
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

export default function Radio({
  id,
  svg,
  text,
  isChecked,
  typeStored,
  ...other
}) {
  console.log("isChecked:", isChecked);
  // console.log("id:", id);
  // console.log("typeStored:", typeStored);

  if (id === typeStored) {
    isChecked = true;
  } else {
    isChecked = false;
  }
  let renderChecked = !isChecked ? "" : "checked";

  return (
    <>
      <RadioInput
        type="radio"
        id={id}
        {...other}
        defaultChecked={renderChecked}
      />
      <Label htmlFor={id}>
        {svg}
        <Span>{text}</Span>
      </Label>
    </>
  );
}

Radio.propTypes = {
  id: PropTypes.string,
  svg: PropTypes.object,
  text: PropTypes.string,
  isChecked: PropTypes.bool,
  typeStored: PropTypes.string
};
