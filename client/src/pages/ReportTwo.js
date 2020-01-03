import React from "react";
import styled from "@emotion/styled";
import {
  Button,
  ButtonText,
  ButtonSvg,
  ButtonSubmit,
  ButtonSliderDots
} from "../components/Buttons";
import { Headline3, Headline2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";

export default function ReportOne() {
  const location = useLocation();
  return (
    <>
      <Headline3>Location, Date and Time:</Headline3>
      <Headline2>Where and when did it happened?</Headline2>
      <ButtonSliderDots />
      <Link to="/report-3" active={location.pathname === "/report-3"}>
        <ButtonText text="Next to step 3"></ButtonText>
      </Link>
    </>
  );
}
