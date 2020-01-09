import styled from "@emotion/styled";

const TextButton = styled.button`
  min-width: 100%;
  min-height: 28px;
  background-color: ${props => props.theme.colors.corporateDesignSecondary};
  color: ${props => props.theme.colors.background};
  font-weight: 400;
  border: none;
`;

export default TextButton;
