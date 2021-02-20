import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface Props {
  position?: 'left' | 'right' | 'top' | 'bottom';
  isOpen: boolean;
  children: any;
}
const OakDrawer = (props: Props) => {
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
    (elementRef.current as any)!.isOpen = props.isOpen;
  }, [props.isOpen]);

  return (
    <oak-drawer ref={elementRef} position={props.position}>
      {slots.drawer}
      {slots.content}
    </oak-drawer>
  );
};

export default OakDrawer;
