import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  border: 1px solid black;
`;

const Label = styled.label`
  border: 1px solid black;
`;

const Typ = styled.input`
  border: 1px solid;
`;

const TimeDate = styled.input`
  border: 1px solid;
`;

const SubmitButton = styled.button`
  border: 1px solid black;
`;

export default function ReportOne() {
  const [typ, setTyp] = React.useState("");
  const [timedate, setTimedate] = React.useState(new Date());

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:8080/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        typ,
        timedate
      })
    });
    setTyp("");
    setTimedate("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Report an issue</Label>
      <Typ
        type="text"
        value={typ}
        onChange={event => setTyp(event.target.value)}
        placeholder="Typ"
      />
      <TimeDate
        type="datetime-local"
        value={timedate}
        onChange={event => setTimedate(event.target.value)}
      />
      <SubmitButton>Add Ticket</SubmitButton>
    </Form>
  );
}
