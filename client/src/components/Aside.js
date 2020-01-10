import styled from "@emotion/styled";

const Aside = styled.div`
  background-position: absolute;
  position: absolute;
  left: 0px;
  bottom: +30px;
  height: 52px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  padding: 4px;
`;

export default Aside;
