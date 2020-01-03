import React from "react";
import styled from "@emotion/styled";
import useSessionStorage from "../hooks/useSessionStorage";
import IconTypeAccident from "../assets/IconTypeAccident";
import { Accident, Fire } from "../assets/Icons";
import {
  Button,
  ButtonText,
  ButtonSvg,
  ButtonSubmit,
  ButtonSliderDots
} from "../components/Buttons";
import { Headline3, Headline2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";

const Form = styled.form`
  border: 1px solid black;
`;

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
  const [timedate, setTimedate] = useSessionStorage("timedate", new Date());

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:7070/issues", {
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
  const location = useLocation();
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Headline3>Typ of incident:</Headline3>
        <Headline2>What happened?</Headline2>
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
        <Headline3>Date and Time:</Headline3>
        <Headline2>When did it happened?</Headline2>
        <TimeDate
          type="datetime-local"
          value={timedate}
          onChange={event => setTimedate(event.target.value)}
        />

        <Text
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
          placeholder="Textinput"
        />

        <ButtonSubmit text="Report current issue"></ButtonSubmit>
      </Form>
      <ButtonSliderDots />
      <Link to="/report-2" active={location.pathname === "/report-2"}>
        <ButtonText text="Next to step 2"></ButtonText>
      </Link>
    </>
  );
}
