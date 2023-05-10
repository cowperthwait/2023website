import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Cause = ({ orgName, location, description }) => {
    return (
        <>
            <div className="Spacer-2X" />
            <h3>{orgName}</h3>
            <p className="italic">{location}</p>
            <div className="Spacer-1X" />
            <p>{description}</p>
        </>
    );
};

export default function LandingCausesSection(props) {
    const [sectionOpen, setSectionOpen] = useState(false);

    const toggleSection = () => {
        setSectionOpen(!sectionOpen);
    };

    return (
        <>
            <h2 onClick={toggleSection} className="Buttonized">
                causes{" "}
                {sectionOpen ? (
                    <KeyboardDoubleArrowDownIcon fontSize="small" />
                ) : (
                    <KeyboardDoubleArrowRightIcon fontSize="small" />
                )}
            </h2>
            <div className={`content ${sectionOpen ? "open" : "closed"}`}>
                <>
                    {props.props.resumeCauses.map((cause) => (
                        <Cause
                            key={
                                cause._key && typeof cause._key === "string"
                                    ? cause._key
                                    : ""
                            }
                            orgName={cause.organization}
                            location={cause.location}
                            description={cause.description}
                        />
                    ))}
                    <div className="Spacer-3X" />
                </>
            </div>
        </>
    );
}
