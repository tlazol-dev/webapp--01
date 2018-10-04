import React, { Component } from 'react';
import { Navbar, NavItem, Icon  } from 'react-materialize';
import request from 'superagent'

class NavMenu extends Component{


  render(){

    return(

      <Navbar brand='logo' >
        <NavItem href='get-started.html'><Icon>search</Icon>Search</NavItem>
        <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
      </Navbar >
    )
  }
}


export default NavMenu;
