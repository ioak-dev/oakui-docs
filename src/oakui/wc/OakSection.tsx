import {
  getStyleClass,
  OakSectionStyleProps,
} from 'oakui/dist/styles/OakSectionStyles';
import React, { useState, useEffect, useRef } from 'react';

interface Props extends OakSectionStyleProps {
  children: any;
}

const OakSection = (props: Props) => {
  return <div className={getStyleClass(props)}>{props.children}</div>;
};

export default OakSection;
