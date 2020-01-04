import React from "react";
import LogoCompanyUrl from "../components/LogoCompanyUrl";
import LogoCompanySvg from "../components/LogoCompanySvg";
import { text } from "@storybook/addon-knobs";

export default {
  title: "AppDesign| Logo Company"
};

export function LogoFromUrlWithoutUrl() {
  return <LogoCompanySvg />;
}

export function LogoFromUrlWithUrl() {
  return (
    <LogoCompanyUrl
      src={text(
        "src:",
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Altana_Logo_2007.svg"
      )}
    />
  );
}
