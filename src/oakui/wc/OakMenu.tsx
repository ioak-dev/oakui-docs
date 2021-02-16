import React, { useState, useEffect, ReactElement, useRef } from 'react';
import { useLocation } from 'react-router';
import { getStyleClass } from 'oakui/dist/styles/OakMenuStyles';
import OakButton from './OakButton';

interface Props {
  children: any;
}

const OakMenu = (props: Props) => {
  const location = useLocation();
  const elementRef = useRef();
  const [activeTab, setActiveTab] = useState('');

  return (
    <oak-menu ref={elementRef}>
      <button type="button" slot="menu-trigger">
        menu
      </button>
      <div slot="menu-popup" className={getStyleClass({})}>
        {props.children}
      </div>
    </oak-menu>
  );
};

export default OakMenu;
