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
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Forms = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Hello');
    // POST request using axios with set headers
    // const article = { title: 'React POST Request Example' };
    // const headers = { 
    //     'Authorization': 'Bearer my-token',
    //     'My-Custom-Header': 'foobar'
    // };
    // axios.post('https://reqres.in/api/articles', article, { headers })
    //     .then(response => this.setState({ articleId: response.data.id }));
  }

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-envelope me-2"> </i>
            Request Accommodation at Sri Ramanasramam. 
             Please fill in your details below and we will let you know.
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit}>
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
                <Label for="Nationality">Nationality</Label>
                <Input id="Nationality" name="nationality" type="select">
                  <option>India</option>
                  <option>USA</option>
                  <option>European Union</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="IdDocType">ID Proof type</Label>
                <Input id="IdDocType" name="idDocType" type="select">
                  <option>Aadhar</option>
                  <option>Passport</option>
                  <option>Other</option>
                </Input>
              </FormGroup>              
              <FormGroup>
                <Label for="IdProofNumber">ID Proof Number</Label>
                <Input
                  id="IdProofNumber"
                  name="idProofNumber"
                  type="text"
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

              <FormGroup>
                <Label for="checkinDate">Checkin Date</Label>
                <DatePicker id="checkinDate" selected={startDate} onChange={(date) => setStartDate(date)} />
              </FormGroup>
              <FormGroup>
                <Label for="checkoutDate">Checkout Date</Label>
                <DatePicker id="checkoutDate" selected={endDate} onChange={(date) => setEndDate(date)} />
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
