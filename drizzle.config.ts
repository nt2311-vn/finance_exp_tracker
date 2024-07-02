import { defineConfig } from "drizzle-kit";
import { configDotenv } from "dotenv";

configDotenv({ path: ".env.local" });

export default defineConfig({
  schema: "./utils/schema.js",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_TURSO_DATABASE_URL,
    authToken: process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN,
  },
});
