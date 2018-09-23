import React, { Component } from 'react';

import { Row, Input, Button, Icon } from 'react-materialize';


class Login extends Component {
  render(){
    return (
      <div className="loginview">
        <h2> Login </h2>
        <h3> Bal bla bla </h3>

        <Row>
          <Input type="email" label="Email" s={12} />
          <Input type="password" label="password" s={12} />
          <div className="loginview__btn-container">
            <Button waves='light'>Enviar<Icon left>cloud</Icon></Button>
          </div>
        </Row>


      </div>

    );
  }
}


export default Login;
