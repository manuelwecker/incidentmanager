import React from "react";
import styled from "@emotion/styled";

// Thx to https://upmostly.com/tutorials/build-a-react-switch-toggle-component

const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + label button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

const Label = styled.label`
  content: "";
  top: 2px;
  left: 2px;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  transition: 0.2s;
  background: ${props => props.theme.colors.secondary};
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s;
`;

const Button = styled.button`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.2s;
  background: ${props => props.theme.colors.primary};
  box-shadow: none;
`;

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <Input
        checked={isOn}
        onChange={handleToggle}
        type="checkbox"
        classname="test"
        id="test"
      />
      <Label htmlFor="test" style={{ background: isOn && onColor }}>
        <Button id="test" />
      </Label>
    </>
  );
};

export default Switch;
