import React from "react";
import styled from "@emotion/styled";
import LogoCompanySvg from "./LogoCompanySvg";

const ImageWrapper = styled.div`
  background-color: ${props => props.theme.colors.corporatedesignprimary};
  max-height: 32px;
  width: 100%;
  text-align: center;
  align-content: center;
  /* object-fit: cover; */
`;

const SvgWrapper = styled.div`
  width: 80px;
`;

function LogoImage() {
  return (
    <>
      <SvgWrapper>
        <LogoCompanySvg />
      </SvgWrapper>
    </>
  );
}

function Logo() {
  return (
    <ImageWrapper>
      <LogoImage />
    </ImageWrapper>
  );
}

export default Logo;
