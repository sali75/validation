import { form, control, button } from 'react-validation';
import { Button, Form, FormGroup, Label, Input as BsInput, FormText } from 'reactstrap';
import React from 'react';

const Input = ({ error, isChanged, isUsed, ...props }) => (
  <div className="form-group container w-100">
    <BsInput className="form-control w-50"  {...props} />
    {isChanged && isUsed && error}
  </div>
);

const MyValidationInput = control(Input);

export default MyValidationInput;
