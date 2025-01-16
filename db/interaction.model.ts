import { model, models, Schema, Types } from "mongoose";

export interface IInteraction {
  user: Types.ObjectId;
  action: string;
  actionId: Types.ObjectId;
  actionType: "question" | "answer";
}

const InteractionSchema = new Schema<IInteraction>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA_REF.USER,
      required: true,
    },
    actionId: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA_REF.USER,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    actionType: {
      type: String,
      enum: ["question", "answer"],
      required: true,
    },
  },
  { timestamps: true }
);

const Interaction =
  models?.Interaction ||
  model<IInteraction>(SCHEMA_REF.INTERACTION, InteractionSchema);

export default Interaction;