"use client";
import BudgetItem from "./BudgetItem";
import CreateBudget from "./CreateBudget";
import getBudgetList from "@/app/(actions)/getBudgetList";
import { useEffect, useState } from "react";

const BudgetList = async () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const budgets = await getBudgetList();
        setBudgets(budgets);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBudgets();
  });

  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CreateBudget />
        {budgets.length > 0
          ? budgets.map((budget, index) => (
              <BudgetItem budget={budget} key={index} />
            ))
          : [1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="w-full bg-slate-200 rounded-lg h-[180px] animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default BudgetList;
