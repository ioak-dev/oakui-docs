import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import OakHeading from '../../oakui/OakHeading';
import OakCard from '../../oakui/OakCard';
import './style.scss';
import OakButton from '../../oakui/wc/OakButton';
import OakInput from '../../oakui/wc/OakInput';
import OakForm from '../../oakui/wc/OakForm';
import OakSelect from '../../oakui/wc/OakSelect';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakSelectStyled from '../../oakui/OakSelectStyled';

interface Props {
  match: any;
  history: any;
}

const Home = (props: Props) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    fileexample: '',
    category: '',
    country: '',
  });

  const submit = (event: any) => {
    // event.preventDefault();
    console.log(event);
    console.log(state);
  };

  useEffect(() => {
    console.log('saSAsaS'.match(/^[0-9]+$/));
    console.log('787'.match(/^[0-9]+$/));
  }, []);

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const validateEmail = (_, __, value: any): string[] => {
    const outcome: string[] = [];
    if (!value.toString().includes('@')) {
      outcome.push('Not a valid email');
      outcome.push('Should be from a company domain');
    }
    console.log(outcome);
    return outcome;
  };

  return (
    <OakCard>
      <OakHeading title="Welcome home" />
      {/* <form method="GET" onSubmit={submit} noValidate> */}
      <OakForm formGroupName="home-form" handleSubmit={submit}>
        <OakSelectStyled
          name="country"
          value={state.country}
          placeholder="Choose country"
          label="Country"
          handleChange={handleChange}
        />
        <OakSelect
          label="Category"
          name="category"
          value={state.category}
          placeholder="Choose a category"
          handleChange={handleChange}
          formGroupName="home-form"
          options={['category one', 'lorem ipsum']}
        />
        <OakInput
          label="File upload"
          name="fileexample"
          type="file"
          value={state.fileexample}
          placeholder="File upload"
          handleChange={handleChange}
          multiple
          formGroupName="home-form"
        />
        <OakInput
          label="First name"
          name="firstName"
          value={state.firstName}
          placeholder="Your first name"
          handleChange={handleChange}
          formGroupName="home-form"
          regexp={/^[a-z]*$/}
          minLength={2}
          tooltip="Your personal information will be protected"
        />
        <OakInput
          label="Last name"
          name="lastName"
          value={state.lastName}
          placeholder="Your last name"
          handleChange={handleChange}
          formGroupName="home-form"
          type="number"
          min={2}
          max={10}
        />
        <OakInput
          label="Email"
          name="email"
          value={state.email}
          placeholder="Your Email"
          handleChange={handleChange}
          formGroupName="home-form"
          minLength={5}
          validatorFunction={validateEmail}
        />
        <OakFormActionsContainer>
          <OakButton
            theme="primary"
            variant="appear"
            handleClick={submit}
            type="submit"
            formGroupName="home-form"
          >
            Submit button
          </OakButton>
          <OakButton
            theme="primary"
            variant="appear"
            handleClick={submit}
            type="button"
            formGroupName="home-form"
          >
            Normal button
          </OakButton>
        </OakFormActionsContainer>
      </OakForm>
      {/* </form> */}
    </OakCard>
  );
};

export default Home;
