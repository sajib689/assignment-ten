import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import LeftSideNav from "./../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "./../Shared/RightSideNav/RightSideNav";
import "../../src/Pages/Home/Home.css";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Col className="d-flex">
          <Col lg="3">
            <LeftSideNav></LeftSideNav>
          </Col>

          <Col lg="9">
            <Outlet></Outlet>
          </Col>
        </Col>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
