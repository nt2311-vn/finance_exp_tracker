"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-6 flex justify-between items-center border shadow-lg">
      <Image src={"/logo.svg"} alt="logo" width={120} height={90} />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={"/sign-in"}>
          <Button className="hover:bg-slate-500">Get started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
