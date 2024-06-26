import React from "react";
import { AppType } from "../../../../shared/types";

interface AppWindowProps {
  open: AppType;
  setOpen: (at: AppType) => void;
}

const AppWindow: React.FC<AppWindowProps> = ({ open, setOpen }) => {
  if (open === null) {
    return <></>;
  }

  return (
    <div style={{ width: "100%", height: "100%", background: "black", padding: "20px" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "purple",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
          color: "white"
        }}
      >
        <h1>WINDOW!</h1>
        <p>Current open: {open}</p>
        <p>
          <button onClick={() => setOpen(null)}>Close</button>
        </p>
      </div>
    </div>
  );
};

export default AppWindow;
