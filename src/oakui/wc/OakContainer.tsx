import React from 'react';

interface Props {
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

const OakContainer = (props: Props) => {
  return (
    <oak-container
      elevation={props.elevation}
      rounded={props.rounded}
      variant={props.variant}
      fillType={props.fillType}
      paddingHorizontal={props.paddingHorizontal}
      paddingVertical={props.paddingVertical}
    >
      {props.children}
    </oak-container>
  );
};

export default OakContainer;
