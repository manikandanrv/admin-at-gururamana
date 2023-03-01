import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const Forms = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-envelope me-2"> </i>
            Request Accommodation at Sri Ramanasramam
          </CardTitle>
          <CardBody>
            <Form>
            <FormGroup>
                <Label for="FirstName">FirstName</Label>
                <Input
                  id="FirstName"
                  name="firstName"
                  placeholder="John"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="LastName">LastName</Label>
                <Input
                  id="LastName"
                  name="lastName"
                  placeholder="Doe"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  id="Email"
                  name="email"
                  placeholder="john@email.com"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Mobile">Mobile</Label>
                <Input
                  id="Mobile"
                  name="mobile"
                  placeholder="+1-541-754-3010"
                  type="mobile"
                />
              </FormGroup>
              <FormGroup>
                <Label for="NoOfGuests">Number of Guests</Label>
                <Input id="NoOfGuests" name="noOfGuests" type="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>                
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="purpose">Purpose Of Visit</Label>
                <Input id="purpose" name="purpose" type="textarea" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
