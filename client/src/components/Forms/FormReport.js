import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  text-decoration: unset;
  margin: 0px;
  padding: 0px;
`;

function FormReport(props) {
  return <Form {...props}></Form>;
}

export default FormReport;
