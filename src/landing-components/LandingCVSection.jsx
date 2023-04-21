import { useState } from "react";

export default function LandingCVSection() {
    const [sectionOpen, setSectionOpen] = useState(false);

    const toggleSection = () => {
        sectionOpen ? setSectionOpen(false) : setSectionOpen(true);
    };

    return (
        <>
            <h2 onClick={toggleSection} className="Buttonized">
                CV »
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
