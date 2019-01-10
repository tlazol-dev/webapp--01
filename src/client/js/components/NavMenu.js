import React, { Component } from 'react';
import { Navbar, NavItem, Icon, } from 'react-materialize';
import { Link } from 'react-router-dom';
import request from 'superagent'


class NavMenu extends Component{


  render(){

    return(
      <Navbar className="title" brand='Amiga' className="nav">
        <NavItem className="icon" href='get-started.html'><Icon className="i">face</Icon>Mis datos</NavItem>
        <NavItem className="icon" href='components.html'><Icon className="i">directions_car</Icon><Link to="/journeys">Mis viajes
        </Link></NavItem>
        <NavItem className="icon" href='get-started.html'><Icon className="i">attach_money</Icon>Método de Pago</NavItem>
        <NavItem className="icon" href='get-started.html'><Icon className="i">star_rate</Icon>Mis calificaciones</NavItem>
      </Navbar >
    )
  }
}

export default NavMenu;
