import React from "react";
import { ButtonText } from "../components/Buttons";
import { Headline3, Headline2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";

export default function ReportThree() {
  const location = useLocation();
  return (
    <>
      <Headline3>What has happened worldwide?</Headline3>
      <Headline2>Current issues</Headline2>

      <Link to="/report" active={location.pathname === "/report"}>
        <ButtonText text="Report a new issue"></ButtonText>
      </Link>
    </>
  );
}
