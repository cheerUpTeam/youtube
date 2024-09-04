import CommonLayout from "@layouts/CommonLayout";
import ErrorLayout from "./ErrorLayout";
import Home from "@pages/home/Home";
import Detail from "@pages/Detail/Detail";
import Results from "@pages/Results/Results";

export default {
  path: "/",
  element: <CommonLayout />,
  errorElement: <ErrorLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: "results/:keyword", element: <Results /> },
    { path: "watch/:id", element: <Detail /> },
  ],
};
