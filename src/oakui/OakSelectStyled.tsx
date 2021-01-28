import { KeyboardArrowDown } from '@material-ui/icons';
import {
  INPUT_CHANGE_EVENT,
  INPUT_INPUT_EVENT,
  INPUT_SUBMIT_EVENT,
} from 'oakui/dist/types/InputEventTypes';
import React, { useEffect, useRef, useState } from 'react';
import './styles/oak-select.scss';

interface Props {
  name: string;
  label?: string;
  handleChange?: Function;
  handleInput?: Function;
  handleSubmit?: Function;
  value: string;
  options?: string[];
}

const OakSelectStyled = (props: Props) => {
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

  const handleSubmit = (event: { detail: any }) => {
    if (props.handleSubmit) {
      const { detail } = event;
      props.handleSubmit(detail);
    }
  };

  useEffect(() => {
    (elementRef.current as any)!.options = [
      'test',
      'one',
      'two',
      'lorem ipsum',
      'test',
      'one',
      'two',
      'lorem ipsum',
      'test',
      'one',
      'two',
      'lorem ipsum',
      'test',
      'one',
      'two',
      'lorem ipsum',
      'test',
      'one',
      'two',
      'lorem ipsum',
      'test',
      'one',
      'two',
      'lorem ipsum',
      'test',
      'one',
      'two',
      'lorem ipsum',
      'test',
      'one',
      'two',
      'lorem ipsum',
    ];
  }, []);

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
    };
  });

  return (
    <oak-select-modern
      ref={elementRef}
      value={props.value}
      label="label modern"
      name={props.name}
    />
  );
};

export default OakSelectStyled;
