import { useState } from "react";
import { ImageType } from "../../../../../../shared/types";
import { HelpAppImage } from "../../../Image";

interface ItextBox {
  name: string;
  body: string;
}

const helpApps: ItextBox[] = [
  {
    name: "Help",
    body: "Hi! This is the help app and will provide brief descriptions and hints about the other parts of this game ."
  },
  {
    name: "Collector",
    body: "This is the collector app, where you can collect bits to sell for cash. While open, you have a small chance every second to find a bit. Be careful though, because each time you collect a bit, a virus has a chance to spawn, which you can destroy by clicking on it."
  },
  {
    name: "Upgrades",
    body: "This is the upgrades app. This is where you can buy upgrades to increase your chance to find bits, how fast you check for bits, or unlock completely new features. Some of these will be hidden until you unlock them either by buying previous upgrades or from a few other methods. Additionally, you can sell your bits to trustworthy or untrustworthy organizations. By selling your data to a trustworthy organization the chance of spawning a virus is slightly decreased. However, by selling your data to a untrustworthy organization you can sell your data for X times more but greatly increase your chances of spawning a virus every time you click a bit and increase the maximum amount of viruses on your screen"
  },
  {
    name: "Learn",
    body: "This is the learn app. This is where you can look at chapters and lessons to learn the concepts you need to solve the puzzles in the puzzle app."
  },
  {
    name: "Login",
    body: "This is the login app. If you want to make an account of sign in this is where you should do so. If you want to live your life to the fullest, you will make an account. 😀"
  },
  {
    name: "Settings",
    body: "This is the settings app. This is where you set the game volume (coming soon) and reset game and style data. It's also where you can see all the bits you have collected through gameplay. The reset buttons are debug features, so if you want to keep a developer who definetly isn't in your walls happy, you won't use these features. 🙃"
  },
  {
    name: "Puzzle",
    body: "This is the puzzle app. After completing certain coding puzzles to prove your competence, you will unlock fun things."
  },
  {
    name: "Terminal",
    body: "This is the terminal app. This is where you can input specific commands in order to change the CSS of certain game objects. This works by typing in the atribute you want to change (ex: backgroundColor), the part of the game you want to target (ex: taskbar), and the value you want to change it to (ex: red). It looks like effect/target/value (ex: backgroundColor/taskbar/red)."
  }
];

export default function HelpAppContainer() {
  let [currentDisplay, setCurrentDisplay] = useState(helpApps[0].name);
  const [display] = helpApps.filter((app) => app.name == currentDisplay);
  //overflowX: "hidden"

  return (
    <div style={{ height: "100%", width: "100%", overflowY: "auto", scrollBehavior: "smooth" }}>
      <div style={{ height: "75%", width: "100%", display: "flex", flexDirection: "row", backgroundColor: "green" }}>
        <div
          style={{
            height: "100%",
            width: "25%",
            //marginRight: "40%",
            backgroundColor: "red"
          }}
        >
          {helpApps.map((app) => (
            <button
              style={{ marginTop: "20px", fontSize: 23, marginRight: "35px" }}
              onClick={() => setCurrentDisplay(app.name)}
            >
              {app.name}
            </button>
          ))}
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            marginLeft: "310px",
            marginTop: "50px",
            backgroundColor: "purple"
          }}
        >
          <HelpAppImage picture={{ image: display.name.toLowerCase(), type: ImageType.Png }}></HelpAppImage>
        </div>
      </div>
      <div
        style={{
          height: "10%",
          width: "100%",
          display: "flex",
          marginTop: "34%",
          color: "black",
          flexWrap: "wrap",
          fontSize: 20,
          backgroundColor: "yellow"
        }}
      >
        {display.body}
      </div>
    </div>
  );
}
