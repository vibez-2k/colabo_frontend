import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../pages/Layout/layout";
import { ErrorPage } from "../pages/Error/error";
import Goals from "../pages/goals/goals";
import Roadmap from "../pages/goals/roadmap";
import Details from "../pages/goals/details";
import Projectconfig from "../components/ProjectConfiguration/Projectconfig";
import Phasegenerator from "../components/Phasegenerator/Phasegenerator";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Goals />,
        children: [
          {
            index: true, // This makes the "/" route redirect automatically
            element: <Navigate to="roadmap" />, // Redirect to "roadmap"
          },
          {
            path: "roadmap",
            element: <Roadmap />,
          },
          {
            path: "details",
            element: <Details />,
          },
          {
            path: "project",
            element: <Projectconfig />,
          },
          {
            path: "phase",
            element: <Phasegenerator />,
          },
        ],
      },
      {
        path: "/sales",
        element: <div>car</div>,
        children: [
          {
            index: true, // This makes the "/sales" route redirect automatically
            element: <Navigate to="summary" />, // Redirect to "catalog"
          },
        ],
      },
      {
        path: "/customers",
        element: <div>customers</div>,
      },
      {
        path: "/items",
        element: <div>items</div>,
      },
      {
        path: "/inventory",
        element: <div>inventory</div>,
      },
      {
        path: "/alerts",
        element: <div>alerts</div>,
      },
    ],
  },
]);
