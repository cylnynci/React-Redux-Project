import React from 'react'
import { Link } from 'react-router-dom';
import { 
    NavbarToggler,
    NavbarBrand,
    Nav,
    Navbar,
    Collapse,
    NavbarText,
    NavItem,
    NavLink
} from 'reactstrap'
import CartSummary from '../cart/CartSummary'

export default class Navi extends React.Component {
  
  render() {
    return (
        <div>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand><Link to="/"> Shopping Centre</Link></NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink>
                  <Link to="/saveproduct">Ürün Ekle</Link>
                </NavLink>
              </NavItem>
              <NavItem>
              </NavItem>
              <CartSummary/>
            </Nav>
            <NavbarText>
              Simple Text
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



