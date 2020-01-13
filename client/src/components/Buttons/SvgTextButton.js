import React from "react";
import styled from "@emotion/styled";

const SvgButtonOnly = styled.button`
  width: 80px;
  height: 80px;
  margin: 4px;
  background-color: ${props => props.theme.colors.background};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

function SvgTextButton({ svg, text, ...other }) {
  return (
    <SvgButtonOnly {...other}>
      {svg}
      <span>{text}</span>
    </SvgButtonOnly>
  );
}

export default SvgTextButton;

// const a = styled(SvgTextButton)`
//   color: red;
// `;
// export default a;
