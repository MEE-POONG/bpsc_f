import React from "react";

const Home = React.lazy(() => import("./pages/home/Home"));
const About = React.lazy(() => import("./pages/about"));
const Sharing = React.lazy(() => import("./pages/sharing"));
const Leaning = React.lazy(() => import("./pages/leaning"));
const Doctor = React.lazy(() => import("./pages/doctor"));
const Gallery = React.lazy(() => import("./pages/gallery"));
const Album = React.lazy(() => import("./pages/gallery/GalleryAlbum"));
const CreateShare = React.lazy(() => import("./pages/createshare"));
const Login = React.lazy(() => import("./pages/login"));
const Profile = React.lazy(() => import("./pages/profile"));
const FourZeroFour = React.lazy(() => import("./pages/404"));

const routes = [
  { path: "/", exact: true, name: "HOME", component: Home },
  { path: "/home", exact: true, name: "HOME", component: Home },
  { path: "/about", name: "ABOUT US", component: About },
  { path: "/sharing", name: "SHARING", component: Sharing },
  { path: "/e-leaning", name: "LEANING", component: Leaning },
  { path: "/doctor", name: "DOCTOR", component: Doctor },
  { path: "/gallery", name: "GALLERY", component: Gallery },
  { path: "/gallery/:id", exact: true, name: "GALLERYID", component: Album },
  { path: "/login", name: "LOGIN", component: Login },
  { path: "/profile", name: "PROFILE", component: Profile },
  { path: "/CreateShare", name: "PROFILE", component: CreateShare },


  { path: "*", name: "404", component: FourZeroFour }
];

export default routes;
