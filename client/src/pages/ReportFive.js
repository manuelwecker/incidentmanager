import React from "react";
import { SliderDotsButton, SvgTextFooterButton } from "../components/Buttons";
import { H1, H2, H3 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import Aside from "../components/Aside";
import { Next } from "../assets/Icons";
import { Field, FieldGroup, Switch } from "../components/Forms";

export default function ReportFive() {
  const [value, setValue] = React.useState(true);
  console.log(value);

  const location = useLocation(false);
  return (
    <>
      <H2>Toogle:</H2>
      <H1>Toogle?</H1>

      <Switch isOn={value} handleToggle={() => setValue(!value)} />
      <SliderDotsButton />
      <Aside>
        <Link to="/send">
          <SvgTextFooterButton
            svg={<Next />}
            text="Next to step 2"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
