import { Schema, model } from "mongoose";
import { GameVariable, IUpgrade, VariableModFunction } from "../../shared/types";

const upgradeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    cost: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    variableAffected: {
      type: GameVariable,
      required: true
    },
    variableMod: {
      type: VariableModFunction,
      required: true
    },
    modValue: {
      type: Number,
      required: true
    }
  }
);

export default model<IUpgrade>("UpgradeModel", upgradeSchema);
