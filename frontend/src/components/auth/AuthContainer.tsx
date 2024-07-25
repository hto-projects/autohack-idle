import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";
import MainAuth from "./MainAuth";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function AuthContainer() {
  const { userInfo } = useSelector((state: any) => state.auth);
  const [screenShowing, setScreenShowing] = useState<string>();

  let screenComponent;

  switch (screenShowing) {
    case "login":
      screenComponent = <Login setScreen={setScreenShowing}></Login>;
      break;
    case "register":
      screenComponent = <Register setScreen={setScreenShowing}></Register>;
      break;
    default:
      screenComponent = <MainAuth userInfo={userInfo} setScreen={setScreenShowing}></MainAuth>;
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  return <div style={{ textAlign: "center" }}>{screenComponent}</div>;
}
