import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function LandingCausesSection() {
    const [sectionOpen, setSectionOpen] = useState(false);

    const toggleSection = () => {
        sectionOpen ? setSectionOpen(false) : setSectionOpen(true);
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
                {
                    <>
                        <div className="Spacer-2X" />
                        <h3>The Julia Burke Foundation</h3>
                        <p className="italic">Kona, HI</p>
                        <div className="Spacer-1X" />

                        <p>Member, Board of Directors</p>

                        <div className="Spacer-2X" />

                        <h3>San Francisco Civil Grand Jury</h3>
                        <p className="italic">San Francisco, CA</p>
                        <div className="Spacer-1X" />
                        <p>Grand Juror and Corresponding Secretary</p>
                        <div className="Spacer-3X" />
                    </>
                }
            </div>
        </>
    );
}
