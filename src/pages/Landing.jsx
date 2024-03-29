import { useEffect } from "react";
import SEO from "../universal-components/SEO";
import LandingHeader from "../landing-components/LandingHeader";
import LandingSubheader from "../landing-components/LandingSubheader";
import LandingWorkSection from "../landing-components/LandingWorkSection";
import LandingCausesSection from "../landing-components/LandingCausesSection";
import LandingEducationSection from "../landing-components/LandingEducationSection";
import LandingCVSection from "../landing-components/LandingCVSection";
import LandingTalkSection from "../landing-components/LandingTalkSection";
import ReactGA from "react-ga4";

export default function Landing(props) {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/" });
    }, []);

    return (
        <>
            <SEO
                title="Jonathan E Cowperthwait | SF Bay Area Product Marketing Leader"
                description="Jonathan E Cowperthwait does positioning, messaging, and go-to-market strategy to maximize awareness and revenue for technology brands of all sizes."
                name="Jonathan E Cowperthwait"
                type="website"
            />
            <div className="Page-Content-Container-1">
                <LandingHeader props={props} />
                <div className="Spacer-2X" />
                <LandingSubheader props={props} />
                <div className="Spacer-4X" />
                <LandingWorkSection props={props} />
                <div className="Spacer-1X" />
                <LandingCausesSection props={props} />
                <div className="Spacer-1X" />
                <LandingEducationSection props={props} />
                <div className="Spacer-1X" />
                <LandingCVSection props={props} />
                <div className="Spacer-1X" />
                <LandingTalkSection props={props} />
            </div>
        </>
    );
}
