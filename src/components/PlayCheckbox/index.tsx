import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakTab from '../../oakui/wc/OakTab';
import OakTypography from '../../oakui/wc/OakTypography';
import OakContainer from '../../oakui/wc/OakContainer';
import OakCard from '../../oakui/wc/OakCard';
import OakSelect from '../../oakui/wc/OakSelect';
import OakCheckbox from '../../oakui/wc/OakCheckbox';
import OakButton from '../../oakui/wc/OakButton';
import OakCheckboxGroup from '../../oakui/wc/OakCheckboxGroup';
import OakInput from '../../oakui/wc/OakInput';
import OakForm from '../../oakui/wc/OakForm';

interface Props {
  match: any;
  history: any;
}

const PlayCheckbox = (props: Props) => {
  const [state, setState] = useState<any>({
    color: 'primary',
    size: 'small',
    min: 2,
    max: 0,
  });

  const [checked, setChecked] = useState({
    text: '',
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handleCheckedChange = (detail: any) => {
    setChecked({ ...checked, [detail.name]: detail.value });
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
      <OakCard>
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
      </OakCard>
      <OakCard>
        <OakForm
          formGroupName="play-checkbox-form-group"
          handleSubmit={handleSubmit}
        >
          <OakCheckboxGroup
            label="Checkbox test"
            tooltip="lorem ipsum dolor sit"
            formGroupName="play-checkbox-form-group"
            checkboxGroupName="play-checkbox-group"
            name="checkboxGroupElement"
            min={state.min}
            max={state.max}
            handleChange={handleCheckedChange}
            gutterBottom
            validatorFunction={validatorFunction}
          >
            <div className="align-checkbox">
              <OakCheckbox
                name="one"
                checkboxGroupName="play-checkbox-group"
                value={checked.one}
                color={state.color}
                size={state.size}
                // handleChange={handleCheckedChange}
              >
                derat opusim
              </OakCheckbox>
              <OakCheckbox
                name="two"
                checkboxGroupName="play-checkbox-group"
                value={checked.two}
                color={state.color}
                size={state.size}
                // handleChange={handleCheckedChange}
              >
                Dolor sit
              </OakCheckbox>
              <OakCheckbox
                name="three"
                checkboxGroupName="play-checkbox-group"
                value={checked.three}
                color={state.color}
                size={state.size}
                // handleChange={handleCheckedChange}
              >
                Lorem ipsum
              </OakCheckbox>
              <OakCheckbox
                name="four"
                checkboxGroupName="play-checkbox-group"
                value={checked.four}
                color={state.color}
                size={state.size}
                // handleChange={handleCheckedChange}
              >
                Provident aliquam iusto ipsam
              </OakCheckbox>
              <OakCheckbox
                name="five"
                checkboxGroupName="play-checkbox-group"
                value={checked.five}
                color={state.color}
                size={state.size}
                // handleChange={handleCheckedChange}
              >
                Quaerat similique accusantium
              </OakCheckbox>
            </div>
          </OakCheckboxGroup>
          <OakButton
            theme="primary"
            variant="appear"
            type="submit"
            formGroupName="play-checkbox-form-group"
          >
            Submit
          </OakButton>
        </OakForm>
      </OakCard>
    </>
  );
};

export default PlayCheckbox;
