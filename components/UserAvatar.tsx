import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import { Avatar, AvatarFallback } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  name: string;
  imageUrl?: string | null;
  className?: string;
  isActive: boolean;
}

const UserAvatar = ({
  id,
  name,
  imageUrl,
  className = "h-9 w-9",
  isActive,
}: Props) => {
  const initials = name
    .split(" ")
    .map((word: string) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Avatar className={className}>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={name}
          className="object-cover invert-colors lg:hidden"
          width={20}
          height={20}
          quality={100}
        />
      ) : (
        <AvatarFallback
          className={`${
            isActive ? "dark-gradient" : "primary-gradient"
          } font-space-grotesk font-bold tracking-wider text-white`}
        >
          {initials}
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
