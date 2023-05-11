import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Education = ({ institution, location, description }) => {
    return (
        <>
            <div className="Spacer-2X" />
            <h3>{institution}</h3>
            <p className="italic">{location}</p>
            <div className="Spacer-1X" />
            <p>{description}</p>
        </>
    );
};

export default function LandingEducationSection(props) {
    const [sectionOpen, setSectionOpen] = useState(false);

    const toggleSection = () => {
        setSectionOpen(!sectionOpen);
    };

    return (
        <>
            <h2>
                <span onClick={toggleSection} className="Buttonized">
                    education{" "}
                    {sectionOpen ? (
                        <KeyboardDoubleArrowDownIcon fontSize="small" />
                    ) : (
                        <KeyboardDoubleArrowRightIcon fontSize="small" />
                    )}
                </span>
            </h2>
            <div className={`content ${sectionOpen ? "open" : "closed"}`}>
                <>
                    {props.props.resumeEducation.map((education) => (
                        <Education
                            key={education._key}
                            institution={education.institution}
                            location={education.location}
                            description={education.description}
                        />
                    ))}
                    <div className="Spacer-3X" />
                </>
            </div>
        </>
    );
}
