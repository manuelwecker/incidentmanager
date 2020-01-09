import styled from "@emotion/styled";
import Button from "./Button";

const TextButton = styled(Button)`
  min-width: 100%;
  min-height: 28px;
  background-color: ${props => props.theme.colors.corporateDesignSecondary};
  color: ${props => props.theme.colors.background};
  font-weight: 400;
  border: none;
`;

export default TextButton;
