import React from "react";
import styled from "@emotion/styled";
import { useLocation, Link } from "react-router-dom";

const Dot = styled.button`
  background-color: ${props =>
    props.active
      ? props.theme.colors.corporateDesignSecondary
      : props.theme.colors.primary};
  height: 20px;
  width: 20px;
  border: none;
  border-radius: 50%;

  z-index: 2;
  display: flex;
`;

const HrLine = styled.hr`
  border: 2px solid ${props => props.theme.colors.primary};
  z-index: -1;
  position: relative;
  top: -20px;
  width: 100%;
  display: block;
`;

const Container = styled.div`
  width: 100%;
  padding: 0px 20px 0px 20px;
  margin: 16px 0 12px 0;
  height: 30px;
  background-color: ${props => props.theme.colors.background};
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  flex-wrap: wrap;
  display: flex;
  z-index: 1;
  position: absolute;
  bottom: +70px;
  left: 0px;
`;

function ButtonsSliderDots() {
  const location = useLocation();
  return (
    <Container>
      <Link to="/report/1">
        <Dot active={location.pathname === "/report/1"}></Dot>
      </Link>
      <Link to="/report/2">
        <Dot active={location.pathname === "/report/2"}></Dot>
      </Link>
      <Link to="/report/3">
        <Dot active={location.pathname === "/report/3"}></Dot>
      </Link>
      <Link to="/report/4">
        <Dot active={location.pathname === "/report/4"}></Dot>
      </Link>
      <HrLine></HrLine>
    </Container>
  );
}

export default ButtonsSliderDots;
