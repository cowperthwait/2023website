export default function LandingHeadshot() {
    return (
        <>
            <img
                className="Avatar-Image"
                src={`${process.env.PUBLIC_URL}/images/landing/JEC-Headshot.png`}
                alt="Jonathan Cowperthwait"
            />
        </>
    );
}
