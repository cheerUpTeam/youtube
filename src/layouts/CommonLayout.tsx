import { Outlet } from "react-router-dom";

function CommonLayout() {
  return (
    <div>
      <header>header</header>
      <main>
        main
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default CommonLayout;
