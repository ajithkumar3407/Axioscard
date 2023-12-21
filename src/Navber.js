import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navber(){
    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">MOVIE</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#topmovies">TOP 100 MOVIES</Nav.Link>
                    <Nav.Link href="#90'smovie">HORROR MOVIES</Nav.Link>
                    <Nav.Link href="#rating">RATING</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navber;