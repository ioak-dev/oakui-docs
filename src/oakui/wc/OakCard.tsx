import React, { useState, useEffect } from 'react';

interface Props {
  heading?: string;
  headerVariant?: 'subtle' | 'apparent';
  children: any;
  elevation?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24;
  rounded?: boolean;
  variant?: 'outlined';
  fillType?: 'fill' | 'none';
  paddingHorizontal?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  paddingVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const OakCard = (props: Props) => {
  return (
    <oak-card
      elevation={props.elevation}
      rounded={props.rounded}
      variant={props.variant}
      fillType={props.fillType}
      paddingHorizontal={props.paddingHorizontal}
      paddingVertical={props.paddingVertical}
      heading={props.heading}
      headerVariant={props.headerVariant}
    >
      {props.children}
    </oak-card>
  );
};

export default OakCard;
