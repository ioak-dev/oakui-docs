import React, { useState, useEffect, ReactElement, useRef } from 'react';
import { useLocation } from 'react-router';

import { TAB_CHANGE_EVENT } from 'oakui/dist/types/TabEventTypes';

interface Props {
  slots: string[];
  children: any;
  handleChange: any;
}

const OakTabNew = (props: Props) => {
  const location = useLocation();
  const elementRef = useRef();
  const [activeTab, setActiveTab] = useState('');

  // useEffect(() => {
  //   initializeViews();
  // }, [props.children]);

  // const initializeViews = () => {
  //   let newSlots = {};
  //   React.Children.toArray(props.children).forEach((node: any) => {
  //     newSlots = { ...newSlots, [node.props.slot]: node };
  //   });
  //   setSlots(newSlots);
  //   if (props.noBookmarking && !activeTab) {
  //     setActiveTab(Object.keys(newSlots)[0]);
  //   }
  // };

  const handleTabChange = (event: any) => {
    setActiveTab(event.detail.value);
    props.handleChange(event);
  };

  useEffect(() => {
    (elementRef as any).current.addEventListener(
      TAB_CHANGE_EVENT,
      handleTabChange
    );

    return () => {
      (elementRef as any).current?.removeEventListener(
        TAB_CHANGE_EVENT,
        handleTabChange
      );
    };
  });

  useEffect(() => {
    (elementRef.current as any)!.slots = props.slots;
  }, [props.slots]);

  return (
    <oak-tab ref={elementRef} activeTab={activeTab}>
      <div slot="tab1">Lorem Ipsum one</div>
      <div slot="tab2">Lorem Ipsum two</div>
      <div slot="tab3">Lorem Ipsum three</div>
      <div slot="tab4">Lorem Ipsum four</div>
      <div slot="tab5">Lorem Ipsum five</div>
      <div slot="tab6">Lorem Ipsum six</div>
      <div slot="tab7">Lorem Ipsum seven</div>
      <div slot="tab8">Lorem Ipsum eight</div>
      <div slot="tab9">Lorem Ipsum nine</div>
      <div slot="tab10">Lorem Ipsum ten</div>
      <div slot="tab11">Lorem Ipsum eleven</div>
      <div slot="tab12">Lorem Ipsum twelve</div>
      <div slot="content">{props.children}</div>
    </oak-tab>
  );
};

export default OakTabNew;
