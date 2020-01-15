import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "@emotion/styled";
import LogoCompanySvgColored from "../components/LogoCompanySvgColored";
import SVGIncidentManagerBig from "../assets/SVGIncidentManagerBig";
import {
  Button,
  SVGSquareButton,
  SvgTextFooterButton
} from "../components/Buttons";
import { FireAnimated, Next, Avatar } from "../assets/Icons";

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
    ${props => props.theme.colors.corporateDesignSecondary};
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

const IconWrapper = styled.div`
  margin-top: 20px;
  height: 100px;
  width: 200px;
  z-index: 1;
  position: absolute;
  left: center;
  display: flex;
  justify-content: center;
  vertical-align: middle;
`;

function StartScreen() {
  const location = useLocation();
  return (
    <>
      <Div>
        <SVGWrapper>
          <IconWrapper>
            <FireAnimated width="100px" height="100px" viewBox="0 0 64 64" />
          </IconWrapper>
          <SVGIncidentManagerBig></SVGIncidentManagerBig>
        </SVGWrapper>
        <Link to="/login">
          <SvgTextFooterButton
            svg={<Avatar />}
            text="Login for a demo"
          ></SvgTextFooterButton>
        </Link>
      </Div>

      <LogoWrapper>
        <SvgWrapper>
          <LogoCompanySvgColored></LogoCompanySvgColored>
        </SvgWrapper>
      </LogoWrapper>
    </>
  );
}

export default StartScreen;
