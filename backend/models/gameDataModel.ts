import { Schema, model } from "mongoose";
import { IGameData } from "../../frontend/src/slices/gameDataSlice";

const gameDataSchema = new Schema({
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
  upgrades: [
    {
      type: String,
      required: true
    }
  ]
});

export default model<IGameData>("GameDataModel", gameDataSchema);
