import React from 'react';
import OakTypography from '../../oakui/wc/OakTypography';
import ButtonDemo from './ButtonDemo';
import './style.scss';

interface Props {
  match: any;
  history: any;
}

const PlayButton = (props: Props) => {
  return (
    <>
      <OakTypography variant="h2">Button demo</OakTypography>
      <ButtonDemo />
    </>
  );
};

export default PlayButton;
