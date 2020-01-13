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
import { useLocation, useHistory } from "react-router-dom";
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

export default function ReportOne() {
  const history = useHistory();
  const [text, setText] = useSessionStorage("text", "");
  const [crisisPotential, setCrisisPotential] = useSessionStorage(
    "crisisPotential",
    ""
  );
  const [timeDate, setTimeDate] = useSessionStorage("timeDate", new Date());

  const [employeeInjured, setEmployeeInjured] = useSessionStorage(
    "employeeInjured",
    ""
  );
  const [isSelected, setIsSelected] = React.useState(false);

  let city = sessionStorage.getItem("city");
  let site = sessionStorage.getItem("site");
  let type = sessionStorage.getItem("type");

  // loading State onSubmitting = true
  async function handleSubmit(event) {
    let typeStored = sessionStorage.getItem("type");
    console.log(typeStored);
    setCrisisPotential(calculateCrisisPotential(typeStored));

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
        crisisPotential
      })
    });
    // Redirect("/summary");
    // setTyp("");
    // setTimeDate("");
    history.push("/summary");
  }
  const location = useLocation();

  return (
    <>
      <FormReport onSubmit={handleSubmit}>
        <H2>Media attention:</H2>
        <H1>Media requests or coverage?</H1>

        <FieldGroup>
          <H3>Current media</H3>
          {/* <Field>
            <label>requests</label>
            <input type="checkbox" />
          </Field> */}
          <Field>
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
          </Field>
          <Field>
            <label>broadcasting</label>
            <input type="checkbox" />
          </Field>
          <Field>
            <label>published</label>
            <input type="checkbox" />
          </Field>
        </FieldGroup>

        <FieldGroup>
          <H3>Type of media</H3>
          <Field>
            <label>television</label>
            <input type="checkbox" />
          </Field>
          <Field>
            <label>print</label>
            <input type="checkbox" />
          </Field>
          <Field>
            <label>online</label>
            <input type="checkbox" />
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
        <SubmitButton text="Report current issue"></SubmitButton>

        <SliderDotsButton />

        <Aside>
          <SvgTextFooterButton
            type="submit"
            svg={<Next />}
            text="Check summary and crisis potential"
          ></SvgTextFooterButton>
        </Aside>
      </FormReport>
    </>
  );
}
