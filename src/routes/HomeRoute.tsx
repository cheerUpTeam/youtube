import CommonLayout from "@layouts/CommonLayout";
import ScrollToTop from "@lib/ScrollToTop";
import Detail from "@pages/Detail/Detail";
import Home from "@pages/home/Home";
import { Liked } from "@pages/liked/Liked";
import Results from "@pages/Results/Results";
import { Subscriptions } from "@pages/subscriptions/subscriptions";
import ErrorLayout from "./ErrorLayout";

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
    { path: "subscriptions", element: <Subscriptions /> },
  ],
  errorElement: <ErrorLayout />,
};
