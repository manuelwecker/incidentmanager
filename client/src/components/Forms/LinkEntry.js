import React from "react";
import styled from "@emotion/styled";
import { SVGSquareButton } from "../Buttons";
import { Link } from "react-router-dom";

const LinkWrapper = styled(Link)`
  width: 100%;
  display: block;
`;

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
  }
`;

function LinkEntry({ url, sessionStorageValue, svg, children }) {
  return (
    <LinkWrapper to={url}>
      <TextEntryWrapper>
        <span>{sessionStorageValue}</span>
        <SVGSquareButton>
          {svg}
          {children}
        </SVGSquareButton>
      </TextEntryWrapper>
    </LinkWrapper>
  );
}

export default LinkEntry;
