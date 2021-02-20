import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakSection from '../../oakui/wc/OakSection';
import OakSelect from '../../oakui/wc/OakSelect';
import OakRadio from '../../oakui/wc/OakRadio';
import OakButton from '../../oakui/wc/OakButton';
import OakRadioGroup from '../../oakui/wc/OakRadioGroup';
import OakInput from '../../oakui/wc/OakInput';
import OakForm from '../../oakui/wc/OakForm';

interface Props {
  match: any;
  history: any;
}

const PlayRadio = (props: Props) => {
  const [state, setState] = useState<any>({
    color: 'primary',
    size: 'small',
    min: 2,
    max: 0,
  });

  const [radioValue, setRadioValue] = useState('one');

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handleCheckedChange = (detail: any) => {
    console.log(detail);
    setRadioValue(detail.value);
  };

  const handleSubmit = (event: any) => {
    console.log(event);
  };

  const validatorFunction = (_, __, value: any): string[] => {
    const outcome: string[] = [];
    outcome.push('Custom validation error');
    console.log(value);
    return outcome;
  };

  return (
    <>
      <OakSection>
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
        />
        <OakSelect
          label="Size"
          value={state.size}
          options={['xsmall', 'small', 'medium', 'large']}
          name="size"
          handleChange={handleChange}
        />
        <OakInput
          type="number"
          name="min"
          label="Validation - Min"
          value={state.min}
          gutterBottom
          handleInput={handleChange}
        />
        <OakInput
          type="number"
          name="max"
          label="Validation - Max"
          value={state.max}
          gutterBottom
          handleInput={handleChange}
        />
      </OakSection>
      <OakSection>
        <OakForm
          formGroupName="play-radio-form-group"
          handleSubmit={handleSubmit}
        >
          <OakRadioGroup
            label="Checkbox test"
            tooltip="lorem ipsum dolor sit"
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
          <OakButton
            theme="primary"
            variant="appear"
            type="submit"
            formGroupName="play-radio-form-group"
          >
            Submit
          </OakButton>
        </OakForm>
      </OakSection>
    </>
  );
};

export default PlayRadio;
