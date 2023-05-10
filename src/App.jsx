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
        const fetchResumeJobs = async () => {
            const query = '*[_type == "resume"][0].jobs';
            console.log("fetching jobs");
            try {
                const result = await CMSClient.fetch(query);
                setResumeJobs(result);
                console.log("Jobs Fetched");
            } catch (error) {
                console.error("Error fetching resume jobs:", error);
            }
        };

        const fetchResumeCauses = async () => {
            const query = '*[_type == "resume"][0].causes';
            console.log("fetching causes");
            try {
                const result = await CMSClient.fetch(query);
                setResumeCauses(result);
                console.log("Causes fetched");
            } catch (error) {
                console.error("Error fetching resume causes:", error);
            }
        };

        const fetchResumeEducation = async () => {
            const query = '*[_type == "resume"][0].education';
            console.log("fetching education");
            try {
                const result = await CMSClient.fetch(query);
                setResumeEducation(result);
                console.log("Education fetched");
            } catch (error) {
                console.error("Error fetching resume education:", error);
            }
        };

        const fetchContactInfo = async () => {
            const query =
                '*[_type == "contact"][0] {phone, email, mastodonHandle, mastodonURL}';
            console.log("fetching education");
            try {
                const result = await CMSClient.fetch(query);
                setContactInformation(result);
                console.log("Contact information fetched");
            } catch (error) {
                console.error("Error fetching contact information:", error);
            }
        };

        const fetchResumePDF = async () => {
            const query =
                '*[_type == "resume"][0]{"resumeURL": downloadablePDF.asset->url}';
            console.log("fetching resume PDF link");
            try {
                const result = await CMSClient.fetch(query);
                setResumePDFLink(result.resumeURL);
                console.log("Resume PDF link fetched");
                console.log(result.resumeURL);
            } catch (error) {
                console.error("Error fetching resume PDF link:", error);
            }
        };

        Promise.all([
            fetchResumeJobs(),
            fetchResumeCauses(),
            fetchResumeEducation(),
            fetchContactInfo(),
            fetchResumePDF(),
        ])
            .then(() => {
                console.log("All fetches completed");
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="App">
            <HelmetProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route
                            index
                            element={
                                <Landing
                                    windowWidth={windowWidth}
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
    );
}
