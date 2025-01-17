import { SCHEMA_REF } from "@/constants/schema-ref";
import { Schema, Types, model, models } from "mongoose";

export interface IAnswer {
  author: Types.ObjectId;
  question: Types.ObjectId;
  content: string;
  upvote?: number;
}

const AnswerSchema = new Schema<IAnswer>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA_REF.USER,
      required: true,
    },
    question: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA_REF.QUESTION,
      required: true,
    },
    content: { type: String, required: true },
    upvote: { type: Number },
  },
  { timestamps: true }
);

const Answer =
  models?.Answer || model<IAnswer>(SCHEMA_REF.ANSWER, AnswerSchema);

export default Answer;
