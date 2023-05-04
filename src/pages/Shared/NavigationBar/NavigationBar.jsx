import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then(res=>{

        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <Container>
            <Navbar bg="light" variant="light">
                <Nav className="mx-auto">
                    <Link to='/'>Home</Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Carrier</Nav.Link>
                </Nav>
                <Nav className="">
                    <Nav.Link href="#home">
                        {user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}
                    </Nav.Link>

                    {
                        user ? <Button onClick={handleLogout} variant='secondary'>LogOut</Button>
                            :
                            <Button variant='secondary'><Link className='text-white text-decoration-none' to='/login'>Login</Link></Button>
                    }
                </Nav>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;