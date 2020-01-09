import React from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import { Avatar } from "../../assets/Icons";

const SubmitButtonForm = styled(Button)`
  display: flex;
`;

function SubmitButton({ text }) {
  return (
    <SubmitButtonForm type="submit">
      {text}
      <Button>
        <Avatar />
      </Button>
    </SubmitButtonForm>
  );
}

export default SubmitButton;
