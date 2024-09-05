import ReactQueryProvider from "@providers/ReactQueryProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import routes from "@routes/routes.ts";
import "@styles/globals.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId="1069756463356-f7d08l2n9mn58pdhnro4vsldoks37nhm.apps.googleusercontent.com">
    <ReactQueryProvider>
      <RouterProvider router={routes} />
    </ReactQueryProvider>
  </GoogleOAuthProvider>
  // </React.StrictMode>
);
