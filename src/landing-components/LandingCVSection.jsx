import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function LandingCVSection() {
    const [sectionOpen, setSectionOpen] = useState(false);

    const toggleSection = () => {
        sectionOpen ? setSectionOpen(false) : setSectionOpen(true);
    };

    return (
        <>
            <h2 onClick={toggleSection} className="Buttonized">
                CV{" "}
                {sectionOpen ? (
                    <KeyboardDoubleArrowDownIcon fontSize="small" />
                ) : (
                    <KeyboardDoubleArrowRightIcon fontSize="small" />
                )}
            </h2>
            <div className={`content ${sectionOpen ? "open" : "closed"}`}>
                {
                    <>
                        <div className="Spacer-2X" />
                        <h3>Figure out how to show this ask Jon</h3>
                        <div className="Spacer-3X" />
                    </>
                }
            </div>
        </>
    );
}
