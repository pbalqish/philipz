import { createBrowserRouter, redirect } from "react-router-dom";
import Toastify from "toastify-js";
import LoginPage from "../views/LoginPage";
import BaseLayout from "../views/BaseLayout";
import HomePage from "../views/HomePage";
import CreatePage from "../views/CreatePage";
import UpdatePage from "../views/UpdatePage";
import CategoriesPage from "../views/CategoriesPage";
import RegisterPage from "../views/RegisterPage";
import UpdateImage from "../views/UpdateImage";

const url = "https://phase2-aio.vercel.app";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage url={url} />,
    loader: () => {
      if (localStorage.access_token) {
        Toastify({
          text: "You already logged in",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#A91D3A",
          },
        }).showToast();
        return redirect("/");
      }
      return null;
    },
  },
  {
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.access_token) {
        Toastify({
          text: "Login to continue",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#A91D3A",
          },
        }).showToast();
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <HomePage url={url} />,
      },
      {
        path: "/add",
        element: <CreatePage url={url} />,
      },
      {
        path: "/categories",
        element: <CategoriesPage url={url} />,
      },
      {
        path: "/register",
        element: <RegisterPage url={url} />,
      },
      {
        path: "/edit/:id",
        element: <UpdatePage url={url} />,
      },
      {
        path: "/edit/image/:id",
        element: <UpdateImage url={url} />,
      },
    ],
  },
]);

export default router;
