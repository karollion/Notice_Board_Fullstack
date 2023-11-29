import styles from './NavBar.module.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
      <Navbar  variant="dark" expand="lg" className={`mt-4 mb-4 rounded ${styles.root}`}>
        <Container>
            <Navbar.Brand className={styles.logo} as={NavLink} to="/"> NoticeBoardApp </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/addNotice">Add Notice</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/login">Login</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} as={NavLink} to="/signup">Sign up</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container> 
      </Navbar>
    );
};

export default NavBar;