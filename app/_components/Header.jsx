import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <div className="p-6 flex justify-between items-center border shadow-lg">
      <Image src={"/logo.svg"} alt="logo" width={120} height={90} />
      <Button className="hover:bg-slate-500">Get started</Button>
    </div>
  );
};

export default Header;
