import React from "react";

import {
  TextButton,
  SvgTextButton,
  SliderDotsButton
} from "../components/Buttons";
import { Fire, Accident } from "../assets/Icons";
import { H1, H2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";

export default function ReportThree() {
  const location = useLocation();

  return (
    <>
      <H2>Media attention:</H2>
      <H1>Are there already media requests or coverage?</H1>
      <form>
        <SvgTextButton svg={<Fire />} text="requests"></SvgTextButton>
        <SvgTextButton svg={<Accident />} text="broadcasting"></SvgTextButton>
        <SvgTextButton svg={<Fire />} text="published"></SvgTextButton>

        <SvgTextButton svg={<Fire />} text="television"></SvgTextButton>
        <SvgTextButton svg={<Fire />} text="print"></SvgTextButton>
        <SvgTextButton svg={<Fire />} text="online"></SvgTextButton>

        <SvgTextButton svg={<Fire />} text="blogger/ activists"></SvgTextButton>
        <SvgTextButton svg={<Fire />} text="local media"></SvgTextButton>
        <SvgTextButton svg={<Fire />} text="country-wide media"></SvgTextButton>
      </form>

      <SliderDotsButton />
      <Link to="/summary" active={location.pathname === "/summary"}>
        <TextButton>Check summary and crisis potential</TextButton>
      </Link>
    </>
  );
}
