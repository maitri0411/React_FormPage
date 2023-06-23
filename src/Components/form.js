import React, { useState } from 'react';
import Checkbox from "./Checkbox";
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';

function Form() {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked(!checked);
  };
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      email: "",
    password: "",
      confirmPassword: "",
    };
    if (!formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
        password: "Password should not be empty",
      });
      return
    }

    if (!formInput.email) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
      });
      return
    }

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return
    }
    setFormError(inputError);
  };

  return (
    <form onSubmit={validateFormInput}>
      <p className="label">First Name</p><input
        type="text"
        name="firstName"
        value={formInput.firstName}
        onChange={({ target }) => {
          handleUserInput(target.name, target.value);
        }}
        required
      />
      <p className=
      "label">Last Name</p><input
        value={formInput.lastName}
        onChange={({ target }) => {
          handleUserInput(target.name, target.value);
        }}
        type="text"
        name="lastName"
        required
      />
      <p className="label">Email</p>
            <input
              value={formInput.email}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="email"
              type="text"
              className="input"
              required
            
            />
            <p className="error-message">{formError.email}</p>
            <div className='pwd-container'>
            <p className="label">Password</p>
            <input
              value={formInput.password}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="password"
              type={isRevealPwd ? "text" : "password"}
              className="input"
              required
            />
            <img className="label"
              title={isRevealPwd ? "Show password" : "Hide password"}
              src={isRevealPwd ? showPwdImg : hidePwdImg}
              onClick={() => setIsRevealPwd(prevState => !prevState)}
            />
            </div>
            
            <p className="error-message">{formError.password}</p>
            <div className='pwd-container'>
            <p className="label">Confirm Password</p>
            <input
              value={formInput.confirmPassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="confirmPassword"
              type="password"
              className="input"
              required
      
            />
            <img className="label"
              title={isRevealPwd ? "Show password" : "Hide password"}
              src={isRevealPwd ? showPwdImg : hidePwdImg}
              onClick={() => setIsRevealPwd(prevState => !prevState)}
            />
            </div>
            <p className="error-message">{formError.confirmPassword}</p>
       
    <Checkbox 
        id="checkbox" 
        label="I agree to the terms and conditions." 
        value={checked} 
        onChange={onChange} 
        required
      />      <br></br><br></br>
      <button type="submit" onClick={!checked ? () => alert('Please accept the terms & conditions to proceed!') : () => alert('Success! You are now sucessfully registered!')}>
    <span>Submit</span></button>
    </form>
  );
}
export default Form;
