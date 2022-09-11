import React from "react";
import { useSelector } from "react-redux";
import DrumPad from "./DrumPad";

function PadGroup() {
  const padBank = useSelector((state) => state.bankOne);
  let padGroup;
  padGroup = padBank.map((pad) => <DrumPad keyTrigger={pad.keyTrigger} key={pad.keyTrigger} padId={pad.id} padUrl={pad.url} keyCode={pad.code}></DrumPad>);
  return <div>{padGroup}</div>;
}

export default PadGroup;
