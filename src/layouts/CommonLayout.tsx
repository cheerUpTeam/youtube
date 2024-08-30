import SideMenu from "@layouts/SideMenu";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchHeader from "./SearchHeader";

function CommonLayout() {
  const { pathname } = useLocation();
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const isDetail = pathname.includes("watch");

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [localStorage]);

  return (
    <div className="bg-basic-01 flex flex-col h-screen [&_*]:text-font-01">
      {menuToggle && <Sidebar setToggle={setMenuToggle} />}
      {searchToggle && <SearchHeader setSearchToggle={setSearchToggle} />}
      {!searchToggle && (
        <Header
          setMenuToggle={setMenuToggle}
          setSearchToggle={setSearchToggle}
        />
      )}

      <main className="dark:bg-black flex gap-5 max-w-[3100px] mt-16 mx-auto w-full">
        {!isDetail && <SideMenu />}
        <Outlet />
      </main>
    </div>
  );
}

export default CommonLayout;
