import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../pages/shared/Header";
import Footer from "./Footer";
import RightNav from "../pages/shared/RightNav";
import LeftNav from "../pages/shared/LeftNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
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

export default NewsLayout;
