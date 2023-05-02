import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../pages/shared/Header";
import Footer from "./Footer";
import RightNav from "../pages/shared/RightNav";
import LeftNav from "../pages/shared/LeftNav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav> </LeftNav>
          </Col>
          <Col lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
