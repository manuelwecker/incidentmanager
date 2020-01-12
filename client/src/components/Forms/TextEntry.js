import React from "react";
import styled from "@emotion/styled";
import { SVGSquareButton } from "../../components/Buttons";
import { Next, Tasks } from "../../assets/Icons";
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

function TextEntry({ url, sessionStorageValue, svg, children }) {
  return (
    <LinkWrapper to={url}>
      <TextEntryWrapper>
        <span>{sessionStorage.getItem(sessionStorageValue)}</span>
        <SVGSquareButton>
          {/* <Next /> */}
          {svg}
          {children}
        </SVGSquareButton>
      </TextEntryWrapper>
    </LinkWrapper>
  );
}

export default TextEntry;
