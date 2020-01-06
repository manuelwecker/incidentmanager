import React from "react";
import styled from "@emotion/styled";
import { Enlarge } from "../../assets/Icons";

const ButtonSvgOnly = styled.button`
  width: 34px;
  height: 34px;
  background-color: ${props => props.theme.colors.secondary};
  margin: 0px;
  padding: 0px;
  border-radius: 4px;
  border: none;
`;

function ButtonEnlarge(props) {
  return (
    <>
      <ButtonSvgOnly {...props}>
        <Enlarge isClicked={props.isClicked} />
      </ButtonSvgOnly>
    </>
  );
}

export default ButtonEnlarge;
