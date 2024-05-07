import express from "express";
import { saveGame, loadGame } from "../controllers/gameDataController"
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/save").post(protect, saveGame);
router.route("/load").get(protect, loadGame);

export default router;
