"use server";

import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { toast } from "sonner";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const { userId } = auth();

const createBudget = async (name, amount, emoji) => {
	if (!userId) {
		throw new Error("User not found");
	}

	const budget = await db
		.insert(Budgets)
		.values({ name: name, amount: amount, icon: emoji, createdBy: userId })
		.returning({ inserId: Budgets.id });

	if (!budget) {
		throw new Error("Cannot create budget");
	}

	return redirect("/dashboard/budget");
};

export default createBudget;
