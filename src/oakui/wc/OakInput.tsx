import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  INPUT_CHANGE_EVENT,
  INPUT_INPUT_EVENT,
  INPUT_SUBMIT_EVENT,
  FILE_SELECTED_EVENT,
} from 'lit-element-starter-ts/dist/types/InputEventTypes';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value: any;
  formGroupName?: string;
  handleChange?: any;
  handleInput?: any;
  handleSubmit?: any;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  regexp?: object;
  validatorFunction?: Function;
  tooltip?: string;
  type?: 'text' | 'number' | 'password' | 'date' | 'file';
  multiple?: boolean;
}
const OakInput = (props: Props) => {
  const elementRef = useRef();

  const handleChange = (event) => {
    if (props.handleChange) {
      const { detail } = event;
      props.handleChange(detail);
    }
  };

  const handleInput = (event) => {
    if (props.handleInput) {
      const { detail } = event;
      props.handleInput(detail);
    }
  };

  const handleFileSelection = (event) => {
    handleInput(event);
    handleChange(event);
  };

  const handleSubmit = (event) => {
    if (props.handleSubmit) {
      const { detail } = event;
      props.handleSubmit(detail);
    }
  };

  useEffect(() => {
    // attachListener('change', handleChange);
    // attachListener('onSubmit', handleSubmit);
    (elementRef as any).current.addEventListener(
      INPUT_CHANGE_EVENT,
      handleChange
    );
    (elementRef as any).current.addEventListener(
      INPUT_INPUT_EVENT,
      handleInput
    );
    (elementRef as any).current.addEventListener(
      INPUT_SUBMIT_EVENT,
      handleSubmit
    );
    (elementRef as any).current.addEventListener(
      FILE_SELECTED_EVENT,
      handleFileSelection
    );

    return () => {
      (elementRef as any).current.removeEventListener(
        INPUT_CHANGE_EVENT,
        handleChange
      );
      (elementRef as any).current.removeEventListener(
        INPUT_INPUT_EVENT,
        handleInput
      );
      (elementRef as any).current.removeEventListener(
        INPUT_SUBMIT_EVENT,
        handleSubmit
      );
      (elementRef as any).current.removeEventListener(
        FILE_SELECTED_EVENT,
        handleFileSelection
      );
    };
  });

  useEffect(() => {
    (elementRef.current as any)!.regexp = props.regexp;
  }, [props.regexp]);

  useEffect(() => {
    (elementRef.current as any)!.value = props.value;
  }, [props.value]);

  useEffect(() => {
    (elementRef.current as any)!.validatorFunction = props.validatorFunction;
  }, [props.validatorFunction]);

  return (
    <oak-input
      ref={elementRef}
      label={props.label}
      name={props.name}
      placeholder={props.placeholder}
      formGroupName={props.formGroupName}
      minLength={props.minLength}
      maxLength={props.maxLength}
      min={props.min}
      max={props.max}
      tooltip={props.tooltip}
      type={props.type}
      multiple={props.multiple}
    />
  );
};

export default OakInput;