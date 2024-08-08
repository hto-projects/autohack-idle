import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialState, setStyle, validStyleFunctions } from "../../../slices/styleDataSlice";
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
    const inputElement = document.getElementById("GETIT") as HTMLInputElement;
    const inputValue = inputElement.value;
    console.log(inputValue);
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
          "This is what the terminal command will do, such as color or size changes. \
        Valid Effects:   textColor/     textSize/    backgroundColor/";
        break;
      case "Target":
        responseValue =
          "This is the game object that the terminal command will effect. The app target refers \
           to the app icons amd window refers to the actual window that pops up when an app is clicked.\
            Notes: The backgroundColor/ effect cannot impact the app target. The textSize/ effect can only impact the app target. The textColor/ \
            effects can't be used on the last 3 targets. Valid  Targets:  /app/     /taskbar/  \
              /titlebar/    /horizontalbar/    /verticalbar/     /window/";
        break;
      case "Value":
        responseValue =
          "This is what value the terimal command will change the targeted object to. This is \
          the most expansive field as it can be any valid color or pixel size so examples are given instead\
         of all possible values, also this is the only field that isn't case-sensitive. Note: If you want \
         to set something back to initial, use /initial for the value feild. Examples:    green   \
         Salmon    20px";
        break;
      default:
        inputValue.trim();
        const [effect, target, value] = inputValue.split("/");
        if (styleData[effect] === undefined) {
          responseValue = `Invalid Effect: ${effect}`;
          break;
        }

        if (styleData[effect][target] === undefined) {
          responseValue = `Invalid Target: ${target}`;
          break;
        }

        if (value === "initial") {
          dispatch(setStyle({ effect: effect, target: target, value: initialState[effect][target] }));
          responseValue = `${target} ${effect} is now it's initial value`;
        } else if (validStyleFunctions[effect](value)) {
          dispatch(setStyle({ effect: effect, target: target, value: value }));
          responseValue = `${target} ${effect} is now ${value}`;
        } else {
          responseValue = `Invalid Value: ${value}`;
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
      <span style={{ color: "white", fontSize: 25, marginLeft: 5 }}>
        AutoHack Idle [Version 0.0.0.1] (c) Hyland Corporation
      </span>
      <div style={{ background: "black", width: "10%", height: "5%", display: "flex", flexDirection: "column" }}></div>
      <span style={{ color: "lightgreen", width: "50%", marginLeft: "7px", flex: "flex", flexWrap: "wrap" }}>
        {allPreviousCommands.map((e) => (
          <>
            {e.input}
            <br></br>
            {e.response}
            <br></br>
          </>
        ))}
      </span>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            checkForCommands();
          }}
        >
          <input
            id="GETIT"
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
