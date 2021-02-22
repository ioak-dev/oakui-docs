import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import OakAppLayoutEvent from 'oakui/dist/event/OakAppLayoutEvent';

interface Props {
  topbarVariant?: 'sticky' | 'static' | 'auto';
  leftDrawerOpen?: boolean;
  rightDrawerOpen?: boolean;
  leftDrawerType?: 'side' | 'over' | 'push';
  rightDrawerType?: 'side' | 'over' | 'push';
  topbarColor?:
    | 'global'
    | 'container'
    | 'surface'
    | 'float'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'invert'
    | 'custom';
  topElevation?:
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
  leftElevation?:
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
  rightElevation?:
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
  children: any;
  handleClose: Function;
}
const OakAppLayout = (props: Props) => {
  const elementRef = useRef();

  const [slots, setSlots] = useState<any>({});

  const handleClose = (event: any) => {
    const { detail } = event;
    props.handleClose(detail);
  };

  useEffect(() => {
    let newSlots = {};
    React.Children.toArray(props.children).forEach((node: any) => {
      newSlots = { ...newSlots, [node.props.slot]: node };
    });
    setSlots(newSlots);
  }, [props.children]);

  useEffect(() => {
    (elementRef as any).current.addEventListener(
      OakAppLayoutEvent.CLOSE_DRAWER,
      handleClose
    );

    return () => {
      (elementRef as any).current?.removeEventListener(
        OakAppLayoutEvent.CLOSE_DRAWER,
        handleClose
      );
    };
  });

  useEffect(() => {
    (elementRef.current as any)!.leftDrawerOpen = props.leftDrawerOpen;
  }, [props.leftDrawerOpen]);

  useEffect(() => {
    (elementRef.current as any)!.rightDrawerOpen = props.rightDrawerOpen;
  }, [props.rightDrawerOpen]);

  return (
    <oak-app-layout
      ref={elementRef}
      leftDrawerType={props.leftDrawerType}
      rightDrawerType={props.rightDrawerType}
      topElevation={props.topElevation}
      leftElevation={props.leftElevation}
      rightElevation={props.rightElevation}
      topbarVariant={props.topbarVariant}
      topbarColor={props.topbarColor}
    >
      {slots['drawer-left']}
      {slots['drawer-right']}
      {slots.topbar}
      {slots.content}
    </oak-app-layout>
  );
};

export default OakAppLayout;
