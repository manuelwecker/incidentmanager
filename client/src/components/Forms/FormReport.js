import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  background-color: grey;
  text-decoration: unset;
`;

function FormReport(props) {
  return <Form {...props}></Form>;
}

export default FormReport;
