import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const accept = form.accept.value;
        console.log(email, password, accept)
        loginUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                navigate(from)
            })
            .catch(error => {
                console.error(error.message)
            })

    }

    return (
        <Container>
            <Form onSubmit={handleLogin} className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Remember Me" />
                </Form.Group>
                <Form.Text className="text-danger">

                </Form.Text>
                <br />
                <Form.Text className="text-success">

                </Form.Text>
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <Form.Text>
                    Dont Have An Account ? <Link className="text-warning" to='/register'>Register</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;