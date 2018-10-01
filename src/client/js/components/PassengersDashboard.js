import React, { Component } from 'react';
import { Row, Input, Button, Icon } from 'react-materialize';
import request from 'superagent'
import Login from './Login.js'

class PassengersDashboard extends Component {
  render(){
    return (
      <div className="passenger-dashboard">
        <h2> Passenger Dashboard </h2>
        <h3> Bal bla bla </h3>

          <div className="menu">
            <i className="medium material-icons">menu</i>
          </div>

          <Row>

          <div className="img-dash-pass">
            <img src='/images/l.jpg'/>
          </div>

          <div className="input-info">

            <Input type="text" label="Punto de partida" s={12} />
            <Input type="text" label="Destino" s={12} />
          </div>

          </Row>

          <div className="footer-pass">
            <i className="medium material-icons">directions_car</i>
            <a className="waves-effect waves-light btn">Logout</a>
          </div>
      </div>

    );
  }
}

export default PassengersDashboard;
