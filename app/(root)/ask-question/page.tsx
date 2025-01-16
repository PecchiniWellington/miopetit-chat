import QuestionForm from "@/components/forms/QuestionForm";
import TitlePages from "@/components/TitlePages";
import React from "react";

const AskQuestion = () => {
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
