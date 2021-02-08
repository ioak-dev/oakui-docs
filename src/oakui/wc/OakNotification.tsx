import React, { ReactNode, useEffect, useLayoutEffect, useRef } from 'react';

interface Props {
  indicator?:
    | 'circle'
    | 'circle-dotted'
    | 'circle-outline'
    | 'ellipse'
    | 'ellipse-dotted'
    | 'ellipse-outline'
    | 'fill'
    | 'none';
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
  outlined?: boolean;
  fillType?:
    | 'none'
    | 'fill'
    | 'semitransparent1'
    | 'semitransparent2'
    | 'transparent';
  paddingVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const OakNotification = (props: Props) => {
  const elementRef = useRef();

  useEffect(() => {
    (elementRef.current as any)!.outlined = props.outlined;
  }, [props.outlined]);

  useEffect(() => {
    (elementRef.current as any)!.rounded = props.rounded;
  }, [props.rounded]);

  return (
    <oak-notification
      ref={elementRef}
      elevation={props.elevation}
      fillType={props.fillType}
      paddingVertical={props.paddingVertical}
      indicator={props.indicator}
    />
  );
};

export default OakNotification;
