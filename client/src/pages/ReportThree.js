import React from "react";
import { TextButton, SliderDotsButton } from "../components/Buttons";
import { H1, H2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";

export default function ReportThree() {
  const location = useLocation();
  return (
    <>
      <H2>Involved people:</H2>
      <H1>Who is effected and injured?</H1>
      <SliderDotsButton />
      <Link to="/report/4" active={location.pathname === "/report/4"}>
        <TextButton>Next to step 4</TextButton>
      </Link>
    </>
  );
}
