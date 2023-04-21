import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function LandingTalkSection() {
    const [sectionOpen, setSectionOpen] = useState(false);

    const toggleSection = () => {
        sectionOpen ? setSectionOpen(false) : setSectionOpen(true);
    };

    return (
        <>
            <h2 onClick={toggleSection} className="Buttonized">
                let’s talk{" "}
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

                        <p>Ask Jon</p>

                        <div className="Spacer-3X" />
                    </>
                }
            </div>
        </>
    );
}
