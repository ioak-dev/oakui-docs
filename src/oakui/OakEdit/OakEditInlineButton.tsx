import React, { useEffect, useState } from 'react';
import './OakEditInlineButton.scss';

interface Props {
  children: any;
  handleClick: any;
}
const OakEditInlineButton = (props: Props) => {
  return (
    <button className="oak-edit-toolbar-button" onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default OakEditInlineButton;
