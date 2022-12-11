import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGithub, FaGoogle, FaUser } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import FAQ from "../../FAQ/FAQ";
import { HiUserCircle } from "react-icons/hi";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Image, NavLink } from "react-bootstrap";
import logo from '../../Images/lang.png'
const Header = () => {
  const [error, setError] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, googleLogin, githubLogin, logOut } = useContext(AuthContext);

  const handleGoogle = () => {
    setError("");
    googleLogin()
      .then((result) => {
        console.log(result.user);
        // navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  const handleGithub = () => {
    setError("");
    githubLogin()
      .then((result) => {
        console.log(result.user);
        // navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <div className="ms-4 me-4 rounded">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <>
            <Navbar.Brand className="d-flex">
              <Image src={logo} alt="Brand Logo" className="w-[7vh]"></Image>
              <Link to="/homes" style={{ textDecoration: "none" }}>
                Learn Program
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              
              <Nav>
              <Nav.Link eventKey={2} className="mt-3">
                  <Image src={user?.photoURL} style={{height: '30px'}}
                    roundedCircle></Image>
                    </Nav.Link>
              <Nav.Link className="mt-3">{user?.displayName}</Nav.Link>
                
                  {/* {user.photoURL?
                    <Image 
                    style={{height: '30px'}}
                    roundedCircle
                    src={user?.photoURL}
                    >
                    
                    </Image>
                    :
                    <FaUser></FaUser>
                  } */}
                <Nav className="me-auto">
                <Nav.Link>
                  <Link to='/homes'
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                   style={{textDecoration: 'none'}}>
                  Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/home'
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                   style={{textDecoration: 'none'}}>
                  Courses
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='faq'
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                   style={{textDecoration: 'none'}}>
                  Blog
                  </Link>
                </Nav.Link>
                
                <Nav.Link>
                  <Link 
                  to='/blog'
                  style={{textDecoration: 'none'}}
                  className=" inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                  FAQ
                  </Link>
                </Nav.Link>
              </Nav>
                <Nav.Link>
                  <Link
                  style={{textDecoration: 'none'}}
                   className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                   to='/login'>Login</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                  style={{textDecoration: 'none'}}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    to='/register'>Register</Link>
                </Nav.Link>
                <Nav.Link>
                <button
                style={{textDecoration: 'none'}}
                  onClick={() => logOut()}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Log Out"
                  title="Log Out"
                >
                  Log Out
                </button>
                </Nav.Link>
                <Nav.Link>
                <ButtonGroup className="ms-3">
                  <Button 
                  className="inline-flex items-center justify-center h-12 px-6 font-medium 
                  tracking-wide transition duration-200 rounded shadow-md
                   bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 
                   focus:shadow-outline focus:outline-none items-center"
                  variant="outline-dark" onClick={handleGoogle}>
                    <FaGoogle></FaGoogle> 
                  </Button>
                  <Button
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none" variant="outline-dark" onClick={handleGithub}>
                    <FaGithub></FaGithub> 
                  </Button>
                </ButtonGroup>
                
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
