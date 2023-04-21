import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function LandingCVSection() {
    return (
        <>
            <a
                href={`${process.env.PUBLIC_URL}/downloadablefiles/Jonathan E Cowperthwait spring 2023 CV.pdf`}
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
