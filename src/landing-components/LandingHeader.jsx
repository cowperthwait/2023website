import LandingHeadshot from "./LandingHeadshot";
import LandingTitleName from "./LandingTitleName";

export default function LandingHeader(props) {
    return (
        <>
            {props.props.windowWidth <= 740 ? (
                <div>
                    <LandingHeadshot props={props} />
                    <div className="Spacer-1X" />
                    <LandingTitleName />
                </div>
            ) : (
                <div className="Page-Content-Container-2">
                    <LandingTitleName />
                    <div className="Avatar-Right">

                    <LandingHeadshot props={props} />
                    </div>
                </div>
            )}
        </>
    );
}
