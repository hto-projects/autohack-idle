import { IGameData } from "../../slices/gameDataSlice";

export enum PuzzleNames {
  // PSet1
  Collect_all_button = "Make a Collect All Button",
  Collect_all_function = "Make a Collect All Function",
  Bits_array = "Make a Bits Array",
  For_loop_to_collect_bits = "Make a For Loop to Collect Bits",
  Complete_collect_all_upgrade = "Make the Complete Collect All Upgrade",
  // PSet2
  Change_Colors = "Change the Color Scheme of Website",
  Change_Text = "Change the Way Text Looks"
}

export enum Labels {
  JS = "Enter your JavaSript below:",
  HTML = "Enter your HTML below:",
  CSS = "Enter your CSS below:",
  Code = "Enter your Code below:"
}

export interface IPuzzleQuestions {
  label: Labels | string;
  answers: string[];
}

export interface IPuzzle {
  kind: "puzzle";
  name: PuzzleNames;
  description: string;
  questions: IPuzzleQuestions[];
}

export interface ILesson {
  kind: "lesson";
  name: string;
  body: JSX.Element;
}

export type Segment = ILesson | IPuzzle;

export type GenButtonText = (i: number, name: string, gameData?: IGameData) => string;

export interface ISection {
  name: string;
  description: string;
  segments: Segment[];
}

export interface IModuleNames {
  module: string;
  section: string;
  segment: string;
}

export interface IModule {
  names: IModuleNames;
  titleText: string;
  genSectionText: GenButtonText;
  genSegmentText: GenButtonText;
  sections: ISection[];
}
