import LandingHeadshot from "./LandingHeadshot";
import LandingTitleName from "./LandingTitleName";

export default function LandingHeader(props) {
    return (
        <div className="Page-Content-Container-2">
            <LandingTitleName />
            { (props.windowWidth >= 740) ? <LandingHeadshot /> : <></> }
        </div>
    );
}
