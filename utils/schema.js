import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const Budgets = sqliteTable("budgets", {
	id: integer("id").primaryKey(),
	name: text("name").notNull(),
	amount: text("amount").notNull(),
	icon: text("icon"),
	createdBy: text("createdBy").notNull(),
});
