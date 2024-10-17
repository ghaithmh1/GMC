import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = ({ movieNumber, filterTitle, filterRating, onFilterChange }) => {
    return (
        <>

            <Navbar className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Link to='/' style={{ textDecoration: "none" }}><h1 className='appTitle'>Movies{movieNumber}</h1></Link>
                    <Navbar.Toggle />
                    <Navbar.Offcanvas>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title >
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link to='/' style={{ textDecoration: "none" }}><h1 className='navHome'>Home</h1></Link>
                                <Link to='/' style={{ textDecoration: "none" }}><h1 className='navTvShows'>TV Shows</h1></Link>
                                <Link to='/' style={{ textDecoration: "none" }}><h1 className='navMovies'>Movies</h1></Link>
                                <Link to='/' style={{ textDecoration: "none" }}><h1 className='navLatest'>Latest</h1></Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Filter by Title"
                                    className="me-2"
                                    aria-label="Search"
                                    value={filterTitle}
                                    onChange={(e) => onFilterChange('title', e.target.value)}
                                />
                                <Form.Control
                                    type="search"
                                    placeholder="Filter by Rating"
                                    className="me-2"
                                    aria-label="Search"
                                    value={filterRating}
                                    onChange={(e) => onFilterChange('rating', e.target.value)}
                                />
                                {/* <Button variant="outline-primary">MOVIE+</Button> */}
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container >
            </Navbar >

        </>
    );
}
export default NavBar;