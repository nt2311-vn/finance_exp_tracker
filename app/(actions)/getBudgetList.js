"use server";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { eq, getTableColumns, sql } from "drizzle-orm";
import { toast } from "sonner";

const getBudgetList = async () => {
	const { userId } = auth();

	if (!userId) {
		throw new Error("User not found");
	}
	const budgets = await db
		.select({
			...getTableColumns(Budgets),
			totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
			totalItem: sql`count(${Expenses.id})`.mapWith(Number),
		})
		.from(Budgets)
		.leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
		.where(eq(Budgets.createdBy, userId))
		.groupBy(Budgets.id);

	if (!budgets) {
		throw new Error("Database error");
	}

	return budgets;
};

export default getBudgetList;
