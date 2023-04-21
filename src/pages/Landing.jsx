import LandingHeader from "../landing-components/LandingHeader";
import LandingSubheader from "../landing-components/LandingSubheader";
import LandingHeadshot from "../landing-components/LandingHeadshot";
import LandingWorkSection from "../landing-components/LandingWorkSection";
import LandingCausesSection from "../landing-components/LandingCausesSection";
import LandingEducationSection from "../landing-components/LandingEducationSection";
import LandingCVSection from "../landing-components/LandingCVSection";
import LandingTalkSection from "../landing-components/LandingTalkSection";

export default function Landing(props) {
    return (
        <div className="Page-Content-Container-1">
            {props.windowWidth <= 740 ? (
                <div>
                    <LandingHeadshot />
                    <div className="Spacer-1X" />
                </div>
            ) : (
                <></>
            )}
            <LandingHeader windowWidth={props.windowWidth} />
            <div className="Spacer-2X" />
            <LandingSubheader />
            <div className="Spacer-4X" />
            <LandingWorkSection />
            <div className="Spacer-1X" />
            <LandingCausesSection />
            <div className="Spacer-1X" />
            <LandingEducationSection />
            <div className="Spacer-1X" />
            <LandingCVSection />
            <div className="Spacer-1X" />
            <LandingTalkSection />
        </div>
    );
}
