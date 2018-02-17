import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Logo from './Logo';
import CSSTransition from 'react-transition-group/CSSTransition';
import Content from './Content';

export default class Navigation extends React.Component {
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
      <Navbar key="navbar" color="faded" light expand="md">
        <NavbarBrand href="/">
        	<Logo 
        		height="50px"
        		width="100px"
        		viewBox="10 0 25 25"
        		stroke="st1"/>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
            <NavItem>
              <FadeIn delay={100}>
                <NavLink href="#">Over Mij</NavLink>
              </FadeIn>
            </NavItem>
            <NavItem>
              <FadeIn delay={200}>
              	<NavLink href="#">Contact</NavLink>
              </FadeIn>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}