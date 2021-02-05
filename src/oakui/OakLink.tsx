import React, { ReactNode, useEffect, useRef } from 'react';
import { LINK_CLICK_EVENT } from 'oakui/dist/types/LinkEventTypes';

interface Props {
  handleClick?: any;
  href?: string;
  children: any;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  display?: 'initial' | 'block' | 'inline';
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline'
    | 'inherit';
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'primary-text'
    | 'secondary-text'
    | 'tertiary-text'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'danger-text'
    | 'warning-text'
    | 'success-text'
    | 'info';
  underline?: 'none' | 'hover' | 'always';
  disabled?: boolean;
}

const OakLink = (props: Props) => {
  const elementRef = useRef();

  const handleClick = (event: any) => {
    props.handleClick(event);
  };

  useEffect(() => {
    (elementRef as any).current.addEventListener(LINK_CLICK_EVENT, handleClick);

    return () => {
      (elementRef as any).current?.removeEventListener(
        LINK_CLICK_EVENT,
        handleClick
      );
    };
  });

  return (
    <oak-link
      href={props.href}
      align={props.align}
      display={props.display}
      variant={props.variant}
      color={props.color}
      underline={props.underline}
      ref={elementRef}
    >
      {props.children}
    </oak-link>
  );
};

export default OakLink;
