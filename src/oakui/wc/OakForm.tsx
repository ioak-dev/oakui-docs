import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { FORM_SUBMIT_EVENT } from 'lit-element-starter-ts/dist/types/FormEventTypes';
// import { OakForm as OakFormTag } from 'lit-element-starter-ts/dist/components/public/oak-form';

interface Props {
  handleSubmit: any;
  children: any;
  formGroupName: string;
}
const OakForm = (props: Props) => {
  const elementRef = useRef();

  const handleSubmit = (event) => {
    console.log(event);
    event.detail.validationResults.forEach((item) => {
      console.log(item.formControlValue, typeof item.formControlValue);
    });
    if (props.handleSubmit) {
      const { detail } = event;
      props.handleSubmit(detail);
    }
  };

  useEffect(() => {
    (elementRef as any).current.addEventListener(
      FORM_SUBMIT_EVENT,
      handleSubmit
    );

    return () => {
      (elementRef as any).current.removeEventListener(
        FORM_SUBMIT_EVENT,
        handleSubmit
      );
    };
  });

  return (
    <oak-form formGroupName={props.formGroupName} ref={elementRef}>
      {props.children}
    </oak-form>
  );
};

export default OakForm;
