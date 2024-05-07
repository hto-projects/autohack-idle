import { Schema, model } from "mongoose";
import { IGameData } from "../../shared/types";

const gameDataSchema = new Schema(
  {
    numBits: {
      type: Number,
      required: true
    },
    currencyAmount: {
      type: Number,
      required: true
    },
    userEmail: {
      type: String,
      required: false
    },
    upgrades: [{
      type: String,
      required: true
    }]
  }
);

export default model<IGameData>("GameDataModel", gameDataSchema);
