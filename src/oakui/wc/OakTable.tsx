import React, { useState, useEffect, useRef } from 'react';
import {
  TABLE_DATA_CHANGE_EVENT,
  TABLE_PAGINATE_EVENT,
} from 'oakui/dist/types/TableEventTypes';
import { compose } from 'oakui/dist/style-composer/OakTableComposer';
import { TableHeader } from 'oakui/dist/types/TableHeaderType';
import { PaginatePref } from 'oakui/dist/types/PaginatePrefType';

interface Props {
  children: any;
  header: TableHeader[];
  data: any;
  totalRows?: number;
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
  dense?: boolean;
  variant?: 'outlined';
  fill?: 'container' | 'surface' | 'float' | 'none';
  formElementSize?: 'xsmall' | 'small' | 'medium' | 'large';
  formElementShape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf';
  navPlacement?: 'top' | 'bottom' | 'none';
  paginatePref: PaginatePref;
  handleDataChange?: any;

  // not used yet
  showAll?: boolean;
}

const OakTable = (props: Props) => {
  const elementRef = useRef();

  useEffect(() => {
    (elementRef.current as any)!.rounded = props.rounded;
  }, [props.rounded]);

  useEffect(() => {
    (elementRef.current as any)!.dense = props.dense;
  }, [props.dense]);

  useEffect(() => {
    (elementRef.current as any)!.header = props.header;
  }, [props.header]);

  useEffect(() => {
    (elementRef.current as any)!.data = props.data;
  }, [props.data]);

  useEffect(() => {
    console.log(props.paginatePref);
    (elementRef.current as any)!.paginatePref = props.paginatePref;
  }, [props.paginatePref]);

  useEffect(() => {
    // attachListener('change', handleChange);
    // attachListener('onSubmit', handleSubmit);
    (elementRef as any).current.addEventListener(
      TABLE_DATA_CHANGE_EVENT,
      handleChange
    );
    (elementRef as any).current.addEventListener(
      TABLE_PAGINATE_EVENT,
      handleChange
    );

    return () => {
      (elementRef as any).current?.removeEventListener(
        TABLE_DATA_CHANGE_EVENT,
        handleChange
      );
      (elementRef as any).current?.removeEventListener(
        TABLE_PAGINATE_EVENT,
        handleChange
      );
    };
  });

  const handleChange = (event: any) => {
    if (props.handleDataChange) {
      props.handleDataChange(event);
    }
  };

  return (
    <oak-table
      elevation={props.elevation}
      variant={props.variant}
      fill={props.fill}
      formElementSize={props.formElementSize}
      formElementShape={props.formElementShape}
      navPlacement={props.navPlacement}
      totalRows={props.totalRows}
      ref={elementRef}
    >
      <div className={compose({ dense: props.dense, fill: props.fill })}>
        {props.children}
      </div>
    </oak-table>
  );
};

export default OakTable;
