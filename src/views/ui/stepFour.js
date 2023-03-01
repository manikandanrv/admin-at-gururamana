import React, { useState } from 'react'
import emailjs from '@emailjs/browser';



export default () => {
  const [checked, setChecked] = useState('')
  const form = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('mani.ramana@gmail.com', 'accommodation', form.current, 'Gl3biE7mwG8_mshgG')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div>
      <div className='row'>
        <div className='ten columns terms'>
          <span>Your request for accommodation has been sent to Sri ramanasramam for approval.</span>
          <ul className='docs-terms'>
            <li>
              An email copy of this request has been sent.  Click <a href='#'>here</a> to see the approval status of your accommodation request.
            </li>
            <li>
              It may take a day or two to get your request approved.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
