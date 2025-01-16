import { Schema, Types, model, models } from "mongoose";

export interface IQuestion {
  title: string;
  content: string;
  tags?: Types.ObjectId[];
  views?: number;
  upvotes?: number;
  downvotes?: number;
  answers: number;
  author: Types.ObjectId;
}

const QuestionSchema = new Schema<IQuestion>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: Schema.Types.ObjectId, ref: SCHEMA_REF.TAG },
    views: { type: Number, default: 0 },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    answers: { type: Number, required: true },
    author: { type: Schema.Types.ObjectId, ref: SCHEMA_REF.USER },
  },
  { timestamps: true }
);

const Question =
  models?.Question || model<IQuestion>(SCHEMA_REF.QUESTION, QuestionSchema);

export default Question;
