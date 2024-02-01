import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BacktoTop from "../src/components/Button/BacktoTop/BacktoTop.jsx";
import routesConfig from "./assets/data/routesConfig";
import "./styles/App.css";
import routesConfig from "./utils/routesConfig.jsx";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              exact
              path={route?.path}
              element={route?.element}
            />
          ))}
        </Routes>
      </Router>
      <BacktoTop />
    </div>
  );
};

export default App;
