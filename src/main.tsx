import ReactQueryProvider from "@providers/ReactQueryProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import routes from "@routes/routes.ts";
import "@styles/globals.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <ReactQueryProvider>
      <RouterProvider router={routes} />
    </ReactQueryProvider>
  </GoogleOAuthProvider>
  // </React.StrictMode>
);
