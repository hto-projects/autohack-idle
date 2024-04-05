import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import MainAuth from "./MainAuth";
import { useState } from "react";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const AuthContainer = () => {
  const { userInfo } = useSelector((state: any) => state.auth);
  const [screenShowing, setScreenShowing] = useState<string>();

  let screenComponent;

  switch (screenShowing) {
    case "sign in":
      screenComponent = (
        <LoginScreen setScreen={setScreenShowing}></LoginScreen>
      );
      break;
    case "register":
      screenComponent = (
        <RegisterScreen setScreen={setScreenShowing}></RegisterScreen>
      );
      break;
    default:
      screenComponent = (
        <MainAuth userInfo={userInfo} setScreen={setScreenShowing}></MainAuth>
      );
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  return (
    <div>
      <h2>User Information</h2>
      {screenComponent}
    </div>
  );
};

export default AuthContainer;
