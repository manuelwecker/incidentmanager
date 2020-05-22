import styled from "@emotion/styled";

export const MemoInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 5px;
  border: solid 1px ${props => props.theme.colors.font};
  resize: none;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  :hover {
    border: solid 1px ${props => props.theme.colors.corporateDesignSecondary};
  }

  :focus {
    box-shadow: 0 0 5px ${props => props.theme.colors.corporateDesignSecondary};
    border: solid 1px ${props => props.theme.colors.corporateDesignSecondary};
  }
`;

export const MemoInputEmail = styled(MemoInput)`
  min-height: 25px;
`;
