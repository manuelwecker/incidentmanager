import React from "react";
import { TextButton, SliderDotsButton } from "../components/Buttons";
import { H1, H2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";

export default function ReportOne() {
  const location = useLocation();
  return (
    <>
      <H2>Location, Date and Time:</H2>
      <H1>Where and when did it happened?</H1>
      <SliderDotsButton />
      <Link to="/report-3" active={location.pathname === "/report-3"}>
        <TextButton>Next to step 3</TextButton>
      </Link>
    </>
  );
}
