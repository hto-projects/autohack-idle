import React from "react";
import ReactDOM from "react-dom/client";
import AutoHack from "./AutoHack";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store.js";
import { Provider } from "react-redux";
import Profile from "./components/Auth/Profile.js";
import PrivateRoute from "./components/Auth/PrivateRoute.js";
import StartScreen from "./StartScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AutoHack />}>
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
