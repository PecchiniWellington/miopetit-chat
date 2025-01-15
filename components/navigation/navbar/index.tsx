import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";
import NameTitle from "@/components/ui/name-title";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none sm:px-12 light-border border-b">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="MioPetit Logo"
        />
        <NameTitle />
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
