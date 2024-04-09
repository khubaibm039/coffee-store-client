import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import AuthProvider from "./AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
