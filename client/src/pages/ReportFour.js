import React from "react";
import styled from "@emotion/styled";
import useSessionStorage from "../hooks/useSessionStorage";
import { Accident, Fire, Next } from "../assets/Icons";
import {
  TextButton,
  SubmitButton,
  SliderDotsButton,
  SvgTextFooterButton,
  SvgTextButton
} from "../components/Buttons";
import { H1, H2, H3 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import { FormReport, FieldGroup, Field } from "../components/Forms";
import Aside from "../components/Aside";

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
  const [timeDate, setTimeDate] = useSessionStorage("timeDate", new Date());

  let city = sessionStorage.getItem("city");
  let site = sessionStorage.getItem("site");
  let type = sessionStorage.getItem("type");

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:7070/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        type,
        timeDate,
        city,
        site,
        text
      })
    });
    // setTyp("");
    // setTimeDate("");
  }
  const location = useLocation();
  return (
    <>
      <FormReport onSubmit={handleSubmit}>
        <H2>Typ of incident:</H2>
        <H1>What happened?</H1>
        Media attention: Are there already media requests or coverage?
        <FieldGroup>
          <H3>Where?</H3>
          <Field></Field>
        </FieldGroup>
        <H2></H2>
        <H1></H1>
        <form>
          <SvgTextButton svg={<Fire />} text="requests"></SvgTextButton>
          <SvgTextButton svg={<Accident />} text="broadcasting"></SvgTextButton>
          <SvgTextButton svg={<Fire />} text="published"></SvgTextButton>

          <SvgTextButton svg={<Fire />} text="television"></SvgTextButton>
          <SvgTextButton svg={<Fire />} text="print"></SvgTextButton>
          <SvgTextButton svg={<Fire />} text="online"></SvgTextButton>

          <SvgTextButton
            svg={<Fire />}
            text="blogger/ activists"
          ></SvgTextButton>
          <SvgTextButton svg={<Fire />} text="local media"></SvgTextButton>
          <SvgTextButton
            svg={<Fire />}
            text="country-wide media"
          ></SvgTextButton>
        </form>
        {/* new */}
        {/* <Container>
          <Typ
            name="typeofissue"
            type="radio"
            value="typFire"
            placeholder="typFire"
            onChange={event => setType(event.target.value)}
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
            onChange={event => setType(event.target.value)}
          />
        </Container>
        <H2>Date and Time:</H2>
        <H1>When did it happened?</H1>
        <TimeDate
          type="datetime-local"
          value={timeDate}
          onChange={event => setTimeDate(event.target.value)}
        />
        <Text
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
          placeholder="Textinput"
        /> */}
        <SubmitButton text="Report current issue"></SubmitButton>
      </FormReport>
      <SliderDotsButton />

      <Aside>
        <Link to="/summary" active={location.pathname === "/summary"}>
          <SvgTextFooterButton
            svg={<Next />}
            text="Check summary and crisis potential"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
