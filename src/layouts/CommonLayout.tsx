import SideMenu from "@layouts/SideMenu";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function CommonLayout() {
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);
  const isDetail = pathname.includes("watch");

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [localStorage]);

  console.log(document.documentElement.classList);

  console.log("123", matchMedia);

  return (
    <div className={`bg-basic-01 flex flex-col relative h-screen`}>
      {toggle && <Sidebar setToggle={setToggle} />}

      <Header toggle={toggle} setToggle={setToggle} />

      <main className="dark:bg-black flex gap-5 max-w-[3100px] mx-auto w-full">
        {!isDetail && <SideMenu />}
        <Outlet />
      </main>
    </div>
  );
}

export default CommonLayout;
