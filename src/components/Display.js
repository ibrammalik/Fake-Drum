import React from "react";
import { useSelector } from "react-redux";

function Display() {
  const currentDisplay = useSelector((state) => state.display);
  return <div id="display">{currentDisplay}</div>;
}

export default Display;
