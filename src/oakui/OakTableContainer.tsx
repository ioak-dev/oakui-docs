import React, { useState, useEffect } from 'react';
import './styles/oak-table.scss';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import OakTableRow from './OakTableRow';

interface Props {
  header: {
    key: string;
    label: string;
    dtype?: string; // 'text' | 'date' | 'number';
    elements?: any;
  }[];
  data: any;
  handleSort: any;
  sortBy?: string;
  sortAsc?: boolean;
}

const OakTableContainer = (props: Props) => {
  return (
    <div className="oak-table-container">
      <table>
        <thead>
          <tr>
            {props.header &&
              props.header.map((header) => (
                <th onClick={() => props.handleSort(header.key)}>
                  <span>
                    {header.label}
                    {props.sortBy === header.key && props.sortAsc && (
                      <ArrowUpward fontSize="small" />
                    )}
                    {props.sortBy === header.key && !props.sortAsc && (
                      <ArrowDownward fontSize="small" />
                    )}
                  </span>
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((row) => (
              <OakTableRow row={row} header={props.header} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OakTableContainer;
