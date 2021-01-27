import React, { useState, useEffect } from 'react';
import './styles/oak-table.scss';
import TableCell from './TableCell';

interface Props {
  header: {
    key: string;
    label: string;
    dtype?: string; // 'text' | 'date' | 'number';
    elements?: any;
  }[];
  row: any;
  handleCellDataChange?: any;
}

const OakTableRow = (props: Props) => {
  return (
    <tr>
      {props.header.map((header) => (
        <td>
          <TableCell
            header={header}
            columnKey={header.key}
            row={props.row}
            handleCellDataChange={props.handleCellDataChange}
          />
        </td>
      ))}
    </tr>
  );
};

export default OakTableRow;
