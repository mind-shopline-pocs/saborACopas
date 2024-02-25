import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../context/ShoppingCartContext';
import { FaShoppingCart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SaborACopasLogo from '../../assets/Logo-SaborACopas.svg';


export const NavBarCustom = () => {

    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);

    console.log("quantity "+quantity);
  return (
    <>
      <nav className="navbar navbar-expand-sm " style={{
        backgroundColor: '#FFFAF0',
        
      }}>
            
            <Link 
                className="navbar-brand" 
                to="/Home"
            >
               <img style={{width: '150px', height: '75px'}}
               className='' src={SaborACopasLogo} alt="logo" />
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`} 
                        to="/Home"
                    >
                        Products
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`} 
                        to="/Cervezas"
                    >
                        Cervezas
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`} 
                        to="/Tequilas"
                    >
                        Tequilas
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`} 
                        to="/aboutus"
                    >
                        Quiénes Somos
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`} 
                        to="/aboutus"
                    >
                        Contaxto
                    </NavLink>
                </div>
            </div>

                

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                   
                        <Link 
                        className="navbar-brand" 
                        to="/cart"
                        >
                          
                           <FaShoppingCart style={{color: 'black', fontSize: '25px'}} />
                           <span className="badge badge-pill badge-dark" style={{
                            color: 'black'
                           }}>{quantity}</span>
                        </Link>
                       
                    <button className='nav-item nav-link btn'
                      
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
{/* {[false].map((expand) => (
        <Navbar variant="dark" key={expand} expand={expand} bg="dark" data-bs-theme="dark" text= "white" className="bg-body-tertiary mb-3" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}>
          <Container fluid>
            <Navbar.Brand href="#">Arkus Nexus</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Arkus Nexus
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body bg="dark" data-bs-theme="dark" text= "white" >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}

    </>
  )
}
