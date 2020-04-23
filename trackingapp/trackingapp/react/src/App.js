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
          <Route path='/404' exact={true} component ={NotFound} />
          <Redirect from='*' to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
