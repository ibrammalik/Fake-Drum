import React from "react";
import PadGroup from "./PadGroup";
import Display from "./Display";

function DrumMachine() {
  return (
    <div id="drum-machine" className="flex items-center justify-evenly bg-slate-200 gap-4 p-2">
      <PadGroup></PadGroup>
      <Display></Display>
    </div>
  );
}

export default DrumMachine;
