import React from "react";
import styled from "@emotion/styled";
import { useLocation, Link } from "react-router-dom";
import Logo from "./Logo";

const HeaderNavigation = styled.div`
  background-color: ${props => props.theme.colors.corporatedesignprimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 4px;
`;

const Button = styled.button`
  color: ${props => props.theme.colors.secondary};
`;

function Header() {
  const location = useLocation();
  return (
    <>
      <Logo></Logo>
      <HeaderNavigation>
        <Link to="/issues" active={location.pathname === "/issues"}>
          <Button>Show all issues</Button>
        </Link>
        <Link to="/settings" active={location.pathname === "/settings"}>
          <Button>Settings</Button>
        </Link>
      </HeaderNavigation>
    </>
  );
}

export default Header;
