import { Outlet, useRouteLoaderData } from "react-router-dom";
import OverviewSidebar from "../Components/OverviewSidebar";


export function OverviewLayout(props) {
  //   let userInfor = useRouteLoaderData("root");

  return (
    <div className="flex flex-row overflow-hidden h-[100vh]">
      <OverviewSidebar />
      <div className="overflow-y-auto flex-1">
        <Outlet />
      </div>
    </div>
  );
}
