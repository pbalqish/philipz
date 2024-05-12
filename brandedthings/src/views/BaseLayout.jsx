import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footers from "../components/Footers";

export default function BaseLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footers />
    </>
  );
}
