import React from "react";

import TheHeader from "./containers/TheHeader";
import Home from "./pages/home/Home";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FourZeroFour from "./pages/404";

export default function App() {
  // const loading = (
  //   <div className="pt-3 text-center">
  //     <div className="sk-spinner sk-spinner-pulse"></div>
  //   </div>
  // )
  return (
    <Router>
      <div className="wrapper">
        <TheHeader />
        <div className="body">
          {/* <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              )
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<FourZeroFour />} />
          </Routes>
        </div>
        {/* <TheFooter/> */}
      </div>
    </Router>
  );
}
