import React from "react";
import styled from "@emotion/styled";
import useSessionStorage from "../hooks/useSessionStorage";

const Form = styled.form`
  border: 1px solid black;
`;

const Label = styled.label`
  border: 1px solid black;
`;

const Text = styled.input`
  border: 1px solid;
`;

const Typ = styled.input`
  border: 1px solid;
  opacity: 0;
`;

const TypFire = styled(Typ)`
  width: 50px;
  height: 50px;
  background-color: red;
`;

const TimeDate = styled.input`
  border: 1px solid;
`;

const SubmitButton = styled.button`
  border: 1px solid black;
`;

export default function ReportOne() {
  // const [typ, setTyp] = React.useState("");
  // const [timedate, setTimedate] = React.useState(new Date());

  const [text, setText] = useSessionStorage("text", "");
  const [typ, setTyp] = useSessionStorage("typ", "");
  const [timedate, setTimedate] = useSessionStorage("timedate", new Date());

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:8080/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        typ,
        timedate,
        text
      })
    });
    // setTyp("");
    // setTimedate("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Report an issue</Label>
      <h3>Typ of incident:</h3>
      <h2>What happened?</h2>

      <h3>Date and Time: </h3>
      <h2>When did it happened?</h2>

      <label>
        <img
          src="../images/greenchem.png"
          alt="Issue Fire"
          width="50"
          height="50"
        />
        typFire
        <Typ
          name="radio-button-group"
          type="radio"
          value="typFire"
          placeholder="typFire"
          onChange={event => setTyp(event.target.value)}
          isStateful={true}
        />
      </label>
      <label>
        <img
          src="../images/greenchem.png"
          alt="Issue Terror"
          width="50"
          height="50"
        />
        typFire
        <Typ
          name="radio-button-group"
          type="radio"
          value="typTerror"
          placeholder="typTerror"
          onChange={event => setTyp(event.target.value)}
          isStateful={true}
        />
      </label>

      <TimeDate
        type="datetime-local"
        value={timedate}
        onChange={event => setTimedate(event.target.value)}
      />
      <h3>Date and Time: </h3>
      <h2>When did it happened?</h2>
      <Text
        type="text"
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder="Textinput"
      />
      <SubmitButton>Add Ticket</SubmitButton>
    </Form>
  );
}
