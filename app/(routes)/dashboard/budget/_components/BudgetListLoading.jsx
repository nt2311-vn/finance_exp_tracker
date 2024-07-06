const BudgetListLoading = () => {
  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className="w-full bg-slate-200 rounded-lg h-[180px] animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BudgetListLoading;
