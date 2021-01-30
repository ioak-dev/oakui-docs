import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  INPUT_CHANGE_EVENT,
  INPUT_INPUT_EVENT,
  INPUT_SUBMIT_EVENT,
  FILE_SELECTED_EVENT,
} from 'oakui/dist/types/InputEventTypes';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value: any;
  formGroupName?: string;
  handleChange?: any;
  handleInput?: any;
  tooltip?: string;
  multiple?: boolean;
  options?: any[];
  optionsAsKeyValue?: any[];
}

const OakSelect = (props: Props) => {
  const elementRef = useRef();

  const handleChange = (event: any) => {
    if (props.handleChange) {
      const { detail } = event;
      props.handleChange(detail);
    }
  };

  const handleInput = (event: any) => {
    if (props.handleInput) {
      const { detail } = event;
      props.handleInput(detail);
    }
  };

  useEffect(() => {
    (elementRef as any).current.addEventListener(
      INPUT_CHANGE_EVENT,
      handleChange
    );
    (elementRef as any).current.addEventListener(
      INPUT_INPUT_EVENT,
      handleInput
    );

    return () => {
      (elementRef as any).current?.removeEventListener(
        INPUT_CHANGE_EVENT,
        handleChange
      );
      (elementRef as any).current?.removeEventListener(
        INPUT_INPUT_EVENT,
        handleInput
      );
    };
  });

  useEffect(() => {
    (elementRef.current as any)!.options = props.options;
  }, [props.options]);

  useEffect(() => {
    (elementRef.current as any)!.optionsAsKeyValue = props.optionsAsKeyValue;
  }, [props.optionsAsKeyValue]);

  return (
    <oak-select
      ref={elementRef}
      label={props.label}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      formGroupName={props.formGroupName}
      tooltip={props.tooltip}
      multiple={props.multiple}
    />
  );
};

export default OakSelect;
