import { create } from "domain";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setStyle } from "../../../slices/styleDataSlice";

interface ICommand {
  input: string;
  response: string;
}
export default function TerminalAppScreen() {
  const dispatch = useDispatch();
  const [allPreviousCommands, setPreviousCommands] = useState<ICommand[]>([]);

  const checkForCommands = () => {
    const inputElement = document.getElementById("command") as HTMLInputElement;
    const inputValue = inputElement.value;
    const command: ICommand = { input: inputValue, response: generateResponse(inputValue) };
    setPreviousCommands([...allPreviousCommands, command]);
    console.log(allPreviousCommands);
    return inputValue;
    function generateResponse(takenInput: string) {
      let possibleCommands = ["titlebar/color/green"];
      if (possibleCommands.includes(takenInput)) {
        dispatch(setStyle({ property: "titleBarColor", value: "green" }));
        return "Taskbar is now green";
      } else {
        dispatch(setStyle({ property: "titleBarColor", value: "aqua" }));
        return "false";
      }
    }
  };
  return (
    <div style={{ background: "black", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <text style={{ color: "white", fontSize: 25, marginLeft: 5 }}>
        {" "}
        AutoHack Idle [Version 0.0.0.1] (c) Hyland Corporation
      </text>
      <div style={{ background: "black", width: "10%", height: "5%", display: "flex", flexDirection: "column" }}></div>
      <text style={{ color: "yellow", width: "100%", marginLeft: "7px" }}>
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
