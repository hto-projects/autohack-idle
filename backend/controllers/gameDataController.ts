import GameDataModel from "../models/gameDataModel";
import { IGameData } from "../../frontend/src/slices/gameDataSlice";
import asyncHandler from "express-async-handler";
import User from "../models/userModel";

// @desc    Save a user's game data
// @route   POST /api/game-data/save
// @access  Private
export const saveGame = asyncHandler(async (req: any, res) => {
  if (req.user) {
    try {
      const gameData: IGameData = req.body;
      const existingData: any = await GameDataModel.findOne({ userEmail: req.user.email });

      if (existingData) {
        existingData.numBits = gameData.numBits;
        existingData.totalNumBits = gameData.totalNumBits;
        existingData.currencyAmount = gameData.currencyAmount;
        existingData.upgrades = gameData.ups;
        existingData.solvedPuzzles = gameData.solvedPuzzles;
        existingData.trustySales = gameData.trustySales;
        existingData.shadySales = gameData.shadySales;

        await existingData.save();
      } else {
        const newData = new GameDataModel({ ...gameData, userEmail: req.user.email });
        newData.userEmail = req.user.email;
        await newData.save();
      }
      res.status(200).send();
    } catch (e) {
      res.status(500);
      console.log(e);
      throw new Error("Internal issue....");
    }
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    Load a user's game data
// @route   POST /api/game-data/load
// @access  Private
export const loadGame = asyncHandler(async (req: any, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    try {
      const existingData: IGameData = await GameDataModel.findOne({ userEmail: user.email });

      if (existingData) {
        res.json(existingData);
      } else {
        res.status(400);
        throw new Error("Data for user not found");
      }
    } catch (e) {
      res.status(500);
      throw new Error("Internal issue....");
    }
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});
