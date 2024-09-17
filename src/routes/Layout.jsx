import { Outlet, useRouteLoaderData } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

export function Layout(props) {
  //   let userInfor = useRouteLoaderData("root");

  return (
    <div className="flex flex-row overflow-hidden h-[100vh]">
      <Sidebar />
      <div className="overflow-y-auto flex-1">
        <Outlet />
      </div>
    </div>
  );
}
