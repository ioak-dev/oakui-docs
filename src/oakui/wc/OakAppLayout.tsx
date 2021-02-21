import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface Props {
  stickyTopbar?: boolean;
  leftDrawerOpen?: boolean;
  rightDrawerOpen?: boolean;
  leftDrawerType?: 'side' | 'over' | 'push';
  rightDrawerType?: 'side' | 'over' | 'push';
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
}
const OakAppLayout = (props: Props) => {
  const elementRef = useRef();

  const [slots, setSlots] = useState<any>({});

  useEffect(() => {
    let newSlots = {};
    React.Children.toArray(props.children).forEach((node: any) => {
      newSlots = { ...newSlots, [node.props.slot]: node };
    });
    setSlots(newSlots);
  }, [props.children]);

  // useEffect(() => {
  //   (elementRef as any).current.addEventListener(
  //     FORM_SUBMIT_EVENT,
  //     handleSubmit
  //   );

  //   (elementRef as any).current.addEventListener(FORM_RESET_EVENT, handleReset);

  //   return () => {
  //     (elementRef as any).current?.removeEventListener(
  //       FORM_SUBMIT_EVENT,
  //       handleSubmit
  //     );
  //     (elementRef as any).current?.removeEventListener(
  //       FORM_RESET_EVENT,
  //       handleReset
  //     );
  //   };
  // });

  useEffect(() => {
    (elementRef.current as any)!.leftDrawerOpen = props.leftDrawerOpen;
  }, [props.leftDrawerOpen]);

  useEffect(() => {
    (elementRef.current as any)!.rightDrawerOpen = props.rightDrawerOpen;
  }, [props.rightDrawerOpen]);

  useEffect(() => {
    (elementRef.current as any)!.stickyTopbar = props.stickyTopbar;
  }, [props.stickyTopbar]);

  return (
    <oak-app-layout
      ref={elementRef}
      leftDrawerType={props.leftDrawerType}
      rightDrawerType={props.rightDrawerType}
      leftElevation={props.leftElevation}
      rightElevation={props.rightElevation}
    >
      {slots['drawer-left']}
      {slots['drawer-right']}
      {slots.topbar}
      {slots.content}
    </oak-app-layout>
  );
};

export default OakAppLayout;
