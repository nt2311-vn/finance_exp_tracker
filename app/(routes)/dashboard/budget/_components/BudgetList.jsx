import BudgetItem from "./BudgetItem";
import CreateBudget from "./CreateBudget";
import getBudgetList from "@/app/(actions)/getBudgetList";

const BudgetList = async () => {
  const budgets = await getBudgetList();
  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CreateBudget />
        {budgets.map((budget, index) => (
          <BudgetItem budget={budget} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BudgetList;
