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
import { Field } from "../components/Forms";

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

const InputWrapper = styled.div`
  width: 200px;
  margin: 0 0 4px 0;
`;

const SvgWrapper = styled.div`
  width: 120px;
  max-height: 32px;
  margin: 16px 0 0 0;
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

const Spacer = styled.hr`
  border: 0px solid white;
  height: 50px;
  opacity: 1;
  width: 0px;
`;

const Input = styled.input`
  all: unset;
  min-width: 100%;
  &:hover {
    color: ${props => props.theme.colors.corporateDesignSecondary};
  }
`;

function Login() {
  const location = useLocation();
  return (
    <>
      <Div>
        <InputWrapper>
          <Field>
            <Input type="text" placeholder="gast" />
          </Field>
          <Field>
            <Input type="text" placeholder="****" />
          </Field>
        </InputWrapper>
        <Link to="/issues">
          <SvgTextFooterButton
            svg={<Next />}
            text="Login with gast/gast"
          ></SvgTextFooterButton>
        </Link>
        <Spacer />
        <Link to="/login">
          <SvgTextFooterButton
            svg={<Avatar />}
            text="Or register as new user"
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

export default Login;
