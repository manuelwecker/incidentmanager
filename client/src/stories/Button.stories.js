import React from "react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { Button, ButtonText } from "../components/Buttons";

export default {
  title: "UserInput| Buttons"
};

export function ButtonTextVersion() {
  return (
    <Button onClick={action("button-click")}>
      {text("Label", "eine Textversion")}
    </Button>
  );
}
