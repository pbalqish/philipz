import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import HomePage from "../views/HomePage";
import ProductDetail from "../components/ProductDetail";

const url = "https://phase2-aio.vercel.app";
const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage url={url} />,
      },
      {
        path: "/detail/:id",
        element: <ProductDetail url={url} />,
      },
    ],
  },
]);

export default router;
