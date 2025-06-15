import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Form from "./Pages/form.tsx";
import Events from "./Pages/Events.tsx";
import MyEvents from "./Pages/MyEvents.tsx";
import RegisterEvent from "./RegisterEvent.tsx";

import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Events />,
  },
  {
    path: "/Form",
    element: <Form />,
  },
  {
    path: "/MyEvents",
    element: <MyEvents />,
  },
  {
    path: "/Register",
    element: <RegisterEvent />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
