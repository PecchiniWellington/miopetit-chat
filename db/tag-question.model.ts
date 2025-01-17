import { SCHEMA_REF } from "@/constants/schema-ref";
import { Schema, Types, model, models } from "mongoose";

export interface ITagQuestion {
  tag: Types.ObjectId;
  question: Types.ObjectId;
}

const TagQuestionSchema = new Schema<ITagQuestion>(
  {
    tag: { type: Schema.Types.ObjectId, ref: SCHEMA_REF.TAG, required: true },
    question: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA_REF.QUESTION,
      required: true,
    },
  },
  { timestamps: true }
);

const TagQuestion =
  models?.TagQuestion ||
  model<ITagQuestion>(SCHEMA_REF.TAG_QUESTION, TagQuestionSchema);

export default TagQuestion;
