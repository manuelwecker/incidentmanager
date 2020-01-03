import React from "react";

function SVGIcon(props) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50px"
      height="50px"
      viewBox="0 0 64 64"
      {...props}
    >
      {props.children}
    </svg>
  );
}

export default SVGIcon;
