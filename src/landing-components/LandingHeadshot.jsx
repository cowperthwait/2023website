export default function LandingHeadshot(props) {
    return (
        <>
            <img
                className="Avatar-Image"
                src={props.props.props.aboutInfo.avatarImageURL}
                alt={props.props.props.aboutInfo.avatarImageAlt}
            />
        </>
    );
}
