import React from "react";
import styled from "@emotion/styled";
import Button from "../Buttons/Button";
// import { Fire, Accident } from "../../assets/Icons";

const ButtonSvgOnly = styled(Button)``;

function ButtonSvg({ svg }) {
  return <ButtonSvgOnly>{svg}</ButtonSvgOnly>;
}

export default ButtonSvg;
