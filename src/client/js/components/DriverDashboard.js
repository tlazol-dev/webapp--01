import React, { Component } from 'react';
import { Row, Input, Button, NavBar } from 'react-materialize';
import request from 'superagent'


class DriverDashboard extends Component {

  _renderDriverDashboard(){
    console.log("rendering driver dash");
    return <div className="footer-driv">
       <h3>Driver Options</h3>
    </div>
  }

  _renderLoginPrompt(){
    console.log("rendering login prompt..");
    return <div className="footer-driv">
       <h3>"Para loguearte da click aqui"</h3>
      <a className="waves-effect waves-light btn">Log Out</a>
    </div>
  }

  // <a className="waves-effect waves-light btn">Logout</a>

  render(){

      let renderedJsx
      const props = this.props

      if (typeof this.props.appState.currentUser.email === "undefined"){
        renderedJsx = this._renderLoginPrompt()
     } else {
       renderedJsx = this._renderDriverDashboard()
     }


     console.log(renderedJsx);

    return (
      <div className="driver-dashboard">
        <h2> Driver Dashboard </h2>
        <h3> Bal bla bla </h3>

        <div className="menu">
          <i className="medium material-icons">menu</i>
        </div>

          <Row>
            <div className="img-dash-driv">
              <img src='/images/l.jpg'/>
            </div>
          </Row>

          {renderedJsx}


      </div>
    )
  }
}


export default DriverDashboard;
