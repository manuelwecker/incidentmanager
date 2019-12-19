import React from "react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import Button from "../components/Button";

export default {
  component: Button,
  title: "Button"
};

export function ButtonText() {
  return (
    <Button onClick={action("button-click")}>
      {text("Label", "eine Textversion")}
    </Button>
  );
}
