import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function LandingCVSection(props) {
    return (
        <>
            <a
                href={props.props.resumePDFLink}
                download="Jonathan E Cowperthwait spring 2023 CV.pdf"
                className="Buttonized"
            >
                <h2 className="Buttonized">
                    CV <KeyboardDoubleArrowRightIcon fontSize="small" />
                </h2>
            </a>
        </>
    );
}
