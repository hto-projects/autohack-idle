import { GameVariable, VariableModFunction, IUpgrade, ImageType } from "./types";

export const starterUpgrades: IUpgrade[] = [
  {
    name: "test",
    description: "Once every second, look to see if there are any bits available for harvesting",
    picture: { imageArr: ["wip_coin_1"], type: ImageType.png },
    cost: 0.4,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Set,
        modValue: 1000
      }
    ]
  },
  {
    name: "Check for Bits",
    description: "Once every second, look to see if there are any bits available for harvesting",
    picture: { imageArr: ["🔍"], type: ImageType.string },
    cost: 0,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Set,
        modValue: 1000
      }
    ]
  },
  {
    name: "Chance for Bits",
    description: "When checking for bits, succeed in finding one 50% of the time",
    picture: { imageArr: ["❇"], type: ImageType.string },
    cost: 0,
    effects: [
      {
        variableAffected: GameVariable.BitAppearanceProbability,
        variableMod: VariableModFunction.Set,
        modValue: 0.5
      }
    ]
  },
  {
    name: "Double Checks",
    description: "Check for bits twice as often",
    picture: { imageArr: ["🔍🔍"], type: ImageType.string },
    cost: 10,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Multiply,
        modValue: 0.5
      }
    ]
  },
  {
    name: "testtttt",
    description: "Once every second, look to see if there are any bits available for harvesting",
    picture: { imageArr: ["coin_32", "coin_32"], type: ImageType.png },
    cost: 0.4,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Set,
        modValue: 1000
      }
    ]
  },
  {
    name: "Al the Auto-Collector",
    description: "Hire an A.I. intern to collect bits for you",
    picture: { imageArr: ["🤖"], type: ImageType.string },
    cost: 2,
    effects: [
      {
        variableAffected: GameVariable.AutoBitGatheringAmount,
        variableMod: VariableModFunction.Set,
        modValue: 1
      },
      {
        variableAffected: GameVariable.AutoBitGatheringInterval,
        variableMod: VariableModFunction.Set,
        modValue: 1000
      }
    ]
  }
];

export const allUpgrades: IUpgrade[] = starterUpgrades;
