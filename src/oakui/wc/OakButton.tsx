import React, { ReactNode, useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { BUTTON_CLICK_EVENT } from 'lit-element-starter-ts/dist/types/ButtonEventTypes';

interface Props {
  handleClick?: any;
  variant?:
    | 'block'
    | 'outline'
    | 'appear'
    | 'disappear'
    | 'regular'
    | 'disabled'
    | 'drama';
  theme?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info';
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  shape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' | 'icon';
  align?: 'left' | 'right' | 'center';
  children?: ReactNode;
  type?: 'button' | 'submit' | 'link';
  formGroupName?: string;
}

const OakButton = (props: Props) => {
  const profile = useSelector((state) => state.profile);

  const elementRef = useRef();

  const handleClick = (event) => {
    console.log('**click');
    props.handleClick(event);
  };

  const handleSubmit = (event) => {
    console.log('**submit');
    props.handleClick(event);
  };

  useEffect(() => {
    (elementRef as any).current.addEventListener(
      BUTTON_CLICK_EVENT,
      handleClick
    );
    (elementRef as any).current.addEventListener('onSubmit', handleSubmit);

    return () => {
      (elementRef as any).current.removeEventListener(
        BUTTON_CLICK_EVENT,
        handleClick
      );
      (elementRef as any).current.removeEventListener('onSubmit', handleSubmit);
    };
  });

  return (
    <oak-button
      ref={elementRef}
      theme={props.theme}
      variant={props.variant}
      size={props.size}
      shape={props.shape}
      type={props.type}
      visualmode={profile.theme === 'theme_dark' ? 'dark' : 'light'}
      formGroupName={props.formGroupName}
    >
      {props.children}
    </oak-button>
  );
};

export default OakButton;