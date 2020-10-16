import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import DashboardHome from './components/Dashboard/DashboardHome/DashboardHome';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import Review from './components/Dashboard/Review/Review';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddService from './components/Dashboard/Admin/AddService/AddService';
import Services from './components/Dashboard/Admin/Services/Services';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }} className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <PrivateRoute exact path="/dashboard">
            <DashboardHome />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/order/:name">
            <DashboardHome />
          </PrivateRoute>

          <PrivateRoute path="/dashboard/service-list">
            <ServiceList />
          </PrivateRoute>

          <PrivateRoute path="/dashboard/add-service">
            <AddService />
          </PrivateRoute>

          <PrivateRoute path="/dashboard/all-services">
            <Services />
          </PrivateRoute>

          <PrivateRoute path="/dashboard/make-admin">
            <MakeAdmin />
          </PrivateRoute>

          <PrivateRoute path="/dashboard/review">
            <Review />
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
