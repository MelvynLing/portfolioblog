import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
     } from 'reactstrap';
import auth0 from '../../services/auth0' 


const BSNavLink = (props) => {
     const { route, text } = props;
     return (
          <Link href={route}>
               <a className="nav-link port-navbar-link"> {text} </a>
          </Link>
     )
}

const Login = () => {
  return(
    <span onClick={auth0.login} className="nav-link port-navbar-link clickable">Log In</span>
  )
}

const Logout= () => {
  return(
    <span className="nav-link port-navbar-link clickable">Log Out</span>
  )
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar 
          className="port-navbar port-default absolute"
          color="transparent" 
          dark expand="md">
          <NavbarBrand 
          className="port-navbar-brand"
          href="/"> 
              Melvyn Ling
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                    <BSNavLink route='/' text="Home"/>
              </NavItem>
              <NavItem className="port-navbar-item">
                    <BSNavLink route='/about' text="About Me"/>
              </NavItem>
              <NavItem className="port-navbar-item">
                    <BSNavLink route='/portfolios' text="Portfolio"/>
              </NavItem>
              <NavItem className="port-navbar-item">
                    <BSNavLink route='/blog' text="Blog"/>
              </NavItem>
              <NavItem className="port-navbar-item">
                    <BSNavLink route='/cv' text="Resume"/>
              </NavItem>
              <NavItem className="port-navbar-item">
                    <Login/>
              </NavItem>
              <NavItem className="port-navbar-item">
                    <Logout/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}