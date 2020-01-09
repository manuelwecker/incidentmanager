import React from "react";
import styled from "@emotion/styled";
import useSessionStorage from "../hooks/useSessionStorage";
import { Accident, Fire } from "../assets/Icons";
import {
  TextButton,
  SubmitButton,
  SliderDotsButton
} from "../components/Buttons";
import { H1, H2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import { FormReport } from "../components/Forms";

const Label = styled.label`
  border: 1px solid black;
  width: 78px;
  height: 78px;
  box-shadow: 0px 0px 4px 1px grey;
  background-color: yellow;
  position: fixed;
  width: 0;
`;

const Container = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 23%;
  margin: 20px 1% 20px 0;
  height: 120px;
  vertical-align: top;
  font-size: 22px;
  text-align: center;
`;

const LabelSquare = styled(Label)`
  border: 1px solid rgba($font-color, 0.15);
  box-sizing: border-box;
  display: block;
  height: 30%;
  width: 30%;
  padding: 10px 10px 30px 10px;
  cursor: pointer;
  opacity: 0.5;
  border: 1px solid;
`;

const Text = styled.input`
  border: 1px solid;
  width: 78px;
  height: 78px;
`;

const Typ = styled.input`
  opacity: 0;
  width: 78px;
  height: 78px;
  &:active {
    opacity: 1;
  }
`;

const TimeDate = styled.input`
  border: 1px solid;
`;

export default function ReportOne() {
  const [text, setText] = useSessionStorage("text", "");
  const [typ, setTyp] = useSessionStorage("typ", "");
  const [timeDate, setTimedate] = useSessionStorage("timeDate", new Date());

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:7070/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        typ,
        timeDate,
        text
      })
    });
    // setTyp("");
    // setTimedate("");
  }
  const location = useLocation();
  return (
    <>
      <FormReport onSubmit={handleSubmit}>
        <H2>Typ of incident:</H2>
        <H1>What happened?</H1>
        <Container>
          <Typ
            name="typeofissue"
            type="radio"
            value="typFire"
            placeholder="typFire"
            onChange={event => setTyp(event.target.value)}
          />
          <LabelSquare>
            <Accident />
            Accident
          </LabelSquare>
        </Container>
        <Container>
          <LabelSquare>
            <Fire />
            Fire
          </LabelSquare>
          <Typ
            name="typeofissue"
            type="radio"
            value="typTerror"
            placeholder="typTerror"
            onChange={event => setTyp(event.target.value)}
          />
        </Container>
        <H2>Date and Time:</H2>
        <H1>When did it happened?</H1>
        <TimeDate
          type="datetime-local"
          value={timeDate}
          onChange={event => setTimedate(event.target.value)}
        />

        <Text
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
          placeholder="Textinput"
        />

        <SubmitButton text="Report current issue"></SubmitButton>
      </FormReport>
      <SliderDotsButton />
      <Link to="/report-2" active={location.pathname === "/report-2"}>
        <TextButton>Next to step 2</TextButton>
      </Link>
    </>
  );
}
