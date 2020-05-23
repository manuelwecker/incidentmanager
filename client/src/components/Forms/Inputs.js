import styled from "@emotion/styled";

export const MemoInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 5px;
  border: solid 1px ${props => props.theme.colors.font};
  resize: none;
  -webkit-transition: all 0.3s ease-in-out;
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

export const TaskInput = styled.input`
  align-self: flex-start;
  min-height: 30px;
  border: solid 1px ${props => props.theme.colors.font};
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  :hover {
    border: solid 1px ${props => props.theme.colors.corporateDesignSecondary};
  }

  :focus {
    box-shadow: 0 0 5px ${props => props.theme.colors.corporateDesignSecondary};
    border: solid 1px ${props => props.theme.colors.corporateDesignSecondary};
  }
`;

export const TaskInputNumber = styled(TaskInput)`
  width: 90px;
  margin-left: 5px;
`;
