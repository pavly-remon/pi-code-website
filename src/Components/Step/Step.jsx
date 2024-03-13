import "./Step.css";
import PropTypes from "prop-types";

const Step = ({stepData}) => {
    const width = "mobile:w-4 tablet:w-5 laptop:w-6"
    const height = "mobile:h-4 tablet:h-5 laptop:h-6"
    return (
        <div className="step">
            <span className={"relative flex my-10 " + `${width} ${height}`}>
              <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className={"relative inline-flex rounded-full bg-sky-500 " + `${width} ${height}`}></span>
            </span>
            <div className="mx-3 rounded-lg hover:shadow-md hover:shadow-sky-300 p-3">
                <p className="text-nowrap font-thin mobile:text-base">{stepData.stepDate}</p>
                <p className="text-sky-400 font-medium mobile:text-xl">{stepData.stepTitle}</p>
                <p className="text-sky-400 font-light mobile:text-xl">{stepData.stepPosition}</p>
            </div>
        </div>
    );
}

Step.propTypes = {
    stepData: PropTypes.object
}

export default Step;