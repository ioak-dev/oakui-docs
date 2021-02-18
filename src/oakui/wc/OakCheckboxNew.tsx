import {
  INPUT_CHANGE_EVENT,
  INPUT_INPUT_EVENT,
} from 'oakui/dist/types/InputEventTypes';
import React, { useState, useEffect, ReactElement, useRef } from 'react';
import { useLocation } from 'react-router';

interface Props {
  name: string;
  value: boolean;
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'invert'
    | 'info';
  handleChange: any;
  children: any;
}

const OakCheckboxNew = (props: Props) => {
  const location = useLocation();
  const elementRef = useRef();

  const handleChange = (event: any) => {
    console.log(event.detail.value);
    const { detail } = event;
    props.handleChange(detail);
  };

  useEffect(() => {
    (elementRef as any).current.addEventListener(
      INPUT_CHANGE_EVENT,
      handleChange
    );
    (elementRef as any).current.addEventListener(
      INPUT_INPUT_EVENT,
      handleChange
    );
    return () => {
      (elementRef as any).current?.removeEventListener(
        INPUT_CHANGE_EVENT,
        handleChange
      );
      (elementRef as any).current?.removeEventListener(
        INPUT_INPUT_EVENT,
        handleChange
      );
    };
  });

  useEffect(() => {
    (elementRef.current as any)!.value = props.value;
  }, [props.value]);

  return (
    <oak-checkbox-item ref={elementRef} name={props.name} color={props.color}>
      {props.children}
    </oak-checkbox-item>
  );
};

export default OakCheckboxNew;
