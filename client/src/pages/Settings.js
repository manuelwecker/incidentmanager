import React from "react";
import { useLocation, Link } from "react-router-dom";
import { H1, H2, H3 } from "../components/Headlines";
import Aside from "../components/Aside";
import { SvgTextFooterButton } from "../components/Buttons";
import { Next } from "../assets/Icons";

function Settings() {
  const location = useLocation();
  return (
    <>
      <H2>Set up your company and personal profile</H2>
      <H1>Settings</H1>

      <H3>Under construction</H3>
      <span>client management is not part of the MVP.</span>

      <Aside>
        <Link to="/issues">
          <SvgTextFooterButton
            svg={<Next />}
            text="Back to all issues"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}

export default Settings;
