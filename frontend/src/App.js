import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import { BrowserRouter as Router,Routes } from "react-router-dom";
import { routeMap } from "./routeMap";
import { routeMapToRoutes } from "./utils/routeMapToRoutes";
import { Header } from "./components/organisms/Header";

export default function App() {
  return (
    <Router>
        <Header/>
        <Routes>
            {routeMapToRoutes(routeMap)}
        </Routes>
    </Router>
  );
}