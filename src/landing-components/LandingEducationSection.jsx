import { useState } from "react";

export default function LandingEducationSection() {
    const [sectionOpen, setSectionOpen] = useState(false);

    const toggleSection = () => {
        sectionOpen ? setSectionOpen(false) : setSectionOpen(true);
    };

    return (
        <>
            <h2 onClick={toggleSection} className="Buttonized">
                education »
            </h2>
            <div className={`content ${sectionOpen ? "open" : "closed"}`}>
                {
                    <>
                        <div className="Spacer-2X" />
                        <h3>The University of Chicago</h3>
                        <p className="italic">Chicago, IL</p>
                        <div className="Spacer-1X" />

                        <p>AB, Political Science</p>
                        <div className="Spacer-3X" />
                    </>
                }
            </div>
        </>
    );
}
