import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Navbar } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
const Header = () => {
  return (
    <Container>
      <div className="text-center my-5">
        <img src={logo} alt="" />
        <p className="text-secondary mt-2">Journalism Without Fear or Favour</p>
        <p className="mt-0">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="bg-light d-flex justify-content-center p-3">
        <Button variant="danger">Latest</Button>
        <Marquee pauseOnHover={true} className="ms-2 text-danger">
          I can be a React component, multiple React components, or just some
          text. || I can be a React component, multiple React components, or
          just some text. || I can be a React component, multiple React
          components, or just some text. || I can be a React component, multiple
          React components, or just some text. ||
        </Marquee>
      </div>
      <NavigationBar></NavigationBar>
    </Container>
  );
};

export default Header;
