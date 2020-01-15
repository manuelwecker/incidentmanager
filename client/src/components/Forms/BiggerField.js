import React from "react";
import styled from "@emotion/styled";
import Field from "./Field";

const BiggerField = styled(Field)`
  min-height: 136px;
  max-height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex;
  padding: 4px 0 12px 0;
`;

export default BiggerField;
