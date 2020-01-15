import React from "react";
import styled from "@emotion/styled";
import { useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NoStyleButton from "./Buttons/NoStyleButton";

const FooterNavigation = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 4px;
`;

const Button = styled.button``;

function Footer({ name, value, onClick }) {
  const location = useLocation();
  return (
    <FooterNavigation>
      <Link to="/crisismanual">
        <NoStyleButton>crisis manual</NoStyleButton>
      </Link>
      <NoStyleButton name="activeTheme" value={"light"} onClick={onClick}>
        switch theme
      </NoStyleButton>
      <Link to="/legalnotice">
        <NoStyleButton>legal notice</NoStyleButton>
      </Link>
    </FooterNavigation>
  );
}

export default Footer;
