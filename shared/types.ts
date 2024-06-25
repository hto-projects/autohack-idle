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

export interface IUpgradeEffect {
  variableAffected: GameVariable;
  variableMod: VariableModFunction;
  modValue: number;
}

export interface IUpgradeImage {
  image: string;
  type: ImageType;
}

export interface IUpgrade {
  name: string;
  description: string;
  picture: IUpgradeImage;
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
  currencyAmount: number;
  userEmail: string;
  upgrades: string[];
}

export interface IRGBTriple {
  r: number;
  g: number;
  b: number;
}
