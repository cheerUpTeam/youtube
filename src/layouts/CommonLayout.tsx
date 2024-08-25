import SideMenu from "@layouts/SideMenu";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function CommonLayout() {
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);
  const isDetail = pathname.includes("watch");

  return (
    <div className="flex flex-col relative h-screen">
      {toggle && <Sidebar setToggle={setToggle} />}

      <Header toggle={toggle} setToggle={setToggle} />

      <main className="flex gap-5 max-w-[3100px] mx-auto w-full">
        {!isDetail && <SideMenu />}
        <Outlet />
      </main>
    </div>
  );
}

export default CommonLayout;
