import { Outlet } from "react-router-dom";
import { TopNavBar } from "../components/index";

export default function Layout() {
  return (
    <div>
      <TopNavBar />
      <Outlet />
    </div>
  );
}
