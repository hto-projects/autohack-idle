import { GameVariable, IUpgrade, VariableModFunction } from "./types";

const runMod = (modFun: VariableModFunction, modVal: number, input: number): number => {
  switch (modFun) {
    case VariableModFunction.Add:
      return input + modVal;
    case VariableModFunction.Multiply:
      return input * modVal;
    case VariableModFunction.Set:
      return modVal;
  }
}

export const calculateVariableValue = (upgrades: IUpgrade[], variable: GameVariable): number => {
  const upgradesForVariable: IUpgrade[] = upgrades.filter(up => up.variableAffected === variable);

  let variableValue: number = NaN;
  for (let i = 0; i = upgradesForVariable.length; i++) {
    const currentUpgrade: IUpgrade = upgradesForVariable[i];

    variableValue = runMod(currentUpgrade.variableMod, currentUpgrade.modValue, variableValue);
  }

  return variableValue;
}
