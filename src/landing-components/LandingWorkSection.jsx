import { useState } from "react";

export default function LandingWorkSection() {
    const [sectionOpen, setSectionOpen] = useState(false);

    const toggleSection = () => {
        sectionOpen ? setSectionOpen(false) : setSectionOpen(true);
    };

    return (
        <>
            <h2 onClick={toggleSection} className="Buttonized">
                my work »
            </h2>
            <div className={`content ${sectionOpen ? "open" : "closed"}`}>
                {
                    <>
                        <div className="Spacer-2X" />
                        <h3>Cube Dev</h3>
                        <p className="italic">San Francisco, CA</p>
                        <div className="Spacer-1X" />
                        <p>
                            Oversaw B2B marketing for a cloud data tool from the
                            company’s commercial launch.
                        </p>
                        <div className="Spacer-2X" />
                        <h3>Product marketing engagements</h3>
                        <p className="italic">San Francisco, CA</p>
                        <div className="Spacer-1X" />
                        <p>
                            Collaborated with a leading cloud logistics vendor
                            to create and implement product marketing and
                            channel strategy during the company’s pivot to a new
                            market segment.
                        </p>
                        <div className="Spacer-2X" />
                        <h3>npm (acquired by GitHub)</h3>
                        <p className="italic">Oakland, CA</p>
                        <div className="Spacer-1X" />
                        <p>
                            Led B2B and developer marketing strategy for the
                            world’s largest registry of open-source software.
                        </p>
                        <div className="Spacer-2X" />
                        <h3>Leeo</h3>
                        <p className="italic">Palo Alto, CA</p>
                        <div className="Spacer-1X" />
                        <p>
                            Launched an IoT hardware product with a $2 million
                            multi-channel advertising program.
                        </p>
                        <div className="Spacer-2X" />
                        <h3>awe.sm (acquired by Unified Social)</h3>
                        <p className="italic">San Francisco, CA</p>
                        <div className="Spacer-1X" />
                        <p>
                            Led product positioning, messaging, and go-to-market
                            efforts for an API platform and SaaS offerings.
                        </p>
                        <div className="Spacer-2X" />
                        <h3>Spiralgroup Marketing and Public Relations</h3>
                        <p className="italic">San Francisco, CA</p>
                        <div className="Spacer-1X" />
                        <p>
                            Envisioned, designed, and executed messaging,
                            positioning, and content marketing for technology
                            and consumer brands.
                        </p>
                    </>
                }
            </div>
        </>
    );
}
