import React from "react";
import styled from "@emotion/styled";
import {
  TextButton,
  SvgTextButton,
  SliderDotsButton,
  SvgTextFooterButton
} from "../components/Buttons";
import {
  Fire,
  Accident,
  Next,
  Demonstration,
  Spillage,
  Weather,
  Theft
} from "../assets/Icons";
import { H1, H2, H3 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import Aside from "../components/Aside";
import { FormReport, FieldGroup, Field, Radio } from "../components/Forms";
import useSessionStorage from "../hooks/useSessionStorage";
import Strike from "../assets/Icons/Strike";

const BiggerField = styled(Field)`
  min-height: 280px;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4px 0 12px 0;
  overflow: auto;
`;

export default function ReportOne() {
  sessionStorage.clear();
  const location = useLocation();
  const [type, setType] = useSessionStorage("type");
  const [typeStored, setTypeStored] = useSessionStorage("type");
  let [isChecked, setIsChecked] = React.useState(false);

  // let typeStored = sessionStorage.getItem("type");

  function onChangeHandler(event, id) {
    setType(event.target.value);
    id === event.target.value
      ? setIsChecked((isChecked = false))
      : setIsChecked((isChecked = true));
  }

  React.useEffect(() => {
    const data = sessionStorage.getItem("type");
    setTypeStored(data);
  }, [type]);

  return (
    <>
      <H2>Type of incident</H2>
      <H1>What is happening?</H1>

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
            typeStored={typeStored}
          />
          <Radio
            svg={<Demonstration />}
            text="Demonstration"
            name="type"
            id="demonstration"
            value="demonstration"
            onClick={onChangeHandler}
            isChecked
            typeStored={typeStored}
          />
          <Radio
            svg={<Fire />}
            text="Fire"
            name="type"
            id="fire"
            value="fire"
            onClick={onChangeHandler}
            isChecked
            typeStored={typeStored}
          />
        </FieldGroup>
        <FieldGroup>
          <Radio
            svg={<Spillage />}
            text="Spillage"
            name="type"
            id="spillage"
            value="spillage"
            onClick={onChangeHandler}
            isChecked
            typeStored={typeStored}
          />
          <Radio
            svg={<Weather />}
            text="Weather"
            name="type"
            id="weather"
            value="weather"
            onClick={onChangeHandler}
            isChecked
            typeStored={typeStored}
          />
          <Radio
            svg={<Strike />}
            text="Strike"
            name="type"
            id="strike"
            value="strike"
            onClick={onChangeHandler}
            isChecked
            typeStored={typeStored}
          />
        </FieldGroup>
        <FieldGroup>
          <Radio
            svg={<Theft />}
            text="Theft"
            name="type"
            id="theft"
            value="theft"
            onClick={onChangeHandler}
            isChecked
            typeStored={typeStored}
          />
        </FieldGroup>
      </BiggerField>

      <SliderDotsButton />

      <Aside>
        <Link to="/report/2">
          <SvgTextFooterButton
            svg={<Next />}
            text="Go to step 2"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
