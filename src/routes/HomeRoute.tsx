import CommonLayout from "@layouts/CommonLayout";
import ErrorLayout from "./ErrorLayout";
import Home from "@pages/home/Home";
import Detail from "@pages/Detail/Detail";
import Results from "@pages/Results/Results";
import ScrollToTop from "@lib/ScrollToTop";

export default {
  path: "/",
  element: (
    <ScrollToTop>
      <CommonLayout />
    </ScrollToTop>
  ),
  children: [
    { index: true, element: <Home /> },
    { path: "results/:keyword", element: <Results /> },
    { path: "watch/:id", element: <Detail /> },
  ],
  errorElement: <ErrorLayout />,
};
