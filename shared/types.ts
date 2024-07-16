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
  string,
  Jpg,
  Png
}

export enum AppType {
  Collector = "Collector",
  Store = "Store",
  Upgrades = "Upgrades",
  Learn = "Learn",
  Authentication = "Authentication",
  Settings = "Settings"
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
  pictureArr: IAppImage[];
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

export interface IGameData {
  numBits: number;
  totalNumBits: number;
  currencyAmount: number;
  userEmail: string;
  upgrades: string[];
}

export interface IRGBTriple {
  r: number;
  g: number;
  b: number;
}
