import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  {
    _id: "1",
    title: "How to create a custom hook in React?",
    votes: 10,
    answers: 5,
  },
  {
    _id: "2",
    title: "How to use React Router?",
    votes: 5,
    answers: 3,
  },
  {
    _id: "3",
    title: "How to use Redux?",
    votes: 3,
    answers: 2,
  },
  {
    _id: "4",
    title: "How to use Next.js?",
    votes: 2,
    answers: 1,
  },
];

const popularTags = [
  {
    _id: "1",
    name: "React",
    questions: 10,
  },
  {
    _id: "2",
    name: "JavaScript",
    questions: 5,
  },
  {
    _id: "3",
    name: "TypeScript",
    questions: 3,
  },
  {
    _id: "4",
    name: "Node.js",
    questions: 2,
  },
  {
    _id: "5",
    name: "Next.js",
    questions: 5,
  },
];

const TitleRightSideBar = ({ title }: { title: string }) => (
  <h3 className="h3-bold text-dark200_light900">{title}</h3>
);

const RightSideBar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 h-screen flex flex-col w-[350px] justify-between overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <TitleRightSideBar title="Top Questions" />
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title, votes, answers }) => (
            <Link
              href={ROUTES.PROFILE(_id)}
              key={_id}
              className="flex cursor-pointer justify-between gap-7 items-center"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                height={20}
                width={20}
                src="/icons/chevron-right.svg"
                alt="Chevron"
                className="invert-colors"
              />
              {/* <div className="flex gap-2">
                  <span className="text-dark400_light800">{votes} votes</span>
                  <span className="text-dark400_light800">
                    {answers} answers
                  </span>
                </div> */}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <TitleRightSideBar title="Popular Tags" />
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
