import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from "react-toastify";

import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {

    const [error, setError] = useState("");
    const {user,createUser,login} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email, password)
         .then(result => {
          const user  = result.user;
          toast.success("Login Successfully");
          console.log(user);
          form.reset()
          setError('');
          if(user.emailVerified){
            navigate(from, {replace: true})
          } else {
            toast.error('Your Email is not verified.')
          }
         })
          .catch((error) => {
            setError(error.message)
          });
      };
    return (
        <div className='mt-5 ms-5'>
             <Form onSubmit={handleLogin} >
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className='w-50' type="email" placeholder="Enter email" name='email' required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className='w-50' type="password" placeholder="Password" name='password' required/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br></br>
      <Form.Text>
      <Link to='/register'>Go for Register</Link>
      </Form.Text>
      <Form.Text className='text-danger'>
        <p>{error}</p>
      </Form.Text>
    </Form>
        </div>
    );
};

export default Login;