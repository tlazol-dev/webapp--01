import React, { Component } from 'react';
import { Row, Input, Button, Icon } from 'react-materialize';
import request from 'superagent';
import NotificationSystem from 'react-notification-system';
import PubSub from "pubsub-js";

class Login extends Component {

  _handleLoginAttempt(){
    console.log(".....");
    console.log(this.refs.emailInput.input.value);
    console.log(this.refs.pwInput.input.value);

    const emailInput = this.refs.emailInput.input.value
    const pwInput = this.refs.pwInput.input.value
    const component = this

    request
      .post("/auth/login")
      .send({email: emailInput, password: pwInput})
      .then((serverRes)=>{

        const user = serverRes.body
          PubSub.publish("updateAppState", {
            currentUser : user
          })

          console.log(this.props.match.url);

          if(this.props.match.url === "/passenger/login"){
            component.props.history.push('/passenger/dash')
          }

            if (this.props.match.url === "/driver/login"){
              console.log("fetching for user", user.id);

              request.get(`/api/driver_accounts/search?user_id=${user.id}`)
                .then((serverRes)=>{
                     console.log(serverRes.body);
                    const driverAcct = serverRes.body[0]
                    console.log("driver acct from server" );
                    console.log(serverRes.body);
                    if(driverAcct.user_id){
                      component.props.history.push('/driver/dash')
                    }
                })
            }

      })
      .catch((e)=>{
        console.log(e);
        component.refs.notificationSystem.addNotification({
          title: 'Unauthorized',
          message: 'Your email or password was incorrect',
          level: 'error'
        })
      })
  }

  render(){
    console.log(this.props);
    let loginTypeText

    if(this.props.match.path === "/passenger/login") loginTypeText = "Passenger"
    if(this.props.match.path === "/driver/login") loginTypeText = "Driver"

    return (
      <div className="loginview" className="login-header">
          <h4> Login - {loginTypeText} </h4>
          <h5> Ingresa tu email y contraseña para ingresar </h5>
        <Row>
          <Input  ref="emailInput" type="email" label="Email" s={12} />
          <Input  ref="pwInput" type="password" label="Password" s={12} />
          <div className="loginview__btn-container">
            <Button className="btn" onClick={(evt)=>{ this._handleLoginAttempt(evt) }} waves='light'>Enviar<Icon left>send</Icon></Button>
          </div>
        </Row>

           <NotificationSystem ref="notificationSystem" />

      </div>
    );
  }
}

export default Login;
