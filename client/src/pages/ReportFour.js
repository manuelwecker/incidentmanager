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
      <Headline3>Media attention:</Headline3>
      <Headline2>Are there already media requests or coverage?</Headline2>
      <ButtonSliderDots />
      <Link to="/summary" active={location.pathname === "/summary"}>
        <ButtonText text="Check summary and crisis potential"></ButtonText>
      </Link>
    </>
  );
}
