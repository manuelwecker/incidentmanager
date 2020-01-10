import React from "react";
import {
  TextButton,
  SliderDotsButton,
  SvgTextFooterButton
} from "../components/Buttons";
import { H1, H2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import { Next } from "../assets/Icons";
import Aside from "../components/Aside";

export default function ReportThree() {
  const location = useLocation();
  return (
    <>
      <H2>Involved people:</H2>
      <H1>Who is effected and injured?</H1>
      <SliderDotsButton />

      <Aside>
        <Link to="/report/4" active={location.pathname === "/report/4"}>
          <SvgTextFooterButton
            svg={<Next />}
            text="Next to step 3"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
