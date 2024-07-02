import SideNav from "./_components/SideNav";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block bg-red-100">
        <SideNav />
      </div>
      <div className="md:ml-64 bg-green-200">{children}</div>
    </div>
  );
};

export default DashboardLayout;
