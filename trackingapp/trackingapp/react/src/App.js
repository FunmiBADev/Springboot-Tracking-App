// import React from 'react';
import logo from "./logo.svg";
import React, {Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Task from "./Task";
import Home from "./Home";
import My_dashboard from "./My_dashboard";
import Create_task from "./Create_task";
import EditTaskForm from "./EditTaskForm";
import Signup from "./Signup";
import NotFound from "./NotFound";
import Footer from "./Footer";
import Developer from "./Developer";
import Find_category from "./Find_category";
import Find_priority from "./Find_priority";
import Find_status from "./Find_status";


class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/dashboard" exact={true} component={Task} />
          <Route path="/create_task" exact={true} component={Create_task} />
          <Route path="/my_dashboard" exact={true} component={My_dashboard} />
          <Route path="/edittaskform" exact={true} component={EditTaskForm} />
          <Route path="/signup" exact={true} component={Signup} />
          <Route path="/developer" exact={true} component={Developer} />
          <Route path='/find_category' exact={true} component ={Find_category} />
          <Route path='/find_priority' exact={true} component ={Find_priority} />
          <Route path='/find_status' exact={true} component ={Find_status} />
          <Route path='/404' exact={true} component ={NotFound} />
          <Redirect from='*' to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
