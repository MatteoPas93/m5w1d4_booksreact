import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLinks} from "./NavLink/Navlink";
import { nanoid } from "nanoid";
import navLogo from "./Logo/Logo";
import classes from "./Nav.module.css"
import SearchInput from "../Main/AllTheBooks/InputSearch/SearchInput";


function NavigationBar() {

  return (
    <Navbar expand="lg" className={classes["background-nav"]}>
      <Container className="m-0">
        <Navbar.Brand href="#home">{navLogo({logo:"EpicBooksReact"})}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {NavLinks.map((link) => {
                return (
                <Nav.Link key={nanoid()} href={link.href}> {link.label} </Nav.Link>
            )})}
          </Nav>
        </Navbar.Collapse>
        <SearchInput/>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
