import React from "react";
import { useSelector } from "react-redux";

function Display() {
  const currentDisplay = useSelector((state) => state.display);
  return (
    <div id="display" className="bg-slate-300 w-[150px] text-center p-1">
      {currentDisplay}
    </div>
  );
}

export default Display;
