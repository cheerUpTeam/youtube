import CommonLayout from "@layouts/CommonLayout";
import ErrorLayout from "./ErrorLayout";
import Home from "@pages/home/Home";
import Detail from "@pages/home/Detail";
import Results from "@pages/home/Results";

export default {
  path: "/",
  element: <CommonLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: "results/:keyword", element: <Results /> },
    { path: "detail", element: <Detail title="디테일" /> },
  ],
  errorElement: <ErrorLayout />,
};
