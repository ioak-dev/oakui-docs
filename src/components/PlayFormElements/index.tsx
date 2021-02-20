import React, { useState } from 'react';
import OakSection from '../../oakui/wc/OakSection';
import FileInput from './FileInput';
import './style.scss';
import OakInput from '../../oakui/wc/OakInput';
import OakTypography from '../../oakui/wc/OakTypography';

interface Props {
  match: any;
  history: any;
}

const PlayFormElements = (props: Props) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const submit = () => {
    console.log(state);
  };

  const handleChange = (detail) => {
    setState((currentState) => ({
      ...currentState,
      [detail.name]: detail.value,
    }));
  };

  return (
    <>
      <OakSection>
        <OakTypography variant="h2">Form Elements</OakTypography>
      </OakSection>
      <OakInput
        label="First name"
        name="firstName"
        value={state.firstName}
        placeholder="Your first name"
        handleChange={handleChange}
      />
      <OakInput
        label="Last name"
        name="lastName"
        value={state.lastName}
        placeholder="Your last name"
        handleChange={handleChange}
      />
      <OakInput
        label="Email"
        name="email"
        value={state.email}
        placeholder="Your Email"
        handleChange={handleChange}
      />
      <FileInput />
    </>
  );
};

export default PlayFormElements;
