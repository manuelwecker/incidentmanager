import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "@emotion/styled";
import LogoCompanySvg from "../components/LogoCompanySvg";
import SVGIncidentManagerBig from "../assets/SVGIncidentManagerBig";
import { Button, ButtonSVGLogin } from "../components/Buttons";
import { Fire, Accident, Tasks } from "../assets/Icons";

const ButtonStartScreen = styled(Button)`
  background-color: #ffffff;
  height: 44px;
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-justify: middle;
`;

const LogoWrapper = styled.div`
  align-content: center;
  align-items: center;
  align-self: center;
  vertical-align: middle;
`;

const SvgWrapper = styled.div`
  width: 120px;
  max-height: 32px;
  margin: 20px 0 0 0;
`;

const Div = styled.div`
  background: rgb(0, 77, 160);
  background: linear-gradient(
    0deg,
    rgba(0, 77, 160, 1) 0%,
    rgba(0, 166, 235, 1) 100%
  );
  min-height: 90%;
  border-bottom: 8px solid
    ${props => props.theme.colors.corporatedesignsecondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SVGWrapper = styled.div`
  width: 200px;
  height: 200px;
`;

const Span = styled.div`
  display: flex;
`;

function StartScreen() {
  const location = useLocation();
  return (
    <>
      <Div>
        <SVGWrapper>
          <SVGIncidentManagerBig></SVGIncidentManagerBig>
        </SVGWrapper>
        <Link to="/issues" active={location.pathname === "/issues"}>
          <ButtonStartScreen>
            <Span>Login for a demo</Span> <ButtonSVGLogin></ButtonSVGLogin>
          </ButtonStartScreen>
        </Link>
      </Div>

      <LogoWrapper>
        <SvgWrapper>
          <LogoCompanySvg></LogoCompanySvg>
        </SvgWrapper>
      </LogoWrapper>
    </>
  );
}

export default StartScreen;
