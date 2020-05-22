import React from "react";
import styled from "@emotion/styled";
import { SVGSquareButton } from "../Buttons";

const TextEntryWrapper = styled.div`
  width: 100%;
  height: 44px;
  border-bottom: 1px solid ${props => props.theme.colors.background};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 4px;
  margin: 0px;
`;

function TaskEntry({ text, svg, children }) {
  return (
    <TextEntryWrapper>
      <span>{text}</span>
      <SVGSquareButton>
        {svg}
        {children}
      </SVGSquareButton>
    </TextEntryWrapper>
  );
}

export default TaskEntry;
