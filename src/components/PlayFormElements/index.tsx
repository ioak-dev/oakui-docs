import React, { useState } from 'react';
import OakHeading from '../../oakui/OakHeading';
import OakCard from '../../oakui/OakCard';
import FileInput from './FileInput';
import SelectInput from './SelectInput';
import './style.scss';
import OakInput from '../../oakui/wc/OakInput';

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
      <OakCard>
        <OakHeading title="Form Elements" />
      </OakCard>
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
