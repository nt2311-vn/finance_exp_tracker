/** @type {import("drizzle-kit").Config} */

export default {
	schema: "./schema.ts",
	dialect: "sqlite",
	dbCredentials: {
		url: process.env.TURSO_DATABASE_URL,
	},
};
