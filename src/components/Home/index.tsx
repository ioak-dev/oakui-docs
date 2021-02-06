import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FaceTwoTone } from '@material-ui/icons';

import './style.scss';
import OakButton from '../../oakui/wc/OakButton';
import OakInput from '../../oakui/wc/OakInput';
import OakForm from '../../oakui/wc/OakForm';
import OakSelect from '../../oakui/wc/OakSelect';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakTypography from '../../oakui/wc/OakTypography';
import OakLink from '../../oakui/OakLink';

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

  const reset = (event: any) => {
    // event.preventDefault();
    console.log(event);
    setState({
      firstName: '',
      lastName: '',
      email: '',
      fileexample: '',
      category: '',
      country: '',
    });
  };

  useEffect(() => {
    console.log('saSAsaS'.match(/^[0-9]+$/));
    console.log('787'.match(/^[0-9]+$/));
  }, []);

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const clickLink = (detail: any) => {
    console.log(detail);
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
    <>
      <OakTypography variant="h2">Home</OakTypography>
      <OakTypography variant="h1">heading one</OakTypography>
      <OakTypography variant="h2">heading two</OakTypography>
      <OakTypography variant="h3">heading three</OakTypography>
      <OakTypography variant="h4">heading four</OakTypography>
      <OakTypography variant="h5">heading five</OakTypography>
      <OakTypography variant="h6">heading six</OakTypography>
      <OakTypography variant="body1">Body one</OakTypography>
      <OakTypography variant="body2">Body two</OakTypography>
      <OakTypography variant="caption">Caption</OakTypography>
      <OakTypography variant="subtitle1">Subtitle one</OakTypography>
      <OakTypography variant="subtitle2">Subtitle two</OakTypography>
      <OakTypography variant="overline">Overline</OakTypography>
      <OakTypography>Default</OakTypography>
      <OakTypography variant="inherit" paragraph>
        Inherit
      </OakTypography>
      <OakLink
        href="https://google.com"
        variant="body1"
        color="secondary"
        underline="hover"
      >
        Heading two based link
        <FaceTwoTone />
        Heading two based link
      </OakLink>
      <OakLink href="https://google.com" variant="body1" color="primary">
        body hyperlink
      </OakLink>
      <OakLink
        variant="body1"
        color="secondary"
        handleClick={clickLink}
        block
        blockSize="small"
        blockShape="rectangle"
      >
        Not a Hyperlink
      </OakLink>
      <OakLink
        href="a"
        variant="body1"
        color="secondary-text"
        handleClick={clickLink}
        block
        blockSize="small"
        blockShape="rectangle"
      >
        Hyperlink
      </OakLink>
      <OakLink
        variant="body1"
        color="secondary"
        underline="always"
        handleClick={clickLink}
      >
        not a hyperlink
      </OakLink>
      <OakForm
        formGroupName="home-form"
        handleSubmit={submit}
        handleReset={reset}
      >
        <OakSelect
          name="country"
          value={state.country}
          placeholder="Choose country"
          label="Country"
          formGroupName="home-form"
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
        <OakSelect
          name="country"
          value={state.country}
          placeholder="Choose country"
          label="Country"
          formGroupName="home-form"
          handleChange={handleChange}
        />
        <OakFormActionsContainer>
          <OakButton
            theme="primary"
            variant="appear"
            type="submit"
            formGroupName="home-form"
          >
            Submit button
          </OakButton>
          <OakButton
            theme="default"
            variant="appear"
            type="reset"
            formGroupName="home-form"
          >
            Reset button
          </OakButton>
          <OakButton
            theme="default"
            variant="appear"
            handleClick={submit}
            type="button"
            formGroupName="home-form"
          >
            Normal button
          </OakButton>
        </OakFormActionsContainer>
      </OakForm>
    </>
  );
};

export default Home;
