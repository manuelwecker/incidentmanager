import styled from "@emotion/styled";

export const DeleteButton = styled.div`
  height: 18px;
  width: 18px;
  border: 2px solid ${props => props.theme.colors.corporateDesignSecondary};
  border-radius: 2px;
  :hover {
    cursor: pointer;
  }

  a {
    ::-moz-focus-inner {
      border: 0;
    }

    :before,
    :after {
      position: absolute;
      content: " ";
      height: 14px;
      width: 2px;
      margin-left: 6px;
      /* margin-top: 1px; */
      background-color: ${props => props.theme.colors.corporateDesignSecondary};
    }
    :before {
      transform: rotate(45deg);
    }
    :after {
      transform: rotate(-45deg);
    }
  }
`;
