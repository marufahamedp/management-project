import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import PageNotFound from "views/PageNotFound";
import About from "views/About";
import Contact from "views/Contact";
import Blog from "views/Blog";
import ContextWrapper from "context/ContextWrapper";
import reportWebVitals from "reportWebVitals";
import StudentProfile from "views/admin/Students/StudentProfile";

ReactDOM.render(
  <React.StrictMode>
    <ContextWrapper>
    <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/studentprofile/:studentID" exact component={StudentProfile} />
      <Route path="/" exact component={Index} />
      <Route path="/home" exact component={Index} />
      <Route path="*"  component={PageNotFound} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/pagenotfound" />
    </Switch>
  </BrowserRouter>
    </ContextWrapper>
  </React.StrictMode>



 ,
  document.getElementById("root")
);
reportWebVitals();