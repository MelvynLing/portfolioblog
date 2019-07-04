// import React from 'react';
// import Link from 'next/link';

// class Header extends React.Component {

//      render() {

//           return (
//                <React.Fragment>

                    // <Link href="/">
                    //      <a style={{'fontSize':'25px'}}> Home </a>
                    // </Link>

//                     <Link href="/about">
//                          <a> About </a>
//                     </Link>

//                     <Link href="/portfolios">
//                          <a> Portfolios </a>
//                     </Link>

//                     <Link href="/blog">
//                          <a> Blog </a>
//                     </Link>

//                     <Link href="/cv">
//                          <a> CV </a>
//                     </Link>
//                     <style jsx>
//                     {
//                          `
//                          a {
//                               font-size: 25px;
//                          };
//                          .pelem {
//                               color: green;
//                               fontsize: 50px;
//                          }
//                          `
//                     }
//                     </style>
//                </React.Fragment>
//                )
//      }
// }

// export default Header;

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


const BSNavLink = (props) => {
     const { route, text } = props;
     return (
          <Link href={route}>
               <a className="nav-link port-navbar-link"> {text} </a>
          </Link>
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
          light expand="md">
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}