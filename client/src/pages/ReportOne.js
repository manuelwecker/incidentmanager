import React from "react";
import styled from "@emotion/styled";
import {
  TextButton,
  SvgTextButton,
  SliderDotsButton,
  SvgTextFooterButton
} from "../components/Buttons";
import { Fire, Accident, Next, Demonstration } from "../assets/Icons";
import { H1, H2, H3 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import Aside from "../components/Aside";
import { FormReport, FieldGroup, Field, Radio } from "../components/Forms";
import useSessionStorage from "../hooks/useSessionStorage";

const BiggerField = styled(Field)`
  min-height: 280px;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4px 0 12px 0;
  overflow: auto;
`;

export default function ReportFour() {
  sessionStorage.clear();
  const location = useLocation();
  const [type, setType] = useSessionStorage("type");
  let [isChecked, setIsChecked] = React.useState();

  let typeStored = sessionStorage.getItem("type");

  function onChangeHandler(event, id) {
    setType(event.target.value);
    id === event.target.value
      ? setIsChecked((isChecked = false))
      : setIsChecked((isChecked = true));
    console.log(typeStored);
    console.log(isChecked);
  }
  return (
    <>
      <H2>Typ of incident:</H2>
      <H1>What happened?</H1>

      <BiggerField>
        <FieldGroup>
          <Radio
            svg={<Accident />}
            text="Accident"
            name="type"
            id="accident"
            value="accident"
            onClick={onChangeHandler}
            isChecked
            typeStored
          />
          <Radio
            svg={<Demonstration />}
            text="Demonstration"
            name="type"
            id="demonstration"
            value="demonstration"
            onClick={onChangeHandler}
            isChecked
            typeStored
          />
          <Radio
            svg={<Fire />}
            text="Fire"
            name="type"
            id="fire"
            value="fire"
            onClick={onChangeHandler}
            isChecked
            typeStored
          />
        </FieldGroup>
        <FieldGroup>
          <Radio
            svg={<Fire />}
            text="Spillage"
            name="type"
            id="spillage"
            value="spillage"
            onClick={onChangeHandler}
            isChecked
            typeStored
          />
          <Radio
            svg={<Fire />}
            text="Storm"
            name="type"
            id="storm"
            value="storm"
            onClick={onChangeHandler}
            isChecked
            typeStored
          />
          <Radio
            svg={<Fire />}
            text="Strike"
            name="type"
            id="strike"
            value="strike"
            onClick={onChangeHandler}
            isChecked
            typeStored
          />
        </FieldGroup>
        <FieldGroup>
          <Radio
            svg={<Fire />}
            text="Theft"
            name="type"
            id="theft"
            value="theft"
            onClick={onChangeHandler}
            isChecked
            typeStored
          />
        </FieldGroup>
      </BiggerField>

      <SliderDotsButton />

      <Aside>
        <Link to="/report/2">
          <SvgTextFooterButton
            svg={<Next />}
            text="Next to step 2"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
