import CommonLayout from "@layouts/CommonLayout";
import ErrorLayout from "./ErrorLayout";
import Home from "@pages/home/Home";
import Detail from "@pages/home/Detail";

export default {
  path: "/",
  element: <CommonLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: "detail", element: <Detail title="디테일" /> },
  ],
  errorElement: <ErrorLayout />,
};
