import { useState, ReactNode } from "react";
import { useSelector } from "react-redux";
import { IGameState } from "../../store";
import { IGameData } from "../../slices/gameDataSlice";
import { HelpAppImage } from "../Image";
import { ImageType } from "../../../../shared/types";
import ModuleSectionContainer from "./ModuleSectionContainer";
import { IModule } from "../app_directories/directoryTypes";

interface IContainerProps {
  module: IModule;
}

export default function ModuleContainer({ module }: IContainerProps) {
  const gameData: IGameData = useSelector((state: IGameState) => state.gameData);
  const [visibleSectionI, setVisibleSectionI] = useState(-1);
  let node: ReactNode = undefined;

  if (visibleSectionI === -1) {
    const buttons: ReactNode[] = [];
    for (let i = 0; i < module.sections.length; i++) {
      const currSectionName = module.sections[i].name;
      buttons.push(
        <button
          key={currSectionName}
          onClick={() => setVisibleSectionI(i)}
          style={{ fontSize: "18px", width: "40%", height: "8%", borderWidth: "3px", marginBottom: "1%" }}
        >
          {module.genSectionText(i, currSectionName, gameData)}
        </button>
      );
    }
    node = (
      <>
        <div>
          <h3>{`${module.names.module} ${module.names.section}s`}</h3>
          <p style={{ marginRight: "5%", marginLeft: "5%" }}>{module.titleText}</p>
        </div>
        {buttons}
        <div style={{ marginRight: "3%", marginTop: "-2%", marginBottom: "-1%" }}>
          <HelpAppImage picture={{ image: module.names.module.toLowerCase(), type: ImageType.Png }}></HelpAppImage>
        </div>
      </>
    );
  } else {
    const section = module.sections[visibleSectionI];
    node = (
      <ModuleSectionContainer
        section={section}
        names={module.names}
        genSectionText={module.genSegmentText}
        closeSection={() => setVisibleSectionI(-1)}
      ></ModuleSectionContainer>
    );
  }

  return <div id="learnContainer">{node}</div>;
}
