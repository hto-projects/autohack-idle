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

export interface IUpgradeEffect {
  variableAffected: GameVariable;
  variableMod: VariableModFunction;
  modValue: number;
}

export interface IUpgrade {
  name: string;
  description: string;
  picture: string;
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
