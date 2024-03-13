import PropTypes from "prop-types";

const MovingCircle = ({ position }) => (
  <div
    className="flair w-4 h-4 bg-amber-100 rounded-full z-[1000]"
    style={{ position: "absolute", left: position.x, top: position.y }}
  ></div>
);
MovingCircle.propTypes = {
  position: PropTypes.object,
};
export default MovingCircle;
