import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import NameTitle from "@/components/ui/name-title";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  const buttonClass =
    "small-medium btn-secondary w-full min-h-[41px] rounded-lg px-4 py-3 shadow-none ";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          width={36}
          height={36}
          src="/icons/hamburger.svg"
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="background-light900_dark200">
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/home" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="Logo"
          />
          <NameTitle isMobile />
        </Link>
        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks isMobile />
            </section>
          </SheetClose>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className={buttonClass}>
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button
                  className={`${buttonClass} light-border-2 btn-tertiary text-dark400_light900 `}
                >
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
