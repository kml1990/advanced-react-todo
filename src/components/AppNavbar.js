import React, { Component } from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";

class AppNavbar extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="secondary" dark expand="sm">
          <Container fluid>
            <NavbarBrand href="/">
              <span className="text-primary">{"<"}</span>
              />
            </NavbarBrand>
            {/* Add Github */}
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
