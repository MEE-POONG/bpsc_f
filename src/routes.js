import React from "react";

const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/about"));
const Sharing = React.lazy(() => import("./pages/sharing"));
const SharingList = React.lazy(() => import("./pages/sharing/SharingList"));
const Leaning = React.lazy(() => import("./pages/leaning"));
const LeaningList = React.lazy(() => import("./pages/leaning/LeaningList"));
const Doctor = React.lazy(() => import("./pages/doctor"));
const ContactDoctor = React.lazy(() => import("./pages/doctor/ContactDoctor"));
const Gallery = React.lazy(() => import("./pages/gallery"));
const GalleryAlbum = React.lazy(() => import("./pages/gallery/GalleryAlbum"));
const CreateShare = React.lazy(() => import("./pages/createshare"));
const EditShare = React.lazy(() => import("./pages/editshare"));
const EditLeaning = React.lazy(() => import("./pages/editleaning"));
const EditGallery = React.lazy(() => import("./pages/editgallery"));
const CreateGallery = React.lazy(() => import("./pages/creategallery"));
const CreateLeaning = React.lazy(() => import("./pages/createleaning"));
const CreateEvent = React.lazy(() => import("./pages/createevent"));
const EditEvent = React.lazy(() => import("./pages/editevent"));
const CreateTAG = React.lazy(() => import("./pages/createtag"));
const EditTAG = React.lazy(() => import("./pages/edittag"));
const Login = React.lazy(() => import("./pages/login"));
const Profile = React.lazy(() => import("./pages/profile"));
const Verify = React.lazy(() => import("./pages/verify"));
const RePassword = React.lazy(() => import("./pages/repassword"));

const FourZeroFour = React.lazy(() => import("./pages/404"));

const routes = [
  {path: "/", exact: true, name: "HOME", component: Home},
  {path: "/home", exact: true, name: "HOME", component: Home},
  {path: "/about", name: "ABOUT US", component: About},
  {path: "/sharing", name: "SHARING", component: Sharing},
  {
    path: "/sharing/:id",
    exact: true,
    name: "SHARING ID",
    component: SharingList,
  },
  {path: "/e-leaning", name: "LEANING", component: Leaning},
  {
    path: "/e-leaning/:id",
    exact: true,
    name: "Eleaning ID",
    component: LeaningList,
  },
  {path: "/doctor", name: "DOCTOR", component: Doctor},
  {path: "/ContactDoctor/:id", name: "CONTACT DOCTOR", component: ContactDoctor},
  {path: "/gallery", name: "GALLERY", component: Gallery},
  {
    path: "/gallery/:id",
    exact: true,
    name: "GALLERY ID",
    component: GalleryAlbum,
  },
  {path: "/login", name: "LOGIN", component: Login},
  {path: "/profile", name: "PROFILE", component: Profile},
  {path: "/create-share", name: "CREATE SHARE", component: CreateShare},
  {path: "/edit-share/:id", name: "EDIT SHARE", component: EditShare},
  {path: "/create-leaning", name: "CREATE LEANING", component: CreateLeaning},
  {path: "/edit-leaning/:id", name: "EDIT LEANING", component: EditLeaning},
  {path: "/create-gallery", name: "CREATE Gallery", component: CreateGallery},
  {path: "/edit-gallery/:id", name: "EDIT Gallery", component: EditGallery},
  {path: "/create-event", name: "CREATE EVENT", component: CreateEvent},
  {path: "/edit-event/:id", name: "EDIT EVENT", component: EditEvent},
  {path: "/create-tag", name: "CREATE TAG", component: CreateTAG},
  {path: "/edit-tag/:id", name: "EDIT TAG", component: EditTAG},
  {path: "/verify", name: "VERIFY", component: Verify},
  {path: "/changeForgetPassword", name: "RE PASSWORD", component: RePassword},

  {path: "*", name: "404", component: FourZeroFour},
];

export default routes;
