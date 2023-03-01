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

export default () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  return (
    <div>

            <FormGroup>
                <Label for="FirstName">FirstName</Label>
                <Input
                  id="FirstName"
                  placeholder='First Name'
                  type='text'
                  onChange={e => setFirstName(e.target.value)}
                  value={firstName}
                  autoFocus
                  className="w-50"
                />
              </FormGroup>
              <FormGroup>
                <Label for="LastName">LastName</Label>
                <Input
                  id="LastName"
                  name="lastName"
                  placeholder="Doe"
                  type="text"
                  onChange={e => setLastName(e.target.value)}
                  value={lastName}
                  className="w-50"                
              />
              </FormGroup>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  id="Email"
                  name="email"
                  placeholder="john@email.com"
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  className="w-50"                
              />
              </FormGroup>
              <FormGroup>
                <Label for="Mobile">Mobile</Label>
                <Input
                  id="Mobile"
                  name="mobile"
                  placeholder="+1-541-754-3010"
                  type="mobile"
                  className="w-50"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Nationality">Nationality</Label>
                <Input id="Nationality" name="nationality" type="select"                   className="w-50"
                >
                  <option>India</option>
                  <option>USA</option>
                  <option>European Union</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="IdDocType">ID Proof type</Label>
                <Input id="IdDocType" name="idDocType" type="select"                   className="w-50"
                >
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
                  className="w-50"
                />
              </FormGroup>

      {/* <div className='row'>
        <div className='six columns'>
          <label>First Name</label>
          <input
            className='u-full-width'
            placeholder='First Name'
            type='text'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Last Name</label>
          <input
            className='u-full-width'
            placeholder='Last Name'
            type='text'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div> */}
    </div>
  )
}
