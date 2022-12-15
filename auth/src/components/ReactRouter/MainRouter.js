import React from "react";
import { Route } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";
import Profile from "../pages/Profile";
import AdminSignin from "../pages/AdminSignin";
import View from "../pages/View";
import Edit from "../pages/Edit";
const MainRouter = () => {
  return (
    <div>
      <Route
        exact
        path='/'>
        <Dashboard />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/signin'>
        <Signin />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route
        exact
        path='/admin'>
        <Admin />
      </Route>
      <Route path='/admin/signin'>
        <AdminSignin />
      </Route>
      <Route path='/admin/view/:id'>
        <View />
      </Route>
      <Route path='/admin/edit/:id'>
        <Edit />
      </Route>
    </div>
  );
};

export default MainRouter;
