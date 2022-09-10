import React from "react";
import Sidemenu from "./Sidemenu";
import Main from "./Main";
import Footer from "./Footer";
import Logout from "./Logout";
import { Routes, Route } from "react-router";
import Login from "./Login";
import AddCategories from "./AddCategories";

function Master() {
  return (
    <div id="wrapper">
      <Sidemenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Main />
        </div>
        <Footer />
      </div>
      <Logout />
    </div>
  );
}

export default Master;
