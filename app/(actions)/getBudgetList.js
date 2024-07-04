"use server";

import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { eq, getTableColumns, sql } from "drizzle-orm";
import { toast } from "sonner";
const { userId } = getAuth();

const getBudgetList = async () => {
	if (!userId) {
		toast.error("User not found");
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
		toast.error("Database error");
	}

	return budgets;
};

export default getBudgetList;
