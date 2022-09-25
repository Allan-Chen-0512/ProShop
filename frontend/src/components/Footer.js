import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <span class="copyright">
              Built by Allan Chen, credits given to Brad Traversy for his online
              course
              <b>
                <i> MERN eCommerce from Scratch.</i>
              </b>
              Copyright &copy; ProShop
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
