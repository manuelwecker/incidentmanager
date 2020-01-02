import React from "react";
import styled from "@emotion/styled";

const placeholder = "/assets/images/greenchem.png";

const LogoCompany = styled.img`
  width: 100px;
`;

export default function LogoCompanyUrl({ src }) {
  const imageUrl = src ? src : placeholder;
  return <LogoCompany src={imageUrl} alt="Company Logo" />;
}
