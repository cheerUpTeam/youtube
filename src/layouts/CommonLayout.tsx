import SideMenu from "@layouts/SideMenu";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchHeader from "./SearchHeader";
import useMenuStore from "../store/menuStroe";
import useSearchStore from "../store/searchStore";
import useDarkStore from "../store/darkStroe";

function CommonLayout() {
  const { pathname } = useLocation();

  const { toggleDarkMode } = useDarkStore();
  const { menuMode } = useMenuStore();
  const { searchMode } = useSearchStore();

  const isDetail = pathname.includes("watch");

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      toggleDarkMode();
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [localStorage]);

  return (
    <div className="min-w-[400px] bg-basic-01 flex  flex-col h-screen [&_*]:text-font-01">
      {menuMode && <Sidebar />}
      {searchMode && <SearchHeader />}
      {!searchMode && <Header />}

      <main className="dark:bg-black flex max-w-[3100px] mt-16 mx-auto w-full">
        {!isDetail && <SideMenu />}
        <Outlet />
      </main>
    </div>
  );
}

export default CommonLayout;
