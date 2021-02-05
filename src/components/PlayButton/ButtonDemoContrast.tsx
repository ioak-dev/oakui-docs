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
  semitransparent?: boolean;
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
        semitransparent={props.semitransparent}
      >
        Appear
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme={props.theme}
        variant="disappear"
        shape="rectangle"
        semitransparent={props.semitransparent}
      >
        Disappear
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme={props.theme}
        variant="regular"
        shape="rectangle"
        semitransparent={props.semitransparent}
      >
        Regular
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme={props.theme}
        variant="drama"
        shape="rectangle"
        semitransparent={props.semitransparent}
      >
        Drama
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme={props.theme}
        variant="block"
        shape="rectangle"
        semitransparent={props.semitransparent}
      >
        Block
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme={props.theme}
        variant="outline"
        shape="rectangle"
        semitransparent={props.semitransparent}
      >
        Outline
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme={props.theme}
        variant="disabled"
        shape="rectangle"
        semitransparent={props.semitransparent}
      >
        Disabled
      </OakButton>
    </ButtonContainer>
  );
};

export default ButtonDemoContrast;
