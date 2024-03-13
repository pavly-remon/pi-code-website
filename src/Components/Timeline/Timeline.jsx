import Step from "@/Components/Step/Step.jsx";
import WorkExperience from "@/assets/Work-Experience.json";

const Timeline = () => {
    const workExperience = WorkExperience;
    return (
        <div className="timeline">
            <div className="line border-sky-400 border-2 w-0 h-full">
                <div className="py-2 relative">
                    {workExperience.map((item, index) => <Step stepData={item} key={index}/>)}
                </div>
            </div>
        </div>
    );
}
export default Timeline;
