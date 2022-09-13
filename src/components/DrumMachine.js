import React from "react";
import PadGroup from "./PadGroup";
import Display from "./Display";
import { useDispatch } from "react-redux";

function DrumMachine() {
  const dispatch = useDispatch();
  const switchBank = () => {
    dispatch({
      type: "switch",
    });
  };

  return (
    <div id="drum-machine" className="flex items-center justify-evenly bg-slate-200 gap-4 p-2">
      <PadGroup></PadGroup>
      <Display></Display>
      <button onClick={switchBank}>switch</button>
    </div>
  );
}

export default DrumMachine;
