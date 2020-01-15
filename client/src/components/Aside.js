import styled from "@emotion/styled";

const Aside = styled.div`
  background-position: absolute;
  position: absolute;
  left: 0px;
  bottom: +20px;
  height: 52px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  padding: 4px;
  @media only screen and (min-width: ${props =>
      props.theme.company.deviceWidth}) {
    max-width: ${props => props.theme.company.deviceWidth};
  }
`;

export default Aside;
