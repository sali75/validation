import React from 'react';
import './App.css';
import Form from 'react-validation/build/form';
import Input from './Input';
import validator from 'validator';

const required = (value) => {
  if (!value.toString().trim().length) {

    return 'require';
  }
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};

const lt = (value, props) => {

  if (value.toString().trim().length > props.maxLength) {

    return <span className="error">The value exceeded {props.maxLength} symbols.</span>
  }
};

const password = (value, props, components) => {

  if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value

    return <span className="error">Passwords are not equal.</span>
  }
};

function App() {
  return (
    <Form>
              <h3>Login</h3>
              <div>
                  <label>
                      Email*
                      <Input value='email@email.com' name='email' validations={[required, email]}/>
                  </label>
              </div>
              <div>
                  <label>
                      Password*
                      <Input type='password' name='password' validations={[required]}/>
                  </label>
              </div>
              <div>
                  <button>Submit</button>
              </div>
          </Form>
  );
}

export default App;
