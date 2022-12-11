import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-toastify';
const Register = () => {
  const [accpected, setAccpected] = useState('')
    const [error, setError] = useState("");
  const {verifyEmail, googleLogin, githubLogin, createUser, updateUserProfile } =
    useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // const confirm = form.confirm.value;
        createUser(email,password)
        .then(result => {
            const user = result.user;
            setError('')
            form.reset()
            handleUpdateUserProfile(name, photoURL)
            handleEmailVerification()
            toast.success('Please verify email address before login')
          })
        .catch(error => {
            setError(error.message)
        })
      };
      const handleAccpected = event => {
        setAccpected(event.target.checked)

      }

      const handleEmailVerification = () => {
        verifyEmail() 
        .then(() => {})
        .catch(error => console.error(error))
      }
      const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
          displayName: name,
          photoURL : photoURL

        }
        updateUserProfile(profile)
        .then (() => {})
        .catch (err => console.error(err))
      }
    return (
        <div className='ms-5 mt-5 '>
           <Form onSubmit={handleRegister} >
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Name</Form.Label>
        <Form.Control  className='w-50'type="text" placeholder="Enter Name" name='name' required/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control  className='w-50'type="text" placeholder="Enter URL Photo" name='photoURL' required/>
        
      </Form.Group>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" 
        onClick={handleAccpected}
        label={<>Accpect <Link to='/terms'>Accpect Terms & Condition</Link></>} 
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accpected}>
        Submit
      </Button>
      <br></br>
      <Form.Text>
      <Link to='/login'>Go for Login</Link>
      </Form.Text>
      <Form.Text>
        <p>{error}</p>
      </Form.Text>
    </Form>
        </div>
    );
};

export default Register;