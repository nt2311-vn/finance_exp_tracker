"use client";

import BudgetItem from "./BudgetItem";
import CreateBudget from "./CreateBudget";

const BudgetListClient = ({ budgets }) => {
  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CreateBudget />
        {budgets.length > 0 ? (
          budgets.map((budget, index) => (
            <BudgetItem budget={budget} key={index} />
          ))
        ) : (
          <p>No budgets found</p>
        )}
      </div>
    </div>
  );
};

export default BudgetListClient;
