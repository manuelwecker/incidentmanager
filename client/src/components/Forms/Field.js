import styled from "@emotion/styled";

const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 34px;
  max-height: auto;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  color: ${props => props.theme.colors.fontSofter};
  border-radius: ${props => props.theme.company.borderRadius};
  font-size: 14px;
  margin: 8px 0 0 0;
`;

export default Field;
