import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function LandingCVSection(props) {
    return (
        <>
            <h2>
                <a
                    href={props.props.resumePDFLink}
                    download="Jonathan E Cowperthwait spring 2023 CV.pdf"
                    className="Buttonized"
                >
                    <span className="Buttonized">
                        CV <KeyboardDoubleArrowRightIcon fontSize="small" />
                    </span>
                </a>
            </h2>
        </>
    );
}
