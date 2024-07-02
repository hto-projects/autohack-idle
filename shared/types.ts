export enum GameVariable {
  BitCheckInterval,
  BitAppearanceProbability,
  AutoBitGatheringAmount,
  AutoBitGatheringInterval
}

export enum VariableModFunction {
  Add,
  Multiply,
  Set
}

export enum ImageType {
  string,
  jpg,
  png
}

export enum AppType {
  Collector = "Collector",
  Store = "Store",
  Upgrades = "Upgrades",
  Authentication = "Authentication"
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
}

export enum UpgradeStatus {
  Owned = "owned",
  Available = "available",
  Unavailable = "unavailable"
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
