import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import MastodonIcon from "../assets/customicons/MastodonIcon";

export default function LandingTalkSection(props) {
    const [sectionOpen, setSectionOpen] = useState(false);

    const toggleSection = () => {
        setSectionOpen(!sectionOpen);
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
                <>
                    <div className="Spacer-2X" />
                    <div className="Contact-Container">
                        <PhoneIcon className="Contact-Icon" />
                        <p className="Buttonized">
                            <a
                                className="Buttonized"
                                href={`tel:${props.props.contactInformation.phone}`}
                            >
                                {props.props.contactInformation.phone}
                            </a>
                        </p>
                    </div>

                    <div className="Spacer-1X" />

                    <div className="Contact-Container">
                        <EmailIcon className="Contact-Icon" />
                        <p className="Buttonized">
                            <a
                                className="Buttonized"
                                href={`mailto:${props.props.contactInformation.email}`}
                            >
                                {props.props.contactInformation.email}
                            </a>
                        </p>
                    </div>

                    <div className="Spacer-1X" />

                    <div className="Contact-Container">
                        <MastodonIcon />
                        <p className="Buttonized">
                            <a
                                className="Buttonized"
                                href={
                                    props.props.contactInformation.mastodonURL
                                }
                                target="blank"
                            >
                                {props.props.contactInformation.mastodonHandle}
                            </a>
                        </p>
                    </div>

                    <div className="Spacer-3X" />
                </>
            </div>
        </>
    );
}
