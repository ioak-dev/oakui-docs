import {
  faExclamationTriangle,
  faRss,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OakButton from '../../oakui/wc/OakButton';
import ButtonContainer from './ButtonContainer';

const ButtonDemoTheme = () => {
  const dummyAction = () => {
    console.log('button clicked');
  };

  return (
    <ButtonContainer align="left">
      <OakButton
        handleClick={dummyAction}
        theme="primary"
        variant="regular"
        shape="rectangle"
      >
        Primary
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="secondary"
        variant="regular"
        shape="rectangle"
      >
        Secondary
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="tertiary"
        variant="regular"
        shape="rectangle"
      >
        Tertiary
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="default"
        variant="regular"
        shape="rectangle"
      >
        <FontAwesomeIcon icon={faRss} />
        Default
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="danger"
        variant="regular"
        shape="rectangle"
      >
        Danger
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="warning"
        variant="regular"
        shape="rectangle"
      >
        <FontAwesomeIcon icon={faExclamationTriangle} />
        Warning
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="success"
        variant="regular"
        shape="rectangle"
      >
        Success
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="info"
        variant="regular"
        shape="rectangle"
      >
        Info
      </OakButton>
    </ButtonContainer>
  );
};

export default ButtonDemoTheme;
