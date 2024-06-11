export enum GameVariable {
  BitCheckInterval,
  BitAppearanceProbability,
  AutoBitGatheringAmount,
  AutoBitGatheringInterval,
}

export enum VariableModFunction {
  Add,
  Multiply,
  Set
}

export interface IUpgrade {
  name: string;
  description: string;
  picture: string;
  cost: number;
  variableAffected: GameVariable;
  variableMod: VariableModFunction;
  modValue: number
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
