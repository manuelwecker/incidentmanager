import React from "react";
import styled from "@emotion/styled";
import { useLocation, Link } from "react-router-dom";
import Logo from "./Logo";

const HeaderNavigation = styled.div`
  height: 52px;
  min-height: 52px;
  max-height: 52px;
  margin: 0px;
  padding: 8px;
  background-color: ${props => props.theme.colors.corporatedesignprimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const ButtonNavigation = styled.button`
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
  width: 34px;
  height: 34px;
  text-align: left;
  fill: #ffffff;
  &:hover {
    fill: #dddddd;
    border-color: #dddddd;
  }
`;

function ButtonSVGIssues() {
  return (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M17,19.22H5V7h7V5H5C3.9,5,3,5.9,3,7v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-7h-2V19.22z" />
        <path d="M19,2h-2v3h-3c0.01,0.01,0,2,0,2h3v2.99c0.01,0.01,2,0,2,0V7h3V5h-3V2z" />
        <rect x="7" y="9" width="8" height="2" />
        <polygon points="7,12 7,14 15,14 15,12 12,12 		" />
        <rect x="7" y="15" width="8" height="2" />
      </svg>
    </>
  );
}

function ButtonSVGSettings() {
  return (
    <>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" />
      </svg>
    </>
  );
}

function Header() {
  const location = useLocation();
  return (
    <>
      <HeaderNavigation>
        <Link to="/issues" active={location.pathname === "/issues"}>
          <ButtonNavigation>
            <ButtonSVGIssues />
          </ButtonNavigation>
        </Link>
        <Logo></Logo>

        <Link to="/settings" active={location.pathname === "/settings"}>
          <ButtonNavigation>
            <ButtonSVGSettings />
          </ButtonNavigation>
        </Link>
      </HeaderNavigation>
    </>
  );
}

export default Header;
