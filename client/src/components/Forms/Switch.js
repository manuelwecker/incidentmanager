import React from "react";
import styled from "@emotion/styled";

// https://upmostly.com/tutorials/build-a-react-switch-toggle-component

// .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
//   left: calc(100% - 2px);
//   transform: translateX(-100%);
// }

const Input = styled.input`
  width: 60px;
  height: 0;
  width: 0;
  visibility: hidden;
`;

const Label = styled.label`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
  height: 50px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  &:active {
    width: 60px;
  }
  transform: ${props =>
    props.handleToggle ? `translateX(-100%)` : `translateX(+100%)`};
`;

const Button = styled.button`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  transform: ${props =>
    props.handleToggle ? `translateX(-100%)` : `translateX(+100%)`};
`;

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <Input checked={isOn} onChange={handleToggle} type="checkbox" />
      <Label>
        <Button />
      </Label>
    </>
  );
};

export default Switch;
