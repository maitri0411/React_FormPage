import React from 'react';
import { useHistory } from 'react-router-dom';

const AlertBox = () => {
  const history = useHistory();

  const handleNavigate = () => {
    !checked ? () => alert('Please accept the terms & conditions to proceed!') : () => alert('Success! You are now sucessfully registered!');
    history.push('/other-component');
  };

  const showAlert = () => {
    alert('Do you want to navigate to a different component?');
    handleNavigate();
  };
};

  export default AlertBox;



