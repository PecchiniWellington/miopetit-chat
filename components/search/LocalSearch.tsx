"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";
      if (searchQuery) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery.toLowerCase(),
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (pathName === route) {
          newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });
        }
      }
      router.push(newUrl, { scroll: false });
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, route, searchParams]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <Image
        height={24}
        width={24}
        src={imgSrc}
        alt="Search"
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
