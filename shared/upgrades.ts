import { GameVariable, VariableModFunction, IUpgrade, ImageType } from "./types";

export const starterUpgrades: IUpgrade[] = [
  {
    name: "Check for Bits",
    description: "Once every second, look to see if there are any bits available for harvesting",
    pictureArr: [{ image: "🔍", type: ImageType.string }],
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
    pictureArr: [{ image: "❇", type: ImageType.string }],
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
    pictureArr: [{ image: "🔍🔍", type: ImageType.string }],
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
    name: "Al the Auto-Collector",
    description: "Hire an A.I. intern to collect bits for you",
    pictureArr: [{ image: "🤖", type: ImageType.string }],
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
  },
  {
    name: "Bit Sweeper",
    description: "Drag and hold your mouse around the screen and collect bits",
    pictureArr: [{ image: "🧹", type: ImageType.string }],
    cost: 15,
    effects: [
      {
        variableAffected: GameVariable.BitSweeperSize,
        variableMod: VariableModFunction.Set,
        modValue: 30
      }
    ]
  }
];

export const allUpgrades: IUpgrade[] = starterUpgrades;
