import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import HomePage from "../views/HomePage";

const url = "https://phase2-aio.vercel.app";
const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage url={url} />,
      },
    ],
  },
]);

export default router;
