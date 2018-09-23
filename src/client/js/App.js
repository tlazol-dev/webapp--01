import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home.js';
import Login from './components/Login.js';
import PassengersDashboard from './components/PassengersDashboard.js';
import PassengerService from './components/PassengerService.js';
import DriverDashboard from './components/DriverDashboard.js';
import DriveService from './components/DriveService.js';


class App extends React.Component {
  render (){
    return <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/passengerdash' component={PassengersDashboard}/>
        <Route exact path='/passengerservice' component={PassengerService}/>
        <Route exact path='/driverdash' component={DriverDashboard}/>
        <Route exact path='/driverservice' component={DriveService}/>
      </Switch>
    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
