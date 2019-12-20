import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  width: 100%;
  height: 30px;
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        Settings, ThemeSwitch, Privacy, Legal notice
      </FooterContainer>
    </>
  );
}

export default Footer;
