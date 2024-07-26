import { GameVariable, VariableModFunction, IUpgrade, ImageType } from "./types";

export const starterUpgrades: IUpgrade[] = [
  {
    name: "Check for Bits",
    preReqs: [],
    description: "Once every second, look to see if there are any bits available for harvesting",
    picture: { image: "🔍", type: ImageType.String },
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
    picture: { image: "❇", type: ImageType.String },
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
    picture: { image: "1🔍", type: ImageType.String },
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
    picture: { image: "🤖", type: ImageType.String },
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
    picture: { image: "🧹", type: ImageType.String },
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
    picture: { image: "2🔍", type: ImageType.String },
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
    picture: { image: "3🔍", type: ImageType.String },
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
    preReqs: ["Make a Collect All Button", "Test"],
    description: "Collects all bits on screen",
    picture: { image: "💰", type: ImageType.String },
    cost: 200,
    effects: [
      {
        variableAffected: GameVariable.ButtonAvailable,
        variableMod: VariableModFunction.Set,
        modValue: 1
      }
    ]
  },
  {
    name: "Sexdecuple Checks",
    preReqs: ["Octuple Checks"],
    description: "Check for bits 16 times as often",
    picture: { image: "4🔍", type: ImageType.String },
    cost: 320,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Multiply,
        modValue: 0.5
      }
    ]
  },
  {
    name: "Tridogintuple Checks",
    preReqs: ["Sexdecuple Checks"],
    description: "Check for bits 32 times as often",
    picture: { image: "5🔍", type: ImageType.String },
    cost: 640,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Multiply,
        modValue: 0.5
      }
    ]
  },
  {
    name: "Sexaquadgintuiple Checks",
    preReqs: ["Tridogintuple Checks"],
    description: "Check for bits 64 times as often",
    picture: { image: "🔍", type: ImageType.String },
    cost: 1280,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Multiply,
        modValue: 0.5
      }
    ]
  },
  {
    name: "Centviginoctuple Checks",
    preReqs: ["Sexaquadgintuiple Checks"],
    description: "Check for bits 128 times as often",
    picture: { image: "🔍", type: ImageType.String },
    cost: 1280,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Multiply,
        modValue: 0.5
      }
    ]
  },
  {
    name: "Ducentquinquaginsextuple Checks",
    preReqs: ["Centviginoctuple Checks"],
    description: "Check for bits 256 times as often",
    picture: { image: "🔍", type: ImageType.String },
    cost: 2560,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Multiply,
        modValue: 0.5
      }
    ]
  },
  {
    name: "Quingendecsingle Checks",
    preReqs: ["Ducentquinquaginsextuple Checks"],
    description: "Check for bits 512 times as often",
    picture: { image: "🔍", type: ImageType.String },
    cost: 5120,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Multiply,
        modValue: 0.5
      }
    ]
  },
  {
    name: "Millviginquaduple Checks",
    preReqs: ["Quingendecsingle Checks"],
    description: "Check for bits 1024 times as often",
    picture: { image: "🔍", type: ImageType.String },
    cost: 10240,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Multiply,
        modValue: 0.5
      }
    ]
  },
  {
    name: "Bimillquadraginocttuple Checks",
    preReqs: ["Millviginquaduple Checks"],
    description: "Check for bits 2048 times as often",
    picture: { image: "🔍", type: ImageType.String },
    cost: 20480,
    effects: [
      {
        variableAffected: GameVariable.BitCheckInterval,
        variableMod: VariableModFunction.Multiply,
        modValue: 0.5
      }
    ]
  }
];

export const allUpgrades: IUpgrade[] = starterUpgrades;
