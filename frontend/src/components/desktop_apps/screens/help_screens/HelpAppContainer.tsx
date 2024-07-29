import { useState } from "react";
import { DesktopAppImage } from "../../../Image";
import { ImageType } from "../../../../../../shared/types";
import { HelpAppImage } from "../../../Image";
interface ItextBox {
  name: string;
  body: string;
}

const currentText: ItextBox[] = [
  {
    name: "Help",
    body: "Hi! This is the help app and will provide brief descriptions and hints about the other parts of this game."
  },
  {
    name: "Collector",
    body: "This is the collector app, its where you can collect bits to sell for cash. While open, every second you have a small chance to find a bit. Be careful though, because each time you collect a bit a virus has a chance to spawn which you destroy by clicking on it."
  },
  {
    name: "Upgrades",
    body: "This is the ugrades app. This is where you can buy upgrades to increase your chance to find bits, how fast you check for bits, or unlock completly new features. Some of these will be hidden until you unlock them either by buying upgrades or from a few other methods."
  },
  {
    name: "Learn",
    body: "This is the learn app. This is where you can look at chapters and lessons to learn the concepts you need to solve the puzzles in the puzzle app."
  },
  {
    name: "Login",
    body: "This is the login app. If you wanted to make an account of sign in this is where you would do so."
  },
  {
    name: "Settings",
    body: "This is the settings app. This is where you would set the game volume, reset data, and a few other miscellaneous things."
  },
  {
    name: "Puzzle",
    body: "This is the puzzle app. This is where you will be asked to complete challenges to solve puzzles, which once you complete sets you will unlock new upgrades."
  }
];

export default function HelpAppContainer() {
  let [currentDisplay, setCurrentDisplay] = useState(currentText[0].name);
  const [display] = currentText.filter((app) => app.name == currentDisplay);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div style={{ height: "50%", width: "100%", display: "flex", flexDirection: "row" }}>
        <div
          style={{
            height: "30%",
            width: "50%",
            marginRight: "43%"
          }}
        >
          {currentText.map((app) => (
            <button
              style={{ marginTop: "20px", fontSize: 23, marginRight: "20px" }}
              onClick={() => setCurrentDisplay(app.name)}
            >
              {app.name}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", height: "50%", width: "100%" }}>
          <HelpAppImage picture={{ image: display.name.toLowerCase(), type: ImageType.Png }}></HelpAppImage>
        </div>
      </div>
      <div style={{ height: "60%", width: "100%", display: "flex", marginTop: "20%" }}>
        <text style={{ color: "black", visibility: "visible", fontSize: 20, marginLeft: "1%", marginRight: "2%" }}>
          {display.body}
        </text>
      </div>
    </div>
  );
}
