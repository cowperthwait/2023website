import { createClient } from "@sanity/client";

const CMSClient = createClient({
    // projectId: `${process.env.SANITY_PROJECT_ID}`,
    // dataset: `${process.env.SANITY_DATASET}`,
    projectId: "ltuql5uj",
    dataset: "production",
    useCdn: true,
    // token: `${process.env.SANITY_TOKEN}`,
});

export default CMSClient;
