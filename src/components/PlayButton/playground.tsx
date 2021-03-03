import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { OakSectionProps } from 'oakui/dist/style-composer/OakSectionComposer';

import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';
import OakSection from '../../oakui/wc/OakSection';
import OakInput from '../../oakui/wc/OakInput';
import OakSelect from '../../oakui/wc/OakSelect';
import OakCheckbox from '../../oakui/wc/OakCheckbox';
import OakSheet from '../../oakui/wc/OakSheet';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakButton from '../../oakui/wc/OakButton';
import OakForm from '../../oakui/wc/OakForm';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [state, setState] = useState<any>({
    theme: 'primary',
    variant: 'appear',
    size: 'small',
    shape: 'rectangle',
    type: 'button',
    label: 'You are controlling this button style',
    semitransparent: false,
  });

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    age: null,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isValidationSettingsOpen, setIsValidationSettingsOpen] = useState(
    false
  );

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handleDataChange = (detail: any) => {
    setData({ ...state, [detail.name]: detail.value });
  };

  const handleFormSubmit = () => {
    console.log('form submit');
  };

  const handleFormReset = () => {
    setData({ ...data, firstName: '', lastName: '', age: null });
  };

  return (
    <>
      <OakSection fillColor="container" rounded>
        <OakForm
          formGroupName="play-button-form"
          handleSubmit={handleFormSubmit}
          handleReset={handleFormReset}
        >
          <OakInput
            name="firstName"
            value={data.firstName}
            label="First name"
            type="text"
            maxLength={10}
            minLength={3}
            formGroupName="play-button-form"
            gutterBottom={state.gutterBottom}
            handleInput={handleDataChange}
          />
          <OakInput
            name="lastName"
            value={data.lastName}
            label="Last name"
            type="text"
            maxLength={10}
            minLength={3}
            formGroupName="play-button-form"
            gutterBottom={state.gutterBottom}
            handleInput={handleDataChange}
          />
        </OakForm>
        <br />
        <br />
        <OakFormActionsContainer align="center">
          <OakButton
            theme={state.theme}
            variant={state.variant}
            handleClick={() => {}}
            size={state.size}
            shape={state.shape}
            type={state.type}
            semitransparent={state.semitransparent}
            formGroupName="play-button-form"
          >
            {state.label}
          </OakButton>
        </OakFormActionsContainer>
        <br />
        <br />
      </OakSection>
      <br />
      <OakFormActionsContainer align="left">
        <OakButton
          theme="info"
          variant="appear"
          handleClick={() => setIsOpen(true)}
          size="xsmall"
        >
          Component settings
        </OakButton>
      </OakFormActionsContainer>
      <OakSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="surface" outlineColor="none" rounded fullWidth>
          <OakCheckbox
            name="semitransparent"
            value={state.semitransparent || false}
            size="medium"
            handleChange={handleChange}
            gutterBottom
          >
            semitransparent
          </OakCheckbox>
          <OakSelect
            label="type"
            value={state.type}
            options={['button', 'submit', 'reset']}
            name="type"
            gutterBottom
            handleChange={handleChange}
          />
          <OakSelect
            label="size"
            value={state.size}
            options={['xsmall', 'small', 'medium', 'large']}
            name="size"
            gutterBottom
            handleChange={handleChange}
          />
          <OakSelect
            label="shape"
            value={state.shape}
            options={['sharp', 'rectangle', 'rounded', 'leaf']}
            name="shape"
            gutterBottom
            handleChange={handleChange}
          />
          <OakSelect
            label="variant"
            value={state.variant}
            options={[
              'appear',
              'disappear',
              'regular',
              'drama',
              'block',
              'outline',
              'disabled',
            ]}
            name="variant"
            gutterBottom
            handleChange={handleChange}
          />
          <OakSelect
            label="theme"
            value={state.theme}
            options={[
              'primary',
              'secondary',
              'tertiary',
              'default',
              'danger',
              'warning',
              'success',
              'info',
            ]}
            name="theme"
            gutterBottom
            handleChange={handleChange}
          />
          {/* <OakInput
            type="text"
            name="label"
            label="child slot simulate - supports dynamic html content in realtime"
            value={state.label}
            gutterBottom
            handleInput={handleChange}
          /> */}
        </OakSection>
      </OakSheet>
    </>
  );
};

export default Playground;
