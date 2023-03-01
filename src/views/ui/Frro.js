import React from 'react';
import ForeignersTable from "./ForeignersTable";

import SinglePagePDFViewer from "../../components/pdf/single-page";
import AllPagesPDFViewer from "../../components/pdf/all-pages";
// import { sampleBase64pdf } from "./sampleBase64pdf";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../../page.pdf";
import {
  Button,
  Row,
  Col,
} from "reactstrap";


const Frro = () => {
const handleClick = (process) => {
  console.log('Submit clicked');
  switch(process){
    case 1:
    case 2:
    case 3:
        
  }
}
  return (
      <div className="App">
        <h4>FRRO Form</h4>
        <SinglePagePDFViewer pdf={samplePDF} />

        <hr />
        <Row>
          {/* --------------------------------------------------------------------------------*/}
          {/* table-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Col lg="12">
            <ForeignersTable />
          </Col>
      </Row>
        <Row width='10'>
          <Col width='10'>
          <Button onClick={handleClick(1)}>Fill C Form</Button>
          </Col>
          <Col>
          <Button onClick={handleClick(2)}>Confirm, Submit & Fill Next</Button>
          </Col>
          <Col>
          <Button onClick={handleClick(3)}>Submit</Button>
          </Col>
      </Row>

        {/* <h4>All Pages</h4>
        <div className="all-page-container">
          <AllPagesPDFViewer pdf={samplePDF} />
        </div>
  
        <hr />
   */}
        {/* <h4>Base 64 Single Page</h4>
        <SinglePagePDFViewer pdf={sampleBase64pdf} />
  
        <hr /> */}
      </div>
    );
  }
  export default Frro;
