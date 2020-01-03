import React from "react";
import styled from "@emotion/styled";

const Headline = styled.h3`
  width: 100%;
  height: 30px;
  padding: 0px;
  margin: 0px;
  text-align: center;
`;

function Headline3(props) {
  return <Headline {...props}></Headline>;
}

export default Headline3;
