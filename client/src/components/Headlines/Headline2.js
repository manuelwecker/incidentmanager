import React from "react";
import styled from "@emotion/styled";

const Headline = styled.h2`
  width: 100%;
  height: 30px;
  padding: 0px;
  margin: 0px;
  text-align: center;
`;

function Headline2(props) {
  return <Headline {...props}></Headline>;
}

export default Headline2;
