import React from "react";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const FooterNavigation = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 4px;
`;

const Button = styled.button`
  color: ${props => props.theme.colors.secondary};
`;

const None = styled(Link)`
  text-decoration: non;
  &:a {
    text-decoration: non;
  }
  &:hover {
    text-decoration: non;
  }
`;

function Footer({ name, value, onClick }) {
  const location = useLocation();
  return (
    <FooterNavigation>
      <Link to="/crisismanual" active={location.pathname === "/crisismanual"}>
        <Button>crisis manual</Button>
      </Link>

      <Button name="activeTheme" value={"light"} onClick={onClick}>
        Theme
      </Button>
      <None to="/legalnotice" active={location.pathname === "/legalnotice"}>
        <Button>legal notice</Button>
      </None>
    </FooterNavigation>
  );
}

export default Footer;
