import React from "react";

const Home = React.lazy(() => import("./pages/home/Home"));
const About = React.lazy(() => import("./pages/about"));
const Sharing = React.lazy(() => import("./pages/sharing"));

const FourZeroFour = React.lazy(() => import("./pages/404"));

const routes = [
  { path: "/", exact: true, name: "HOME", component: Home },
  { path: "/home", exact: true, name: "HOME", component: Home },
  { path: "/about", name: "ABOUT US", component: About },
  { path: "/sharing", name: "SHARING", component: Sharing },
  { path: "*", name: "404", component: FourZeroFour }
];

export default routes;
