import React from "react";
import styled from "@emotion/styled";

const ImageWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  min-width: 10px;
  min-height: 100px;
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
`;

// function LogoImage() {
//   return (
//     <img
//       src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/box.svg"
//       alt="company logo"
//     />
//   );
// }

function Logo() {
  return <ImageWrapper>{/* <LogoImage /> */}</ImageWrapper>;
}

export default Logo;
