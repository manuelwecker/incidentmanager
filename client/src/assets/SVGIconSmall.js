import React from "react";

function SVGIconSmall(props) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      {props.children}
    </svg>
  );
}

export default SVGIconSmall;
