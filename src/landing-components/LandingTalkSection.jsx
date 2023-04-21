import { useState } from "react";

export default function LandingTalkSection() {
    const [sectionOpen, setSectionOpen] = useState(false);

    const toggleSection = () => {
        sectionOpen ? setSectionOpen(false) : setSectionOpen(true);
    };

    return (
        <>
            <h2 onClick={toggleSection} className="Buttonized">
                let’s talk »
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
