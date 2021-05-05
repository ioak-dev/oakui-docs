import React, { useEffect, useState } from 'react';
import './OakEditToolbarButton.scss';

interface Props {
  children: any;
  handleClick: any;
}
const OakEditToolbarButton = (props: Props) => {
  return (
    <button className="oak-edit-toolbar-button" onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default OakEditToolbarButton;
