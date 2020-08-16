import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
      <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Bet Online</Nav.Link>
              <NavDropdown title="Betting Sites" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/2.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/2.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/2.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/2.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Cash Bonus" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Mobile Apps" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/4.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/4.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Promotions" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/5.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/5.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/5.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/5.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Magazine" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/6.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/6.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/6.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/6.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Suport</Nav.Link>
              <Nav.Link href="#link">FAQ</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
