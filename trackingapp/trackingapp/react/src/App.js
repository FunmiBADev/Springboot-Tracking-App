// import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task';
import Home from './Home';
import My_dashboard from './My_dashboard';
import {Table} from 'react-bootstrap/Table';
import React, { Component,Router,Route,Switch } from 'react';


class App extends Component {
  state = {  }
  render() { 
      return ( 
          <Router>
              <Switch>
                   <Route path='/' exact={true} component={Home}/>
                   <Route path='/task' exact={true} component={Task}/>
                   <Route path='/my_dashboard' exact={true} component={My_dashboard}/>
              </Switch>
           </Router>
      );
  }
}

export default App;