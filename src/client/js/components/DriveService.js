import React, { Component } from 'react';
import { Row, Input, Button, Icon } from 'react-materialize';
import request from 'superagent'
import DriverDashboard from './DriverDashboard.js';
import ImageValidation from './ImageValidation.js';

class DriveService extends Component {
  render(){
    return (
      <div className="driver-service">
        <h2> Driver Service </h2>
        <h3> Bal bla bla </h3>

        <Row>
        <div className="img-dash-pass">
          <img src='/images/l.jpg'/>
        </div>
            <ImageValidation />
        </Row>

        <div className="footer-pass">
          <a className="waves-effect waves-light btn">Logout</a>
        </div>
      </div>
    );
  }
}


export default DriveService;
