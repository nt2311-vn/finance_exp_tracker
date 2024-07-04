const BudgetItem = ({ budget }) => {
  return (
    <div className="p-5 border rounded-lg">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl p-3 px-4 bg-slate-200 rounded-full">
            {budget?.icon}
          </h2>
          <div>
            <h2>{budget?.name}</h2>
            <h2>{budget?.totalItem} Item</h2>
          </div>
        </div>
        <h2 className="font-bold text-primary text-lg">${budget?.amount}</h2>
      </div>
      <div className="mt-5">
        <div>
          <h2 className="text-md text-slate-800">${budget?.totalSpend ?? 0}</h2>
        </div>
        <div className="w-full bg-slate-400 h-2 rounded-full">
          <div className="w-[20%] bg-primary h-2 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default BudgetItem;
