import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema.js";

const client = createClient({
	url: process.env.NEXT_PUBLIC_TURSO_DATABASE_URL,
	authToken: process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN,
});

const db = drizzle(client, { schema });

const result = await db.select().from(users).all();
