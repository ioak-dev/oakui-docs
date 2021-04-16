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
    fill: 'container',
    native: false,
    multiple: true,
    size: 'small',
    shape: 'rectangle',
    validatorFunction: null,
    placeholder: 'Maxime dolores',
    autoCompleteVariant: 'autocomplete',
  });

  const [demoList, setDemoList] = useState('');

  const [demoListM, setDemoListM] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [isValidationSettingsOpen, setIsValidationSettingsOpen] = useState(
    false
  );

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handleDemoListChange = (detail: any) => {
    console.log(state.multiple, detail);
    if (state.multiple) {
      setDemoListM(detail.value);
    } else {
      setDemoList(detail.value);
    }
  };

  const handleSubmit = (event: any) => {
    console.log(event);
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
      <OakSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="none" outlineColor="none" rounded fullWidth>
          <OakCheckbox
            name="multiple"
            value={state.multiple || false}
            handleChange={handleChange}
          >
            multiple
          </OakCheckbox>
          <OakCheckbox
            name="native"
            value={state.native || false}
            handleChange={handleChange}
          >
            native
          </OakCheckbox>
          <OakSelect
            label="autoCompleteVariant"
            value={state.autoCompleteVariant}
            options={['searchbox', 'autocomplete', 'none']}
            name="autoCompleteVariant"
            handleChange={handleChange}
            gutterBottom
          />
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
            label="fill"
            value={state.fill}
            options={['global', 'container', 'surface', 'float']}
            name="fill"
            handleChange={handleChange}
            gutterBottom
          />
          <OakSelect
            label="size"
            value={state.size}
            options={['xsmall', 'small', 'medium', 'large']}
            name="size"
            handleChange={handleChange}
            gutterBottom
          />
          <OakSelect
            label="shape"
            value={state.shape}
            options={['rectangle', 'sharp', 'rounded', 'leaf']}
            name="shape"
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
        formGroupName="play-checkbox-form-group"
        handleSubmit={handleSubmit}
      >
        <OakSelect
          multiple={state.multiple}
          native={state.native}
          label={state.label}
          size={state.size}
          shape={state.shape}
          tooltip={state.tooltip}
          placeholder={state.placeholder}
          fill={state.fill}
          value={state.multiple ? demoListM : demoList}
          options={[
            'Deserunt ut',
            'labore iure',
            'dolores quo odit eos voluptatem doloribus',
            'Cum accusantium',
            'quia cumque ex praesentium',
            'corporis nulla dicta',
            'reprehenderit impedit',
          ]}
          name="demoList"
          handleChange={handleDemoListChange}
          autoCompleteVariant={state.autoCompleteVariant}
          gutterBottom
        />
        <OakSelect
          label={state.label}
          size={state.size}
          multiple={state.multiple}
          native={state.native}
          shape={state.shape}
          tooltip={state.tooltip}
          placeholder={state.placeholder}
          fill={state.fill}
          value={state.multiple ? demoListM : demoList}
          options={[
            'Deserunt ut',
            'labore iure',
            'dolores quo odit eos voluptatem doloribus',
            'Cum accusantium',
            'quia cumque ex praesentium',
            'corporis nulla dicta',
            'reprehenderit impedit',
          ]}
          name="demoList"
          handleChange={handleDemoListChange}
          autoCompleteVariant={state.autoCompleteVariant}
          gutterBottom
        />
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
          formGroupName="play-checkbox-form-group"
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
