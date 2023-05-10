import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Job = ({ companyName, location, description }) => {
    return (
        <>
            <div className="Spacer-2X" />
            <h3>{companyName}</h3>
            <p className="italic">{location}</p>
            <div className="Spacer-1X" />
            <p>{description}</p>
        </>
    );
};

export default function LandingWorkSection(props) {
    const [sectionOpen, setSectionOpen] = useState(false);

    const toggleSection = () => {
        setSectionOpen(!sectionOpen);
    };

    return (
        <>
            <h2 onClick={toggleSection} className="Buttonized">
                my work{" "}
                {sectionOpen ? (
                    <KeyboardDoubleArrowDownIcon fontSize="small" />
                ) : (
                    <KeyboardDoubleArrowRightIcon fontSize="small" />
                )}
            </h2>
            <div className={`content ${sectionOpen ? "open" : "closed"}`}>
                <>
                    {props.props.resumeJobs.map((job) => (
                        <Job
                            key={
                                job._key && typeof job._key === "string"
                                    ? job._key
                                    : ""
                            }
                            companyName={job.company}
                            location={job.location}
                            description={job.description}
                        />
                    ))}
                    <div className="Spacer-3X" />
                </>
            </div>
        </>
    );
}
