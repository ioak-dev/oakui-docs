import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakTab from '../../oakui/wc/OakTab';
import OakTypography from '../../oakui/wc/OakTypography';
import OakSection from '../../oakui/wc/OakSection';
import OakSelect from '../../oakui/wc/OakSelect';
import OakCheckbox from '../../oakui/wc/OakCheckbox';
import OakButton from '../../oakui/wc/OakButton';
import OakCheckboxGroup from '../../oakui/wc/OakCheckboxGroup';
import OakInput from '../../oakui/wc/OakInput';
import OakForm from '../../oakui/wc/OakForm';
import OakSheet from '../../oakui/wc/OakSheet';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakRadio from '../../oakui/wc/OakRadio';
import OakRadioGroup from '../../oakui/wc/OakRadioGroup';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [state, setState] = useState<any>({
    label: 'Ratione quaerat unde',
    tooltip:
      'cupiditate laborum hic iste nam doloribus dolorem deleniti quod omnis quasi mollitia consequatur',
    color: 'primary',
    size: 'small',
    min: 2,
    max: 0,
    validatorFunction: null,
  });

  const [radioValue, setRadioValue] = useState('one');
  const [isOpen, setIsOpen] = useState(false);
  const [isValidationSettingsOpen, setIsValidationSettingsOpen] = useState(
    false
  );

  const handleCheckedChange = (detail: any) => {
    setRadioValue(detail.value);
  };

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handleSubmit = (event: any) => {
    console.log(event);
  };

  const validatorFunction = (_: any, __: any, value: any): string[] => {
    if (state.validatorFunction) {
      const outcome: string[] = [];
      outcome.push(state.validatorFunction);
      return outcome;
    }
    return [];
  };

  return (
    <>
      <OakSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="none" outlineColor="none" rounded fullWidth>
          <OakSelect
            label="Color"
            value={state.color}
            options={[
              'primary',
              'secondary',
              'tertiary',
              'default',
              'danger',
              'warning',
              'success',
              'invert',
              'info',
            ]}
            name="color"
            handleChange={handleChange}
            gutterBottom
          />
          <OakSelect
            label="Size"
            value={state.size}
            options={['xsmall', 'small', 'medium', 'large']}
            name="size"
            handleChange={handleChange}
            gutterBottom
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
        </OakSection>
      </OakSheet>
      <OakSheet
        isOpen={isValidationSettingsOpen}
        handleClose={() => setIsValidationSettingsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="none" outlineColor="none" rounded fullWidth>
          <OakInput
            type="number"
            name="min"
            label="min"
            value={state.min}
            gutterBottom
            handleInput={handleChange}
          />
          <OakInput
            type="number"
            name="max"
            label="max"
            value={state.max}
            gutterBottom
            handleInput={handleChange}
          />
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
      {/* <OakSection fillColor="none"> */}

      <OakForm
        formGroupName="play-radio-form-group"
        handleSubmit={handleSubmit}
      >
        <OakRadioGroup
          label={state.label}
          tooltip={state.tooltip}
          formGroupName="play-radio-form-group"
          radioGroupName="play-radio-group"
          name="checkboxGroupElement"
          value={radioValue}
          handleChange={handleCheckedChange}
          gutterBottom
          validatorFunction={validatorFunction}
        >
          <div className="align-checkbox">
            <OakRadio
              name="one"
              radioGroupName="play-radio-group"
              color={state.color}
              size={state.size}
              // handleChange={handleCheckedChange}
            >
              derat opusim
            </OakRadio>
            <OakRadio
              name="two"
              radioGroupName="play-radio-group"
              color={state.color}
              size={state.size}
              // handleChange={handleCheckedChange}
            >
              Dolor sit
            </OakRadio>
            <OakRadio
              name="three"
              radioGroupName="play-radio-group"
              color={state.color}
              size={state.size}
              // handleChange={handleCheckedChange}
            >
              Lorem ipsum
            </OakRadio>
            <OakRadio
              name="four"
              radioGroupName="play-radio-group"
              color={state.color}
              size={state.size}
              // handleChange={handleCheckedChange}
            >
              Provident aliquam iusto ipsam
            </OakRadio>
            <OakRadio
              name="five"
              radioGroupName="play-radio-group"
              color={state.color}
              size={state.size}
              // handleChange={handleCheckedChange}
            >
              Quaerat similique accusantium
            </OakRadio>
          </div>
        </OakRadioGroup>
      </OakForm>
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
          formGroupName="play-radio-form-group"
          size="xsmall"
        >
          Submit to validate
        </OakButton>
      </OakFormActionsContainer>
      {/* </OakSection> */}
    </>
  );
};

export default Playground;
