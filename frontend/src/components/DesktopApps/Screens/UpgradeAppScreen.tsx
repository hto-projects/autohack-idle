import React, { useRef } from "react";
import UpgradesContainer from "../../UpgradesContainer";
import { useDispatch } from "react-redux";
import { sellData } from "../../../slices/gameDataSlice";

export default function UpgradeAppScreen() {
  const dispatch = useDispatch();

  return (
    <>
      <UpgradesContainer></UpgradesContainer>
      <button onClick={() => dispatch(sellData())}>Sell Data</button>
    </>
  );
}
