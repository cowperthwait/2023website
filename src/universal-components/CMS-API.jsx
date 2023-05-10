import { createClient } from "@sanity/client";

const CMSClient = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    useCdn: true,
});

export default CMSClient;
