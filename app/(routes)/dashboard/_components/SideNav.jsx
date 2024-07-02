import Image from "next/image";

const SideNav = () => {
  return (
    <div className="h-screen">
      <Image src="/logo.svg" alt="logo" width={160} height={100} />
    </div>
  );
};

export default SideNav;
