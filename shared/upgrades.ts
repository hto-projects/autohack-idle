import { GameVariable, VariableModFunction, IUpgrade, ImageType } from "./types";

export const starterUpgrades: IUpgrade[] = [
  {
    name: "Check for Bits",
    preReqs: [],
    description: "Once every second, look to see if there are any bits available for harvesting",
    pictureArr: [{ image: "🔍", type: ImageType.String }],
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
    preReqs: [],
    description: "When checking for bits, succeed in finding one 50% of the time",
    pictureArr: [{ image: "❇", type: ImageType.String }],
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
    preReqs: [],
    description: "Check for bits twice as often",
    pictureArr: [{ image: "🔍🔍", type: ImageType.String }],
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
    preReqs: [],
    description: "Hire an A.I. intern to collect bits for you",
    pictureArr: [{ image: "🤖", type: ImageType.String }],
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
    preReqs: [],
    description: "Drag and hold your mouse around the screen and collect bits",
    pictureArr: [{ image: "🧹", type: ImageType.String }],
    cost: 15,
    effects: [
      {
        variableAffected: GameVariable.BitSweeperSize,
        variableMod: VariableModFunction.Set,
        modValue: 30
      }
    ]
  },
  {
    name: "Quadruple Checks",
    preReqs: ["Double Checks"],
    description: "Check for bits 4 times as often",
    pictureArr: [{ image: "🔍🔍🔍🔍", type: ImageType.String }],
    cost: 40,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Multiply,
        modValue: 0.5
      }
    ]
  },
  {
    name: "Octuple Checks",
    preReqs: ["Quadruple Checks"],
    description: "Check for bits 8 times as often",
    pictureArr: [{ image: "🔍🔍🔍🔍🔍🔍🔍🔍", type: ImageType.String }],
    cost: 160,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Multiply,
        modValue: 0.5
      }
    ]
  },
  {
    name: "Collect All",
    preReqs: [],
    description: "Collects all bits on screen",
    pictureArr: [{ image: "💰", type: ImageType.String }],
    cost: 200,
    effects: [
      {
        variableAffected: GameVariable.ButtonAvailable,
        variableMod: VariableModFunction.Set,
        modValue: 1
      }
    ]
  }
];

export const allUpgrades: IUpgrade[] = starterUpgrades;
