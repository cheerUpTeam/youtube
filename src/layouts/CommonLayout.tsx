import { Outlet } from "react-router-dom";
import Header from "./Header";

function CommonLayout() {
  return (
    <div className="flex flex-col w-screen px-5">
      <Header />
      <main className="max-w-[1220px] mx-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default CommonLayout;
