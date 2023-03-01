import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            About Stay at Guru Ramana
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <Col lg="8">
                <h2 className="mt-4">Admin -Stay at Guru Ramana App</h2>
                <h5 className=" mb-4">
                  You can book your accommodation at Sri Ramanasramam, Tiruvannamalai, India
                </h5>
                <img
                  src="https://www.sriramanamaharshi.org/wp-content/uploads/2018/02/ashram_header_logo-1.png"
                  alt="Sri Ramana"
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
