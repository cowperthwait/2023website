import LandingHeader from "../landing-components/LandingHeader";
import LandingSubheader from "../landing-components/LandingSubheader";
import LandingWorkSection from "../landing-components/LandingWorkSection";

export default function Landing(props) {
    return (
        <div className="Page-Content-Container-1">
            <LandingHeader windowWidth={props.windowWidth} />
            <div className="Spacer-2X" />
            <LandingSubheader />
            <div className="Spacer-4X" />
            <LandingWorkSection />
        </div>
    );
}
