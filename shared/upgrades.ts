import { GameVariable, VariableModFunction, IUpgrade, ImageType } from "./types";

const other: IUpgrade[] = [
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
  }
];

const learn: IUpgrade[] = [
  {
    name: "Collect All",
    // Might be recommend to prepend every puzzle prereq string with "puz: " for debugging
    preReqs: ["Make a Collect All Button"],
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
  }
];

const al: IUpgrade[] = [
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
    name: "Al the Auto-Collector, Upgraded ",
    preReqs: ["Al the Auto-Collector"],
    description: "Hire an upgraded A.I. intern to collect bits for you",
    picture: { image: "🤖", type: ImageType.String },
    cost: 5,
    effects: [
      {
        variableAffected: GameVariable.AutoBitGatheringAmount,
        variableMod: VariableModFunction.Set,
        modValue: 2
      },
      {
        variableAffected: GameVariable.AutoBitGatheringInterval,
        variableMod: VariableModFunction.Set,
        modValue: 1000
      }
    ]
  },
  {
    name: "Al the Auto-Collector, Upgraded V2",
    preReqs: ["Al the Auto-Collector, Upgraded "],
    description: "Hire an even more upgraded A.I. intern to collect bits for you",
    picture: { image: "🤖", type: ImageType.String },
    cost: 10,
    effects: [
      {
        variableAffected: GameVariable.AutoBitGatheringAmount,
        variableMod: VariableModFunction.Set,
        modValue: 5
      },
      {
        variableAffected: GameVariable.AutoBitGatheringInterval,
        variableMod: VariableModFunction.Set,
        modValue: 1000
      }
    ]
  },
  {
    name: "Al the Auto-Collector, Upgraded V3",
    preReqs: ["Al the Auto-Collector, Upgraded V2"],
    description: "Hire an even more upgraded A.I. intern to collect bits for you",
    picture: { image: "🤖", type: ImageType.String },
    cost: 50,
    effects: [
      {
        variableAffected: GameVariable.AutoBitGatheringAmount,
        variableMod: VariableModFunction.Set,
        modValue: 15
      },
      {
        variableAffected: GameVariable.AutoBitGatheringInterval,
        variableMod: VariableModFunction.Set,
        modValue: 1000
      }
    ]
  },
  {
    name: "Al the Auto-Collector, Upgraded V4",
    preReqs: ["Al the Auto-Collector, Upgraded V3"],
    description: "Hire an even more upgraded A.I. intern to collect bits for you",
    picture: { image: "🤖", type: ImageType.String },
    cost: 100,
    effects: [
      {
        variableAffected: GameVariable.AutoBitGatheringAmount,
        variableMod: VariableModFunction.Set,
        modValue: 25
      },
      {
        variableAffected: GameVariable.AutoBitGatheringInterval,
        variableMod: VariableModFunction.Set,
        modValue: 1000
      }
    ]
  },
  {
    name: "Al the Auto-Collector, Upgraded V5",
    preReqs: ["Al the Auto-Collector, Upgraded V4"],
    description: "Hire an even more upgraded A.I. intern to collect bits for you",
    picture: { image: "🤖", type: ImageType.String },
    cost: 500,
    effects: [
      {
        variableAffected: GameVariable.AutoBitGatheringAmount,
        variableMod: VariableModFunction.Set,
        modValue: 50
      },
      {
        variableAffected: GameVariable.AutoBitGatheringInterval,
        variableMod: VariableModFunction.Set,
        modValue: 1000
      }
    ]
  },
  {
    name: "Al the Auto-Collector, Perfected",
    preReqs: ["Al the Auto-Collector, Upgraded V5"],
    description: "Perfected automation of bit collection",
    picture: { image: "🤖", type: ImageType.String },
    cost: 2500,
    effects: [
      {
        variableAffected: GameVariable.AutoBitGatheringAmount,
        variableMod: VariableModFunction.Set,
        modValue: 300
      },
      {
        variableAffected: GameVariable.AutoBitGatheringInterval,
        variableMod: VariableModFunction.Set,
        modValue: 1000
      }
    ]
  },
  {
    name: "Faster Al Storage",
    preReqs: ["Al the Auto-Collector, Perfected"],
    description: "Obtain bits even faster with this upgrade!",
    picture: { image: "💾", type: ImageType.String },
    cost: 2500,
    effects: [
      {
        variableAffected: GameVariable.AutoBitGatheringAmount,
        variableMod: VariableModFunction.Set,
        modValue: 300
      },
      {
        variableAffected: GameVariable.AutoBitGatheringInterval,
        variableMod: VariableModFunction.Set,
        modValue: 900
      }
    ]
  },
  {
    name: "Faster Al Storage, Expanded",
    preReqs: ["Faster Al Storage"],
    description: "Obtain bits even faster with this upgrade!",
    picture: { image: "💾", type: ImageType.String },
    cost: 10000,
    effects: [
      {
        variableAffected: GameVariable.AutoBitGatheringAmount,
        variableMod: VariableModFunction.Set,
        modValue: 300
      },
      {
        variableAffected: GameVariable.AutoBitGatheringInterval,
        variableMod: VariableModFunction.Set,
        modValue: 750
      }
    ]
  },
  {
    name: "Faster Al Storage, Expanded V2",
    preReqs: ["Faster Al Storage, Expanded"],
    description: "Obtain bits even faster with this upgrade!",
    picture: { image: "💾", type: ImageType.String },
    cost: 25000,
    effects: [
      {
        variableAffected: GameVariable.AutoBitGatheringAmount,
        variableMod: VariableModFunction.Set,
        modValue: 300
      },
      {
        variableAffected: GameVariable.AutoBitGatheringInterval,
        variableMod: VariableModFunction.Set,
        modValue: 500
      }
    ]
  },
  {
    name: "Faster Al Storage, Expanded V3",
    preReqs: ["Faster Al Storage, Expanded V2"],
    description: "Obtain bits even faster with this upgrade!",
    picture: { image: "💾", type: ImageType.String },
    cost: 50000,
    effects: [
      {
        variableAffected: GameVariable.AutoBitGatheringAmount,
        variableMod: VariableModFunction.Set,
        modValue: 300
      },
      {
        variableAffected: GameVariable.AutoBitGatheringInterval,
        variableMod: VariableModFunction.Set,
        modValue: 300
      }
    ]
  },
  {
    name: "Faster Al Storage, Maximum",
    preReqs: ["Faster Al Storage, Expanded V3"],
    description: "Obtain bits at the fastest possible speed.",
    picture: { image: "💾", type: ImageType.String },
    cost: 100000,
    effects: [
      {
        variableAffected: GameVariable.AutoBitGatheringAmount,
        variableMod: VariableModFunction.Set,
        modValue: 300
      },
      {
        variableAffected: GameVariable.AutoBitGatheringInterval,
        variableMod: VariableModFunction.Set,
        modValue: 100
      }
    ]
  }
];

const checks: IUpgrade[] = [
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
    name: "Double Checks",
    preReqs: ["Check for Bits"],
    description: "Check for bits twice as often",
    picture: { image: "🔍", type: ImageType.String },
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
    name: "Quadruple Checks",
    preReqs: ["Double Checks"],
    description: "Check for bits 4 times as often",
    picture: { image: "🔍", type: ImageType.String },
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
    picture: { image: "🔍", type: ImageType.String },
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
    name: "Sexdecuple Checks",
    preReqs: ["Octuple Checks"],
    description: "Check for bits 16 times as often",
    picture: { image: "🔍", type: ImageType.String },
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
    picture: { image: "🔍", type: ImageType.String },
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

export const allUpgrades: IUpgrade[] = [...checks, ...other, ...al, ...learn];
