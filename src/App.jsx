import React, {Suspense} from "react";

import TheHeader from "./controllers/TheHeader";
import "./assets/css/App.css";
import "./assets/scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TheLoginFloating from "./controllers/TheLoginFloating";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import routes from "./routes.js";

import {Button} from "react-bootstrap";
export default function App() {
  const loading = <div className="loader-body pt-3 text-center">LOADING...</div>;
  return (
    <Router>
      <div className="wrapper">
        <TheHeader />
        <div className="body pt-3">
          <Suspense fallback={loading}>
            <Routes>
              {routes.map((route, idx) => {
                return (
                  route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={+route?.exact}
                      name={route.name}
                      element={<route.component />}
                    />
                  )
                );
              })}
            </Routes>
          </Suspense>
          {localStorage.getItem("BPSC_USER_LOGIN") !== "true" ? (
            <div className="floating-login">
              <TheLoginFloating />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Router>
  );
}
