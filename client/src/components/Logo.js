import React from "react";
import styled from "@emotion/styled";
import LogoCompanySvg from "./LogoCompanySvg";

const SvgWrapper = styled.div`
  width: 100px;
  max-height: 32px;
  margin: 4px 0 0 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8px;
  color: #ffffff;
`;

function Logo() {
  return (
    <Container>
      Your IssueReporter at
      <SvgWrapper>
        <LogoCompanySvg />
      </SvgWrapper>
    </Container>
  );
}

export default Logo;
