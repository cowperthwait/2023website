import "./App.css";
import "./assets/fonts/Nov-Medium.ttf";
import "./assets/fonts/Nov-MediumItalic.ttf";
import "./assets/fonts/Nov-Regular.ttf";
import "./assets/fonts/Nov-SemiLightItalic.ttf";
import "./assets/fonts/TitleBroadOutlineLarge.ttf";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Landing from "./pages/Landing";
import ReactGA from "react-ga";
import { HelmetProvider } from "react-helmet-async";
import CMSClient from "./universal-components/CMS-API";

const GAKey = process.env.REACT_APP_GA_TRACKINGID;

ReactGA.initialize(GAKey);

export default function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [aboutInfo, setAboutInfo] = useState({});
    const [resumeJobs, setResumeJobs] = useState([]);
    const [resumeCauses, setResumeCauses] = useState([]);
    const [resumeEducation, setResumeEducation] = useState([]);
    const [contactInformation, setContactInformation] = useState({});
    const [resumePDFLink, setResumePDFLink] = useState("");

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const query = `
            {
                "aboutInfo": *[_type == "about"][0]{about, tagline, "avatarImageURL": avatarImage.asset->url, "avatarImageAlt": avatarImage.altText},
                "resumeJobs": *[_type == "resume"][0].jobs,
                "resumeCauses": *[_type == "resume"][0].causes,
                "resumeEducation": *[_type == "resume"][0].education,
                "contactInfo": *[_type == "contact"][0] {phone, email, mastodonHandle, mastodonURL},
                "resumePDF": *[_type == "resume"][0]{"resumeURL": downloadablePDF.asset->url}
            }
        `;
            try {
                const result = await CMSClient.fetch(query);
                setAboutInfo(result.aboutInfo);
                setResumeJobs(result.resumeJobs);
                setResumeCauses(result.resumeCauses);
                setResumeEducation(result.resumeEducation);
                setContactInformation(result.contactInfo);
                setResumePDFLink(result.resumePDF.resumeURL);
                setDataLoaded(true);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="App-Background" />
            <div className={`App fade-in ${dataLoaded ? "active" : ""}`}>
                <HelmetProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route
                                index
                                element={
                                    <Landing
                                        windowWidth={windowWidth}
                                        aboutInfo={aboutInfo}
                                        resumeJobs={resumeJobs}
                                        resumeCauses={resumeCauses}
                                        resumeEducation={resumeEducation}
                                        contactInformation={contactInformation}
                                        resumePDFLink={resumePDFLink}
                                    />
                                }
                            />
                            <Route
                                path="*"
                                element={
                                    <Landing
                                        windowWidth={windowWidth}
                                        aboutInfo={aboutInfo}
                                        resumeJobs={resumeJobs}
                                        resumeCauses={resumeCauses}
                                        resumeEducation={resumeEducation}
                                        contactInformation={contactInformation}
                                        resumePDFLink={resumePDFLink}
                                    />
                                }
                            />
                        </Route>
                    </Routes>
                </HelmetProvider>
            </div>
        </>
    );
}
