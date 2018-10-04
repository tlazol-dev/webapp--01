import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PubSub from "pubsub-js"
import Home from './components/Home.js';
import Login from './components/Login.js';
import PassengersDashboard from './components/PassengersDashboard.js';
import DriverDashboard from './components/DriverDashboard.js';
import DriveService from './components/DriveService.js';
import ImageValidation from './components/ImageValidation.js';
import NavMenu from './components/NavMenu.js'

import request from 'superagent';

class App extends React.Component {

  constructor(...args){
      super(...args)
      this.state = {
        currentUser: {}
      }
  }



 componentWillMount(){
   const component = this

   PubSub.subscribe("updateAppState", (evtName, newStateObj)=> {
     console.log(newStateObj);
     if(typeof newStateObj !== "object") return
     component.setState(newStateObj)
   })

   request.get('/auth/current')
     .then((serverRes)=>{
       const userInfo = serverRes.body
       component.setState({
         currentUser : userInfo
       })
     })
 }

  render (){

    const appComponent = this


    console.log("APP state ");
    console.log(this.state);

    return <div>
      <NavMenu />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/passenger/login' component={(routerWProps) => <Login {...routerWProps} />  }/>
        <Route exact path='/driver/login' component={(routerWProps) => <Login {...routerWProps} />  }/>
        <Route exact path='/img/validation' component={ImageValidation}/>
        <Route exact path='/passenger/dash' component={PassengersDashboard}/>
        <Route exact path='/driver/dash' component={ (thePropsWithRouterInfo) => {
            return <DriverDashboard
              {...thePropsWithRouterInfo}
                appState={ this.state }
            />
          }}
          />
        <Route exact path='/driver/service' component={DriveService}/>
      </Switch>
    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
