import React from "react";

import {
  ButtonText,
  ButtonSvgText,
  ButtonSliderDots
} from "../components/Buttons";
import { Fire, Accident } from "../assets/Icons";
import { Headline3, Headline2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";

export default function ReportThree() {
  const location = useLocation();
  return (
    <>
      <Headline3>Media attention:</Headline3>
      <Headline2>Are there already media requests or coverage?</Headline2>
      <form>
        <ButtonSvgText svg={<Fire />} text="requests"></ButtonSvgText>
        <ButtonSvgText svg={<Fire />} text="broadcasting"></ButtonSvgText>
        <ButtonSvgText svg={<Fire />} text="published"></ButtonSvgText>

        <ButtonSvgText svg={<Fire />} text="television"></ButtonSvgText>
        <ButtonSvgText svg={<Fire />} text="print"></ButtonSvgText>
        <ButtonSvgText svg={<Fire />} text="online"></ButtonSvgText>

        <ButtonSvgText svg={<Fire />} text="blogger/ activists"></ButtonSvgText>
        <ButtonSvgText svg={<Fire />} text="local media"></ButtonSvgText>
        <ButtonSvgText svg={<Fire />} text="country-wide media"></ButtonSvgText>
      </form>

      <ButtonSliderDots />
      <Link to="/summary" active={location.pathname === "/summary"}>
        <ButtonText text="Check summary and crisis potential"></ButtonText>
      </Link>
    </>
  );
}
