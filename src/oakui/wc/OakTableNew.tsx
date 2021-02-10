import React, { useState, useEffect, useRef } from 'react';

interface Props {
  header: {
    key: string;
    label: string;
    dtype?: string; // 'text' | 'date' | 'number';
    elements?: any;
  }[];
  data: any;

  // not used yet
  onChangePage?: any;
  totalRows?: number;
  navPlacement?: 'top' | 'bottom';
  handleCellDataChange?: any;
  showAll?: boolean;
  actionColumn?: {
    label: string;
    actions: {
      label: string;
      icon?: string;
      actionHandler: any;
      actionName: any;
      theme?: string;
      variant?: string;
    }[];
  };
}

const OakTableNew = (props: Props) => {
  const elementRef = useRef();

  useEffect(() => {
    (elementRef.current as any)!.header = props.header;
  }, [props.header]);

  useEffect(() => {
    (elementRef.current as any)!.data = props.data;
  }, [props.data]);

  return <oak-table ref={elementRef} />;
};

export default OakTableNew;
