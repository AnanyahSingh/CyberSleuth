import React from "react";
import * as ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard.jsx";
import PageOne from "./Components/PageOne.jsx";
import PageTwo from "./Components/PageTwo.jsx";
import PageThree from "./Components/PageThree.jsx";
import PageFour from "./Components/PageFour.jsx";
import PageFive from "./Components/PageFive.jsx"
import PageSix from "./Components/PageSeven.jsx";
import { Layout } from "./routes/Layout.jsx";
import { OverviewLayout } from "./routes/OverviewLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/archivedcases",
        element: <div>Welcome to Archived Cases</div>,
      },
      {
        path: "/newCases",
        element: <PageOne />,
      },
      
    ],
  },
  {
    path: "overview",
    element: <OverviewLayout />,
    children: [
            {
        index: true,
        element: <PageTwo />,
      },
      {
        path: "newevidence",
        element: <PageThree />,
      },
            {
        path: "timeline",
        element: <PageFour />
      },
      {
        path: "ReportAnalytics",
        element: <PageFive />,
      },
      {
        path: "NewSuspect",
        element: <PageSix />,
      },

    ]
  }
  // {
  //   // path: "/overview",
  //   // element: <OverviewLayout />,
  //   // children: [
  //   //   {
  //   //     index: true,
  //   //     element: <div>Test</div>,
  //   //   },
      // {
      //   path: "/PageTwo",
      //   element: <PageTwo />,
      // },
      
      // {
      //   path: "/PageThree",
      //   element: <PageThree />,
      // },
      // {
      //   path: "/PageFour",
      //   element: <PageFour />,
      // },
      // {
      //   path: "/PageFive",
      //   element: <PageFive />,
      // },
      // {
      //   path: "/PageSix",
      //   element: <PageSix />,
      // },
  //   ]
  // },
  
  

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
