import $ from "jquery";

const Drum = (props) => {
  //   const { test } = props;

  return (
    <div id="drum-machine">
      <div id="display">testing</div>
      <div id="drumpad-container">
        <div className="drum-pad">
          Q<audio src=""></audio>
        </div>
        <div className="drum-pad">
          W<audio src=""></audio>
        </div>
        <div className="drum-pad">
          E<audio src=""></audio>
        </div>
        <div className="drum-pad">
          A<audio src=""></audio>
        </div>
        <div className="drum-pad">
          S<audio src=""></audio>
        </div>
        <div className="drum-pad">
          D<audio src=""></audio>
        </div>
        <div className="drum-pad">
          Z<audio src=""></audio>
        </div>
        <div className="drum-pad">
          X<audio src=""></audio>
        </div>
        <div className="drum-pad">
          C<audio src=""></audio>
        </div>
      </div>
    </div>
  );
};

export default Drum;
