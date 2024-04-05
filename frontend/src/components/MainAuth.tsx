import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

const MainAuth = ({ userInfo, setScreen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall(null).unwrap();
      dispatch(logout(null));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {userInfo ? (
        <>
          <p>Logged In</p>
          <p>Hi, {userInfo.name}</p>
          <Button onClick={logoutHandler} variant="dark">
            Log Out
          </Button>
        </>
      ) : (
        <>
          <Button onClick={() => setScreen("sign in")} variant="light">
            Sign In
          </Button>
          <Button onClick={() => setScreen("register")} variant="light">
            Register
          </Button>
        </>
      )}
    </div>
  );
};

export default MainAuth;
