import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignupForm from "./components/Signup/SignupForm.tsx";
import LoginForm from "./components/LoginForm/LoginForm.tsx";
import Welcome from "./components/Welcome/Welcome.tsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.tsx";
import Feed from "./components/Feed/Feed.tsx";
import Profile from "./components/Profile/Profile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorMessage label="Page not found" />,
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
