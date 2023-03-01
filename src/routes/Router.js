import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
// const Alerts = lazy(() => import("../views/ui/Alerts"));
// const Badges = lazy(() => import("../views/ui/Badges"));
// const Buttons = lazy(() => import("../views/ui/Buttons"));
// const Cards = lazy(() => import("../views/ui/Cards"));
// const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Frro = lazy(() => import("../views/ui/Frro"));
const Checkin = lazy(() => import("../views/ui/Checkin"));
const RequestsTable = lazy(() => import("../views/ui/RequestsTable"));
const ApprovalForm = lazy(() => import("../views/ui/ApprovalForm"));
//const Forms = lazy(() => import("../views/ui/MultistepForm"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
//const Example = lazy(() => import("../views/ui/ExampleForms"));
const RoomsTree = lazy(() => import("../components/dashboard/RoomsTree"));


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/frro", exact: true, element: <Frro /> },
      { path: "/rooms", exact: true, element: <RoomsTree /> },
/*      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> }, 
      */
      { path: "/checkin", exact: true, element: <Checkin /> },
      // { path: "/table", exact: true, element: <Tables /> },
      { path: "/requests", exact: true, element: <RequestsTable /> },
      { path: "/viewrequest", exact: true, element: <ApprovalForm /> },
      // { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
