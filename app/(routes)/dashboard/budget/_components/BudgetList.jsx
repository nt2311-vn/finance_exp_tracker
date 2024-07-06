import { Suspense } from "react";
import BudgetListClient from "./BudgetListClient";
import BudgetListLoading from "./BudgetListLoading";
import getBudgetList from "@/app/(actions)/getBudgetList";

const BudgetList = async () => {
  const budgets = await getBudgetList();

  return (
    <Suspense fallback={<BudgetListLoading />}>
      <BudgetListClient budgets={budgets} />
    </Suspense>
  );
};

export default BudgetList;
