import React from "react";
import styled from "@emotion/styled";

const HeaderNavigation = styled.div`
  margin: 5px;
  background-color: #44ff66;
`;

function Header() {
 return (
   <HeaderNavigation>
    <button>Back</button>
    
    <button>Config</button>
  </HeaderNavigation>
 );
}

export default Header;
