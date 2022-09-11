import React from "react";
import { useDispatch } from "react-redux";

function DrumPad(props) {
  const { keyCode, keyTrigger, padId, padUrl } = props;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.target.firstChild.play();
    dispatch({
      type: "click",
      payload: e.target.attributes.pad_id.value,
    });
  };

  document.addEventListener("keydown", (event) => {
    const drumPad = document.getElementById(event.code);
    if (drumPad) drumPad.click();
  });

  return (
    <div className="drum-pad" id={keyCode} onClick={handleClick} pad_id={padId}>
      <audio src={padUrl} className="clip" id={keyTrigger}></audio>
      {keyTrigger}
    </div>
  );
}

export default DrumPad;