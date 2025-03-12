import CommonLayout from "@layouts/CommonLayout";
import ErrorLayout from "./ErrorLayout";
import Home from "@pages/home/Home";
import Detail from "@pages/Detail/Detail";
import Results from "@pages/Results/Results";
import ScrollToTop from "@lib/ScrollToTop";
import { Liked } from "@pages/liked/Liked";

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
    { path: "liked", element: <Liked /> },
  ],
  errorElement: <ErrorLayout />,
};
