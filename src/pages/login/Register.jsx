import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import { toast } from "react-toastify";
const Register = () => {
  const { createUser, updateName } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        const createdUser = res.user;
        toast("Registation successful✅");
        updateName(createdUser, name);
        navigate("/");
      })
      .catch((err) => {
        toast(err.message);
      });
  };
  const handleTerms = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <Form className="mx-auto w-25" onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your name" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" placeholder="Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={
            <>
              Accept<Link to="/terms"> Terms & condition</Link>
            </>
          }
          onClick={handleTerms}
        />
      </Form.Group>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
