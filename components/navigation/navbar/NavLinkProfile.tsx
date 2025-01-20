"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/UserAvatar";
import ROUTES from "@/constants/routes";
import { Session } from "next-auth";

const NavLinkProfile = ({
  isMobileNav = false,
  userId,
  session,
}: {
  isMobileNav?: boolean;
  userId?: string;
  session: Session | null;
}) => {
  const pathname = usePathname();
  const isActive = pathname.includes("profile") || pathname === "profile";

  return (
    <>
      {session ? (
        session?.user?.id && (
          <Link
            href={ROUTES.PROFILE(session.user.id)}
            key={session.user.name!}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex items-center justify-start gap-4 bg-transparent p-4"
            )}
          >
            <UserAvatar
              isActive={isActive}
              id={session.user.id}
              name={session.user.name!}
              imageUrl={session.user?.image}
            />

            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {session.user.name!}
            </p>
          </Link>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default NavLinkProfile;
