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
import CMSClient from "./CMS-API";

const GAKey = process.env.REACT_APP_GA_TRACKINGID;

ReactGA.initialize(GAKey);

export default function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [resumeJobs, setResumeJobs] = useState([]);

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
            try {
                const query = '*[_type == "resume"][0].jobs'; // Query to fetch all jobs
                const result = await CMSClient.fetch(query);
                setResumeJobs(result);
            } catch (error) {
                console.error("Error fetching resume jobs:", error);
            }
        };

        fetchResumeJobs();
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
                                />
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <Landing
                                    windowWidth={windowWidth}
                                    resumeJobs={resumeJobs}
                                />
                            }
                        />
                    </Route>
                </Routes>
            </HelmetProvider>
        </div>
    );
}
