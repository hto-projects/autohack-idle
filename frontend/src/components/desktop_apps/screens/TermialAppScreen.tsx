import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStyle, validStyleFunctions } from "../../../slices/styleDataSlice";
import { IGameState } from "../../../store";

interface ICommand {
  input: string;
  response: string;
}
export default function TerminalAppScreen() {
  const dispatch = useDispatch();
  const [allPreviousCommands, setPreviousCommands] = useState<ICommand[]>([]);
  const styleData = useSelector((state: IGameState) => state.styleData);

  const checkForCommands = () => {
    const inputElement = document.getElementById("command") as HTMLInputElement;
    const inputValue = inputElement.value;
    let responseValue: string = null;

    switch (inputValue.trim()) {
      case "help":
        responseValue =
          "This terminal app uses a very basic syntax being Effect/Target/Value to order \
          to know what to change, where, and to what. For what spesific values are allowed for each\
           use the Effect, Target, or Value commands. ";
        break;
      case "Effect":
        responseValue =
          "This is what the terminal command will do, such as color, font, or size changes. \
        Valid Effects:   textColor/     textSize/     textFont/     backgroundColor/";
        break;
      case "Target":
        responseValue =
          "This is the game object that the terminal command will effect. Notes: The textSize/\
         effect can only impact the app target. The textFont/ and textColor/ effects can't be used on\
          the window target. The textFont/ effect also cannot be used on the taskbar target. Valid \
          Targets:  /app/     /taskbar/    /titlebar/     /window/";
        break;
      case "Value":
        responseValue =
          "This is what value the terimal command will change the targeted object to. This is \
        the most expansive field as it can be any valid color or pixel size so examples are given instead\
         of all possible values, also this is the only field that isn't case-sensitive.  Examples:    green   \
         Salmon    20px     arial    pixeloidMono    mOnOspAce YeLLow";
        break;
      default:
        inputValue.trim();
        const [effect, target, value] = inputValue.split("/");
        if (
          styleData[effect] !== undefined &&
          styleData[effect][target] !== undefined &&
          validStyleFunctions[effect](value)
        ) {
          dispatch(setStyle({ effect: effect, target: target, value: value }));
          responseValue = target + " " + effect + " is now " + value;
        } else {
          responseValue = "Invalid Command";
        }
        break;
    }

    const command: ICommand = { input: inputValue, response: responseValue };

    setPreviousCommands([...allPreviousCommands, command]);
    return responseValue;
  };

  return (
    <div
      style={{
        background: "black",
        width: "98%",
        height: "93%",
        display: "flex",
        flexDirection: "column",
        scrollBehavior: "smooth",
        overflow: "auto"
      }}
    >
      <text style={{ color: "white", fontSize: 25, marginLeft: 5 }}>
        {" "}
        AutoHack Idle [Version 0.0.0.1] (c) Hyland Corporation
      </text>
      <div style={{ background: "black", width: "10%", height: "5%", display: "flex", flexDirection: "column" }}></div>
      <text style={{ color: "lightgreen", width: "50%", marginLeft: "7px", flex: "flex", flexWrap: "wrap" }}>
        {allPreviousCommands.map((e) => (
          <>
            {e.input}
            <br></br>
            {e.response}
            <br></br>
          </>
        ))}
      </text>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            checkForCommands();
          }}
        >
          <input
            id="command"
            style={{
              color: "white",
              background: "black",
              font: "PixeloidMono",
              borderLeftStyle: "solid",
              borderLeftColor: "white",
              borderLeftWidth: "5px",
              marginLeft: "7px",
              borderBottomWidth: "0px",
              borderTopWidth: "0px",
              borderRightWidth: "0px",
              width: "99%"
            }}
          ></input>
        </form>
      </div>
    </div>
  );
}
