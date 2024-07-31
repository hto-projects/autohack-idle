import { create } from "domain";
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
    const command: ICommand = { input: inputValue, response: generateResponse(inputValue) };
    setPreviousCommands([...allPreviousCommands, command]);
    console.log(allPreviousCommands);
    return inputValue;
    function generateResponse(takenInput: string) {
      const [effect, target, value] = takenInput.split("/");
      if (
        styleData[effect] !== undefined &&
        styleData[effect][target] !== undefined &&
        validStyleFunctions[effect](value)
      ) {
        dispatch(setStyle({ effect: effect, target: target, value: value }));
        return target + " " + effect + " is now " + value;
      } else {
        return "Invalid Command";
      }
    }
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
      <text style={{ color: "lightgreen", width: "95%", marginLeft: "7px" }}>
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
