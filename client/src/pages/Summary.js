import React from "react";
import styled from "@emotion/styled";
import {
  TextButton,
  SvgTextButton,
  SliderDotsButton,
  SvgTextFooterButton,
  SvgButton,
  SVGSquareButton
} from "../components/Buttons";
import { Fire, Accident, Next } from "../assets/Icons";
import { H1, H2, H3 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import Aside from "../components/Aside";
import { Field, IssueCrisisPotential } from "../components/Forms";
import ContainerFlexRow from "../components/ContainerFlexRow";
import ContainerFlexCol from "../components/ContainerFlexCol";

const ContainerFlexRowWrap = styled(ContainerFlexRow)`
  justify-content: space-between;
`;

const BiggerField = styled(Field)`
  min-height: 280px;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4px 0 12px 0;
  overflow: auto;
`;

export default function ReportFour() {
  const location = useLocation();

  return (
    <>
      <H2>Summary and crisis potential</H2>
      <H1>Please check and report</H1>

      <Field>
        <ContainerFlexRowWrap>
          <IssueCrisisPotential>2</IssueCrisisPotential>
          <ContainerFlexCol>
            <H3>Crisis potential</H3>
            <span>based on your informnation</span>
          </ContainerFlexCol>

          <SVGSquareButton>{<Next />}</SVGSquareButton>
        </ContainerFlexRowWrap>
      </Field>

      <BiggerField></BiggerField>

      <SliderDotsButton />

      <Aside>
        <Link to="/send" active={location.pathname === "/send"}>
          <SvgTextFooterButton
            svg={<Next />}
            text="Report to the crisis management"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
