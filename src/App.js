import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import Upload from "./Containers/Upload/Upload";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/upload">
          <Upload />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <footer></footer>
    </Router>
  );
}
