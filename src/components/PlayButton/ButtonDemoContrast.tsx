import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OakButton from '../../oakui/wc/OakButton';
import ButtonContainer from './ButtonContainer';
import './ButtonDemo.scss';

interface Props {
  theme:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'info'
    | 'danger'
    | 'warning'
    | 'success';
}

const ButtonDemoContrast = (props: Props) => {
  const dummyAction = () => {
    console.log('button clicked');
  };

  return (
    <ButtonContainer align="left">
      <OakButton
        handleClick={dummyAction}
        theme={props.theme}
        variant="appear"
        shape="rectangle"
      >
        Appear
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme={props.theme}
        variant="disappear"
        shape="rectangle"
      >
        Disappear
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme={props.theme}
        variant="regular"
        shape="rectangle"
      >
        Regular
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme={props.theme}
        variant="drama"
        shape="rectangle"
      >
        Drama
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme={props.theme}
        variant="block"
        shape="rectangle"
      >
        Block
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme={props.theme}
        variant="outline"
        shape="rectangle"
      >
        Outline
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme={props.theme}
        variant="disabled"
        shape="rectangle"
      >
        Disabled
      </OakButton>
    </ButtonContainer>
  );
};

export default ButtonDemoContrast;
