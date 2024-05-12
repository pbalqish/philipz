import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function BaseLayout() {
  return (
    <>
      <NavBar />
      <SideBar />
      <Outlet />
    </>
  );
}
