import { SCHEMA_REF } from "@/constants/schema-ref";
import { model, models, Schema, Types } from "mongoose";

export interface ICollection {
  author: Types.ObjectId;
  question: Types.ObjectId;
}

const CollectionSchema = new Schema<ICollection>(
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
  },
  { timestamps: true }
);

const Collection =
  models?.Collection ||
  model<ICollection>(SCHEMA_REF.COLLECTION, CollectionSchema);

export default Collection;
