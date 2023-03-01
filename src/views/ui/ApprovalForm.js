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

  const handleSubmit = (a) => {
    //event.preventDefault();
    alert('Hello', a);
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
            Accommodation Approval. 
             Please provide approval at the bottom.
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
                  readOnly
                />
              </FormGroup>
              <FormGroup>
                <Label for="LastName">LastName</Label>
                <Input
                  id="LastName"
                  name="lastName"
                  placeholder="Doe"
                  type="text"
                  readOnly
                />
              </FormGroup>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  id="Email"
                  name="email"
                  placeholder="john@email.com"
                  type="email"
                  readOnly
                />
              </FormGroup>
              <FormGroup>
                <Label for="Mobile">Mobile</Label>
                <Input
                  id="Mobile"
                  name="mobile"
                  placeholder="+1-541-754-3010"
                  type="mobile"
                  readOnly
                />
              </FormGroup>
              <FormGroup>
                <Label for="Nationality">Nationality</Label>
                <Input
                  id="Nationality"
                  name="nationality"
                  placeholder="USA"
                  type="text"
                  readOnly
                />
              </FormGroup>
              <FormGroup>
                <Label for="IdDocType">ID Proof type</Label>
                <Input
                  id="IdDocType"
                  name="idDocType"
                  placeholder="Passport"
                  type="text"
                  readOnly
                />
              </FormGroup>              
              <FormGroup>
                <Label for="IdProofNumber">ID Proof Number</Label>
                <Input
                  id="IdProofNumber"
                  name="idProofNumber"
                  placeholder="A1239876"
                  type="text"
                  readOnly
                />
              </FormGroup>
              <FormGroup>
                <Label for="NoOfGuests">Number of Guests</Label>
                <Input
                  id="NoOfGuests"
                  name="noOfGuests"
                  placeholder="3"
                  type="text"
                  readOnly
                />
              </FormGroup>
              <FormGroup>
                <Label for="Purpose">Purpose Of Visit</Label>
                <Input id="Purpose" name="purpose" type="text" placeholder="Meditation" readonly />
              </FormGroup>

              <FormGroup>
                <Label for="checkinDate">Checkin Date</Label>
                <Input
                  id="CheckinDate"
                  name="checkinDate"
                  placeholder="04/22/2022"
                  type="text"
                  readOnly
                />
                {/* <DatePicker id="checkinDate" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
              </FormGroup>
              <FormGroup>
                <Label for="checkoutDate">Checkout Date</Label>
                <Input
                  id="CheckoutDate"
                  name="checkoutDate"
                  placeholder="04/22/2022"
                  type="text"
                  readOnly
                />
                {/* <DatePicker id="checkoutDate" selected={endDate} onChange={(date) => setEndDate(date)} /> */}
              </FormGroup>
              <FormGroup>
                <Label for="comments">Approve/Reject Comments</Label>
                <Input id="comments" name="comments" type="textarea" placeholder="Provide your comments here"/>
              </FormGroup>
              <Button  onClick={handleSubmit(1)}>Approve</Button>
              <Button  onClick={handleSubmit(0)}>Reject</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
