export default function LandingSubheader(props) {
    return (
        <div className="Subheader-Container">
            <h2 className="italic">{props.props.aboutInfo.tagline}</h2>
            <div className="Spacer-1X" />
            <p className="large">{props.props.aboutInfo.about}</p>
        </div>
    );
}
