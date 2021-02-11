import React, { useState, useEffect, useRef } from 'react';

interface Props {
  header: {
    name: string;
    label: string;
    dtype?: string; // 'text' | 'date' | 'number';
    elements?: any;
  }[];
  data: any;
  serverSidePagination?: boolean;

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

  useEffect(() => {
    (elementRef.current as any)!.serverSidePagination =
      props.serverSidePagination;
  }, [props.serverSidePagination]);

  return <oak-table ref={elementRef} />;
};

export default OakTableNew;
