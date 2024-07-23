import { GameVariable, IUpgrade, IUpgradeEffect, VariableModFunction, IRGBTriple } from "./types";
import { allUpgrades } from "./upgrades";

export function flatByProp<T>(arr: Array<T>, prop: string) {
  return arr.map((e) => {
    e[prop];
  });
}

export function pluckOne<T>(arr: Array<T>, pred: (thing: T) => Boolean): T | null {
  const arrCop: Array<T> = [...arr];
  arr.length = 0;

  let retVal: T | null = null;
  for (let i = 0; i < arrCop.length; i++) {
    const currentVal = arrCop[i];
    if (!retVal && pred(currentVal)) {
      retVal = currentVal;
    } else {
      arr.push(currentVal);
    }
  }

  return retVal;
}

function runMod(modFun: VariableModFunction, modVal: number, input: number): number {
  switch (modFun) {
    case VariableModFunction.Add:
      return input + modVal;
    case VariableModFunction.Multiply:
      return input * modVal;
    case VariableModFunction.Set:
      return modVal;
  }
}

export function calculateVariableValue(acquiredUpgrades: IUpgrade[], variable: GameVariable): number {
  const effectsForVariable: IUpgradeEffect[] = acquiredUpgrades.flatMap((up) =>
    up.effects.filter((e) => e.variableAffected === variable)
  );

  const setEffect = pluckOne(effectsForVariable, (ef) => ef.variableMod === VariableModFunction.Set);
  if (!setEffect) {
    return NaN;
  }

  let variableValue: number = setEffect.modValue;
  for (let i = 0; i < effectsForVariable.length; i++) {
    const currentEffect: IUpgradeEffect = effectsForVariable[i];

    variableValue = runMod(currentEffect.variableMod, currentEffect.modValue, variableValue);
  }

  return variableValue;
}

export function RGBTripleToCSS(triple: IRGBTriple): string {
  return `rgb(${Math.floor(triple.r)}, ${Math.floor(triple.g)}, ${Math.floor(triple.b)})`;
}
