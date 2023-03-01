import React from 'react';

import SinglePagePDFViewer from "../../components/pdf/single-page";
import AllPagesPDFViewer from "../../components/pdf/all-pages";
// import { sampleBase64pdf } from "./sampleBase64pdf";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../../page.pdf";
// import camera from '../../components/camera.js'
import {
  Button,
} from "reactstrap";


const Frro = () => {
const handleClick = (process) => {
  console.log('Submit clicked');
  switch(process){
    case 1:
      camera.startCamera();
    case 2:
      camera.takeSnapshot();
    case 3:
      camera.stopCamera();
        
  }
}
  return (
      <div className="App">
        <h4>FRRO Form</h4>
        <SinglePagePDFViewer pdf={samplePDF} />

        <hr />
        <Button onClick={handleClick(1)}>Start Camera</Button>
        <Button onClick={handleClick(2)}>Take Snapshot</Button>
        <Button onClick={handleClick(3)}>Stop Camera</Button>

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
