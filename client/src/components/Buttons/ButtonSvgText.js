import React from "react";
import styled from "@emotion/styled";
import Button from "../Buttons/Button";
import { Fire, Accident } from "../../assets/Icons";

const ButtonSvgOnly = styled.button`
  width: 80px;
  height: 80px;
  margin: 4px;
  background-color: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  flex-direction: column;
  /* justify-content: center; */
  text-align: center;
  display: flex;
  /* align-content: space-between; */
`;

function ButtonSvgText({ svg, text, props }) {
  return (
    <ButtonSvgOnly {...props}>
      <Container>
        {svg}
        {text}
      </Container>
    </ButtonSvgOnly>
  );
}

export default ButtonSvgText;
