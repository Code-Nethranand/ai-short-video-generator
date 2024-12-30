import { defineConfig } from "drizzle-kit";

export default defineConfig({  
    schema: "./configs/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://ai-short-video-generator_owner:aNJ8OHmx7wvX@ep-icy-field-a1m400ym.ap-southeast-1.aws.neon.tech/ai-short-video-generator?sslmode=require"
    }
});
