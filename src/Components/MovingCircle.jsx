import Draggable from "react-draggable";
import PropTypes from "prop-types";

const MovingCircle = ({ position }) => (
  <Draggable
    axis="both"
    handle=".handle"
    defaultPosition={{ x: 0, y: 0 }}
    grid={[25, 25]}
    bounds="parent"
  >
    <div
      className="flair w-4 h-4 bg-amber-100 rounded-full z-[1000]"
      style={{ position: "absolute", left: position.x, top: position.y }}
    ></div>
  </Draggable>
);
MovingCircle.propTypes = {
  position: PropTypes.object,
};
export default MovingCircle;
