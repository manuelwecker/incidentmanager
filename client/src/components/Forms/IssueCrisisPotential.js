import styled from "@emotion/styled";

const IssueCrisisPotential = styled.div`
  width: 34px;
  height: 34px;
  margin: 4px;
  padding: 4px;
  color: #ffffff;
  background-color: ${props => props.theme.colors.warningHigh};
  border-radius: 4px;
  border: none;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default IssueCrisisPotential;
