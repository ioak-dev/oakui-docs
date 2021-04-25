import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { OakSectionProps } from '@oakui/core-stage/style-composer/OakSectionComposer';

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
    type: 'text',
    label: 'test field',
    tooltip: '',
    size: 'small',
    shape: 'rectangle',
    rounded: true,
    fill: true,
    elevation: 0,
    gutterBottom: true,
    color: 'container',
    min: null,
    max: null,
    minLength: null,
    maxLength: null,
    regexp: null,
    regexpChoice: 'none',
    validatorFunction: null,
    errorStyle: 'outline',
  });

  const [data, setData] = useState({
    testField: '',
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isValidationSettingsOpen, setIsValidationSettingsOpen] = useState(
    false
  );

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handleRegexpChange = (detail: any) => {
    let val = null;
    switch (detail.value) {
      case 'example: /oakui/i':
        val = /oakui/i;
        break;
      case 'example: /S+@S+.S+/':
        val = /\S+@\S+\.\S+/;
      default:
        break;
    }
    setState({ ...state, [detail.name]: detail.value, regexp: val });
  };

  const handleFormSubmit = () => {
    console.log('form submit');
  };

  const validatorFunction = (_, __, value: any): string[] => {
    if (state.validatorFunction) {
      const outcome: string[] = [];
      outcome.push(state.validatorFunction);
      return outcome;
    }
    return [];
  };

  return (
    <>
      <OakForm formGroupName="play-input-form" handleSubmit={handleFormSubmit}>
        <OakInput
          name="testField"
          value={data.testField}
          size={state.size}
          shape={state.shape}
          label={state.label}
          tooltip={state.tooltip}
          color={state.color}
          fill={state.fill}
          type={state.type}
          max={state.max}
          min={state.min}
          maxLength={state.maxLength}
          minLength={state.minLength}
          regexp={state.regexp}
          formGroupName="play-input-form"
          gutterBottom={state.gutterBottom}
          validatorFunction={validatorFunction}
          errorStyle={state.errorStyle}
        />
      </OakForm>
      <OakFormActionsContainer align="left">
        <OakButton
          theme="info"
          variant="appear"
          handleClick={() => setIsOpen(true)}
          size="xsmall"
        >
          Component settings
        </OakButton>
        <OakButton
          theme="info"
          variant="appear"
          handleClick={() => setIsValidationSettingsOpen(true)}
          size="xsmall"
        >
          Validation settings
        </OakButton>
        <OakButton
          theme="info"
          variant="block"
          type="submit"
          formGroupName="play-input-form"
          size="xsmall"
        >
          Submit to validate
        </OakButton>
      </OakFormActionsContainer>
      <OakSheet
        isOpen={isValidationSettingsOpen}
        handleClose={() => setIsValidationSettingsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="surface" outlineColor="none" rounded fullWidth>
          <OakSelect
            label="type"
            value={state.type}
            options={['text', 'number', 'password', 'date', 'file']}
            name="type"
            gutterBottom
            handleChange={handleChange}
          />
          <OakSelect
            label="errorStyle"
            value={state.errorStyle}
            options={['outline', 'fill']}
            name="errorStyle"
            gutterBottom
            handleChange={handleChange}
          />
          {state.type === 'number' && (
            <OakInput
              type="number"
              name="min"
              label="min"
              value={state.min}
              gutterBottom
              handleInput={handleChange}
            />
          )}
          {state.type === 'number' && (
            <OakInput
              type="number"
              name="max"
              label="max"
              value={state.max}
              gutterBottom
              handleInput={handleChange}
            />
          )}
          {state.type === 'text' && (
            <OakInput
              type="number"
              name="minLength"
              label="minLength"
              value={state.minLength}
              gutterBottom
              handleInput={handleChange}
            />
          )}
          {state.type === 'text' && (
            <OakInput
              type="number"
              name="maxLength"
              label="maxLength"
              value={state.maxLength}
              gutterBottom
              handleInput={handleChange}
            />
          )}
          {state.type !== 'file' && (
            <OakSelect
              label="regexp"
              value={state.regexpChoice}
              options={['none', 'example: /oakui/i', 'example: /S+@S+.S+/']}
              name="regexpChoice"
              gutterBottom
              handleChange={handleRegexpChange}
            />
          )}
          <OakInput
            type="text"
            name="validatorFunction"
            label="validatorFunction - simulated message"
            value={state.validatorFunction}
            gutterBottom
            handleInput={handleChange}
          />
        </OakSection>
      </OakSheet>
      <OakSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="surface" outlineColor="none" rounded fullWidth>
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
            options={['sharp', 'rectangle', 'rounded', 'leaf', 'underline']}
            name="shape"
            gutterBottom
            handleChange={handleChange}
          />
          <OakSelect
            label="color"
            value={state.color}
            positioningStrategy="fixed"
            options={[
              'none',
              'global',
              'container',
              'surface',
              'float',
              'primary',
              'secondary',
              'tertiary',
              'default',
              'danger',
              'warning',
              'success',
              'info',
              'invert',
            ]}
            name="color"
            gutterBottom
            handleChange={handleChange}
          />
          <OakInput
            type="number"
            name="elevation"
            label="elevation"
            value={state.elevation}
            min={0}
            max={24}
            gutterBottom
            handleInput={handleChange}
          />
          <OakInput
            type="text"
            name="label"
            label="label"
            value={state.label}
            gutterBottom
            handleInput={handleChange}
          />
          <OakInput
            type="text"
            name="tooltip"
            label="tooltip"
            value={state.tooltip}
            gutterBottom
            handleInput={handleChange}
          />
          <OakCheckbox
            name="fill"
            value={state.fill || false}
            handleChange={handleChange}
          >
            fill
          </OakCheckbox>
          <OakCheckbox
            name="rounded"
            value={state.rounded || false}
            handleChange={handleChange}
          >
            rounded
          </OakCheckbox>
        </OakSection>
      </OakSheet>
    </>
  );
};

export default Playground;
