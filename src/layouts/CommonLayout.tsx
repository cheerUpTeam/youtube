import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

function CommonLayout() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`flex flex-col w-screen relative px-5 `}>
      <Sidebar toggle={toggle} />
      <Header toggle={toggle} setToggle={setToggle} />
      <main className="max-w-[1220px] mx-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default CommonLayout;
