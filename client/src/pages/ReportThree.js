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

export default function ReportThree() {
  const location = useLocation();
  return (
    <>
      <Headline3>Involved people:</Headline3>
      <Headline2>Who is effected and injured?</Headline2>
      <ButtonSliderDots />
      <Link to="/report-4" active={location.pathname === "/report-4"}>
        <ButtonText text="Next to step 4"></ButtonText>
      </Link>
    </>
  );
}
