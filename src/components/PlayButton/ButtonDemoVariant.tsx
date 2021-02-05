import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OakButton from '../../oakui/wc/OakButton';
import ButtonContainer from './ButtonContainer';

interface Props {
  semitransparent?: boolean;
}
const ButtonDemoVariant = (props: Props) => {
  const dummyAction = () => {
    console.log('button clicked');
  };

  return (
    <ButtonContainer align="left">
      <OakButton
        handleClick={dummyAction}
        theme="primary"
        variant="appear"
        shape="rectangle"
        semitransparent={props.semitransparent}
      >
        Appear
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="primary"
        variant="disappear"
        shape="rectangle"
        semitransparent={props.semitransparent}
      >
        Disappear
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="primary"
        variant="regular"
        shape="rectangle"
        semitransparent={props.semitransparent}
      >
        Regular
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="primary"
        variant="drama"
        shape="rectangle"
        semitransparent={props.semitransparent}
      >
        Drama
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="primary"
        variant="block"
        shape="rectangle"
        semitransparent={props.semitransparent}
      >
        Block
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="primary"
        variant="outline"
        shape="rectangle"
        semitransparent={props.semitransparent}
      >
        Outline
      </OakButton>
      <OakButton
        handleClick={dummyAction}
        theme="primary"
        variant="disabled"
        shape="rectangle"
        semitransparent={props.semitransparent}
      >
        Disabled
      </OakButton>
    </ButtonContainer>
  );
};

export default ButtonDemoVariant;
