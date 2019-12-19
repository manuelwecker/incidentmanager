import React from "react";
import { configure, addDecorator } from "@storybook/react";
import GlobalStyles from "../src/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import light from "../src/themes/light";
import dark from "../src/themes/dark";
import { withKnobs } from "@storybook/addon-knobs";
import { select } from "@storybook/addon-knobs";

function chooseTheme(choice) {
  if (choice === "Dark") {
    return dark;
  }
  if (choice === "Light") {
    return light;
  }
}

// add GlobalStyle for every story
const GlobalStyleDecorator = storyFn => {
  return (
    <ThemeProvider
      theme={chooseTheme(select("Choose Theme", ["Dark", "Light"], "Light"))}
    >
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  );
};

addDecorator(GlobalStyleDecorator);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
