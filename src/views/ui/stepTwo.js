import React, { useState } from 'react'
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default () => {
  const [purpose, setPurpose] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <FormGroup>
                <Label for="checkinDate">Checkin Date</Label>
                <DatePicker id="checkinDate" selected={startDate} onChange={(date) => setStartDate(date)} />
              </FormGroup>
          <FormGroup>
                <Label for="checkoutDate">Checkout Date</Label>
                <DatePicker id="checkoutDate" selected={endDate} onChange={(date) => setEndDate(date)} />
              </FormGroup>
              <FormGroup>
                <Label for="purpose">Purpose Of Visit</Label>
                <Input id="purpose" name="purpose" type="textarea" onChange={e => setPurpose(e.target.value)}
                  value={purpose}/>
              </FormGroup>
        </div>
      </div>
    </div>
  )
}
