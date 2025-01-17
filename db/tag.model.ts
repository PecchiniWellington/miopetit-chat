import { SCHEMA_REF } from "@/constants/schema-ref";
import { Schema, model, models } from "mongoose";

export interface ITag {
  name: string;
  questions: number;
}

const TagSchema = new Schema<ITag>(
  {
    name: { type: String, required: true },
    questions: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Tag = models?.Tag || model<ITag>(SCHEMA_REF.TAG, TagSchema);

export default Tag;
