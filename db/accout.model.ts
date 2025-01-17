import { SCHEMA_REF } from "@/constants/schema-ref";
import { model, models, Schema, Types } from "mongoose";

export interface IAccount {
  userId: Types.ObjectId;
  name: string;
  image?: string;
  password?: string;
  provider: string; // or enum => facebook, github, google etc
  providerAccountId: string;
}

const AccountSchema = new Schema<IAccount>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA_REF.USER,
      required: true,
    },
    name: { type: String, required: true },
    image: { type: String },
    password: { type: String },
    provider: { type: String, required: true },
    providerAccountId: { type: String, required: true },
  },
  { timestamps: true }
);

const Account =
  models?.Account || model<IAccount>(SCHEMA_REF.ACCOUNT, AccountSchema);

export default Account;
