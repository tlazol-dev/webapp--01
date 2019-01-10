import React, { Component } from 'react';
import { Button, Icon, Link } from 'react-materialize';
import Login from './Login.js';
import PubSub from "pubsub-js";

class Home extends Component {


  _routeTo(destinationPath){
    this.props.history.push(destinationPath)
  }

  render(){
    return (
      <div className="home">
       <div className="welcome">
        <h2> Welcome to Amiga </h2>
        <p>La confianza de llegar a tu destino</p>
          <a href='get-started.html'>Quienes somos</a>
          <a href='get-started.html'>Qué hacemos</a>
        </div>
        <div className="btn-register">
          <Button onClick={ ()=> { this._routeTo("/passenger/login")} } className="btn-register-driver" waves='light'>Quiero manejar<Icon right>local_taxi</Icon></Button>
          <Button className="btn-register-passenger" waves='light'>Quiero un viaje<Icon right>pan_tool</Icon></Button>
        </div>
      </div>
    );
  }
}

export default Home;
