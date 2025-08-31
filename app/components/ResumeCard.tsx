import { Link } from "react-router";
import ScoreCircle from "~/components/scoreCircle";

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
    return (
        <Link
            to={`/resume/${id}`}
            className="resume-card animate-in fade-in duration-1000 border rounded-2xl shadow-lg p-4 bg-white"
        >
            <div className="resume-card-header flex flex-col gap-4">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                        <h2 className="!text-black font-bold break-words">{companyName}</h2>
                        <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
                    </div>
                    <div className="flex-shrink-0">
                        <ScoreCircle score={feedback.overallScore} />
                    </div>
                </div>

                <div className="gradient-border animate-in fade-in duration-1000 rounded-xl overflow-hidden">
                    <div className="flex justify-center items-center p-2 bg-gray-50">
                        <img
                            src={imagePath}
                            alt="resume"
                            className="h-[350px] w-auto object-contain rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ResumeCard;
