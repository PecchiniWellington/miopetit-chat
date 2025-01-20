import { auth } from "@/auth";
import QuestionForm from "@/components/forms/QuestionForm";
import TitlePages from "@/components/TitlePages";
import { redirect } from "next/navigation";
import React from "react";

const AskQuestion = async () => {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <div>
      <TitlePages>Ask a Question</TitlePages>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </div>
  );
};

export default AskQuestion;
