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
import { Link } from "react-router-dom";
import { FormReport, FieldGroup, Field, Switch } from "../components/Forms";
import Aside from "../components/Aside";
import calculateCrisisPotential from "../utils/calculateCrisisPotential";

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

export default function ReportFour() {
  return (
    <>
      <H2>Media attention:</H2>
      <H1>Is there media coverage?</H1>

      <FieldGroup>
        <H3>Media interest</H3>
        <Field>
          <input type="checkbox" />
          <label>requests</label>
        </Field>
        {/* <Field>
            <label htmlFor="employerInjured">Employer injured</label>
            <Switch
              type="checkbox"
              isOn={isSelected}
              onColor="#00a6eb"
              handleToggle={() => setIsSelected(!isSelected)}
              id="employerInjured"
              name="employerInjured"
              value="employerInjured"
              onChange={event => setEmployeeInjured(event.target.value)}
            />
          </Field> */}
        <Field>
          <input type="checkbox" />
          <label>broadcasting</label>
        </Field>
        <Field>
          <input type="checkbox" />
          <label>published</label>
        </Field>
      </FieldGroup>

      <FieldGroup>
        <H3>Type of media</H3>
        <Field>
          <input type="checkbox" />
          <label>television</label>
        </Field>
        <Field>
          <input type="checkbox" />
          <label>print</label>
        </Field>
        <Field>
          <input type="checkbox" />
          <label>online</label>
        </Field>
      </FieldGroup>

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
         */}

      {/* <Text
          type="text"
          value={crisisPotential}
          onChange={event => setCrisisPotential(event.target.value)}
          placeholder="calculated"
        /> */}
      <SliderDotsButton />
      {/* <button type="submit"></button> */}

      <Aside>
        <Link to="/summary">
          <SvgTextFooterButton
            svg={<Next />}
            text="Check summary and crisis potential"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
