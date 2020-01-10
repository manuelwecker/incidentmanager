import React from "react";
import {
  TextButton,
  SliderDotsButton,
  SvgTextFooterButton
} from "../components/Buttons";
import { H1, H2, H3 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import Aside from "../components/Aside";
import { Next } from "../assets/Icons";
import { Field, FieldGroup, Toggle, Switch } from "../components/Forms";
import useSessionStorage from "../hooks/useSessionStorage";

export default function ReportOne() {
  const [timeDate, setTimeDate] = useSessionStorage("timeDate", new Date());
  const [city, setCity] = useSessionStorage("city", "");
  const [site, setSite] = useSessionStorage("site", "");

  const [value, setValue] = React.useState(true);
  console.log(value);

  const location = useLocation(false);
  return (
    <>
      <H2>Location, Date and Time:</H2>
      <H1>Where and when did it happened?</H1>

      <FieldGroup>
        <H3>When?</H3>
        <Field>
          <input
            type="radio"
            id="timeDate"
            name="timeDate"
            value={timeDate}
            onChange={event => setTimeDate(event.target.value)}
          />
          <label for="timeDate">Today and now</label>
        </Field>
        <Field>
          <input
            type="radio"
            id="timeDateOtherDate"
            name="timeDate"
            value="otherDate"
          />
          <label for="timeDate">Other date / time</label>
          <input
            type="datetime-local"
            value={timeDate}
            onChange={event => setTimeDate(event.target.value)}
          />
        </Field>
      </FieldGroup>
      <FieldGroup>
        <H3>Where?</H3>
        <Field>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={event => setCity(event.target.value)}
            placeholder="Next City"
          />
        </Field>

        <Field>
          <input
            type="radio"
            id="onsite"
            name="site"
            value="site"
            onChange={event => setSite(event.target.value)}
          />
          <label for="onsite">On site</label>
        </Field>
        <Field>
          <input
            type="radio"
            id="offsite"
            name="site"
            value="offsite"
            onChange={event => setSite(event.target.value)}
          />
          <label for="offsite">Off site</label>
        </Field>
      </FieldGroup>

      <SliderDotsButton />
      <Aside>
        <Link to="/report/3" active={location.pathname === "/report/3"}>
          <SvgTextFooterButton
            svg={<Next />}
            text="Next to step 2"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
