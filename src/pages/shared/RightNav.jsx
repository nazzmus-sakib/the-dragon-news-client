import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "./Qzone";
const RightNav = () => {
  return (
    <div>
      <h3>Login With</h3>
      <div className="mt-3">
        <Button variant="outline-primary" className="mb-3 p-2">
          <FaGoogle></FaGoogle> Login with google
        </Button>

        <Button variant="outline-secondary" className="p-2">
          <FaGithub></FaGithub> Login with github
        </Button>
      </div>
      <div>
        <h2 className="my-3">Find us on</h2>
        <ListGroup>
          <ListGroup.Item className="p-3">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="p-3">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="p-3">
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
    </div>
  );
};

export default RightNav;
