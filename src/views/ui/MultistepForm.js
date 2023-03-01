
import React from 'react'
import ReactDOM from 'react-dom'
import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'
import StepFour from './stepFour'
import Stepzilla from "react-stepzilla";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
} from "reactstrap";
import { useState } from "react";
import "../../assets/app.css";
import "../../assets/normalize.css";
import "../../assets/skeleton.css";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


const steps = [
  { name: "Personal Details", component: <StepOne /> },
  { name: "Accommodation Dates", component: <StepTwo /> },
  { name: "No. Of Guests & Submit", component: <StepThree /> },
  { name: "Email Sent", component: <StepFour /> }
];


// custom styles
const prevStyle = { background: '#33c3f0' }
const nextStyle = { background: '#33c3f0' }

const Forms = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Hello');
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

            <Stepzilla  steps={steps} showNavigation={true}  showSteps={true} stepsNavigation={true} prevBtnOnLastStep={false} nextTextOnFinalActionStep={"Submit"} startAtStep={0} 
            nextButtonCls= {"btn btn-prev btn-primary btn-lg pull-right"}
            
            />

          </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
