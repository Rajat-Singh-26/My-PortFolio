import { Container, Row, Col } from "react-bootstrap";
import portfolio from "../assets/img/portfolio.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/git.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img style={{ width: "40%" }} src={portfolio} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rajat-singh-71867b292/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/Rajat-Singh-26">
                <img src={navIcon4} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved @LoneWolf</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
