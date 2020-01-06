import React from "react";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const FooterNavigation = styled.footer`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 4px;
`;

const Button = styled.button`
  color: ${props => props.theme.colors.secondary};
`;

function Footer() {
  const location = useLocation();
  return (
    <FooterNavigation>
      <Link to="/crisismanual" active={location.pathname === "/crisismanual"}>
        <Button>crisis manual</Button>
      </Link>
      <Link to="/legalnotice" active={location.pathname === "/legalnotice"}>
        <Button>legal notice</Button>
      </Link>
    </FooterNavigation>
  );
}

export default Footer;
