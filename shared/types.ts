export enum GameVariable {
  BitCheckInterval,
  BitAppearanceProbability,
  AutoBitGatheringAmount,
  AutoBitGatheringInterval,
  BitSweeperSize,
  ButtonAvailable
}

export enum VariableModFunction {
  Add,
  Multiply,
  Set
}

export enum ImageType {
  String,
  Png
}

export enum AppType {
  Collector = "Collector",
  Store = "Store",
  Upgrades = "Upgrades",
  Learn = "Learn",
  Login = "Login",
  Settings = "Settings",
  Puzzle = "Puzzle",
  Help = "Help",
  Terminal = "Terminal"
}

export interface IAppImage {
  image: string;
  type: ImageType;
}

export interface IUpgradeEffect {
  variableAffected: GameVariable;
  variableMod: VariableModFunction;
  modValue: number;
}

export interface IUpgrade {
  name: string;
  description: string;
  picture: IAppImage;
  cost: number;
  effects: IUpgradeEffect[];
  preReqs: string[];
}

export enum UpgradeStatus {
  Owned = "owned",
  Available = "available",
  Unavailable = "unavailable",
  Hidden = "hidden"
}

export enum PuzzleSolvedStatus {
  unsolved = " (unsolved)",
  solved = " (solved)"
}

export interface IGameData {
  numBits: number;
  totalNumBits: number;
  currencyAmount: number;
  userEmail: string;
  ups: IUpgradesData;
  savedSolvedPuzzles: string[];
  trustySales: number;
  shadySales: number;
}

export interface IUpgradesData {
  acquired: IUpgrade[];
  purchasable: IUpgrade[];
  unavailable: IUpgrade[];
  uncategorized: IUpgrade[];
}

export interface IRGBTriple {
  r: number;
  g: number;
  b: number;
}
