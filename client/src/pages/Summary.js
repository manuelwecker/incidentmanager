import React from "react";

import {
  TextButton,
  SvgTextButton,
  SliderDotsButton,
  SvgTextFooterButton
} from "../components/Buttons";
import { Fire, Accident, Next } from "../assets/Icons";
import { H1, H2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import Aside from "../components/Aside";

export default function ReportFour() {
  const location = useLocation();

  return (
    <>
      <H2>Summary and crisis potential</H2>
      <H1>Please check and report</H1>

      <SliderDotsButton />

      <Aside>
        <Link to="/send" active={location.pathname === "/send"}>
          <SvgTextFooterButton
            svg={<Next />}
            text="Report to the crisis management"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
