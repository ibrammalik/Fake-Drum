import React from "react";
import PadGroup from "./PadGroup";
import Display from "./Display";
import BankSwitch from "./BankSwitch";

function DrumMachine() {
  return (
    <div id="drum-machine" className="flex items-center justify-evenly bg-slate-200 gap-4 p-2">
      <PadGroup></PadGroup>
      <div className="flex flex-col justify-center items-center gap-2">
        <Display></Display>
        <BankSwitch></BankSwitch>
      </div>
    </div>
  );
}

export default DrumMachine;
