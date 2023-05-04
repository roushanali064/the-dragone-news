import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [ accepted, setAccepted ] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // createUser(email, password)
        //     .then(res => {
        //         const loggedUser = res.user;
        //         console.log(loggedUser)
        //     })
        //     .catch(error => {
        //         console.error(error.message)
        //     })
        form.reset()
    }

    return (
        <Container>
            <Form onSubmit={handleRegister} className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Your Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={()=>setAccepted(!accepted)}
                        type="checkbox"
                        name='accept'
                        label="Accept Term & Conditions" />
                </Form.Group>
                <Form.Text className="text-danger">

                </Form.Text>
                <br />
                <Form.Text className="text-success">

                </Form.Text>
                <br />
                <Button disabled={!accepted}  variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text>
                    Already Have An account ? <Link className="text-warning" to='/login'>Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;