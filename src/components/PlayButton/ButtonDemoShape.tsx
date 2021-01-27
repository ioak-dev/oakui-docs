import { faGlassMartini } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OakButton from '../../oakui/wc/OakButton';
import ButtonContainer from './ButtonContainer';

const ButtonDemoShape = () => {
  const dummyAction = () => {
    console.log('button clicked');
  };

  return (
    <ButtonContainer align="left">
      <OakButton
        handleClick={dummyAction}
        theme="primary"
        variant="regular"
        shape="sharp"
      >
        Sharp
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="primary"
        variant="regular"
        shape="rectangle"
      >
        Rectangle
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="primary"
        variant="regular"
        shape="rounded"
      >
        Rounded
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="primary"
        variant="regular"
        shape="leaf"
      >
        Leaf shape
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="primary"
        variant="regular"
        shape="icon"
      >
        <FontAwesomeIcon icon={faGlassMartini} />
      </OakButton>
    </ButtonContainer>
  );
};

export default ButtonDemoShape;
