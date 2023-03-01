import React, { useState } from 'react'
import {
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default () => {
  const [noOfGuests, setNoOfGuests] = useState('')

  return (
    <div>
      <div className='row'>
        <div className='six columns'>
        <FormGroup>
                <Label for="NoOfGuests">Number of Guests</Label>
                <Input id="NoOfGuests" name="noOfGuests" type="select"  className="w-50"
                 onChange={e => setNoOfGuests(e.target.value) }>
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
        </div>
      </div>
    </div>
  )
}
