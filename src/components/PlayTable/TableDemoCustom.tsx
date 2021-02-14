/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PaginatePref } from 'oakui/dist/types/PaginatePrefType';
import { SortDirection, SortPref } from 'oakui/dist/types/SortPrefType';
import {
  TableCellDatatype,
  TableHeader,
} from 'oakui/dist/types/TableHeaderType';
import { getPage } from 'oakui/dist/services/OakTableService';
import './TableDemo.scss';
import OakButton from '../../oakui/wc/OakButton';
import { newId } from '../../events/MessageService';
import OakTable from '../../oakui/wc/OakTable';
import OakInput from '../../oakui/wc/OakInput';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';

const TableDemoCustom = () => {
  const authorization = useSelector((state) => state.authorization);
  const header: TableHeader[] = [
    {
      name: 'category',
      datatype: TableCellDatatype.text,
    },
    {
      name: 'amount',
      datatype: TableCellDatatype.number,
    },
    {
      name: 'description',
      datatype: TableCellDatatype.text,
    },
    {
      name: 'comment',
      datatype: TableCellDatatype.text,
    },
    {
      name: 'comment2',
      datatype: TableCellDatatype.text,
    },
  ];

  const [paginatePref, setPaginatePref] = useState<PaginatePref>({
    pageNo: 1,
    rowsPerPage: 5,
    searchText: '',
  });

  const [sortPref, setSortPref] = useState<SortPref>({
    sortBy: '',
    sortDirection: SortDirection.ascending,
  });
  const [view, setView] = useState<any[]>([]);
  const [totalRows, setTotalRows] = useState(0);

  const [data, setData] = useState([
    {
      id: 1,
      category: 'fr',
      description: 'repellendus rerum molestias perspiciatis neque',
      comment: 'laudantium aliquid',
      comment2: 'Voluptatem optio',
      comment3: 'Voluptatem optio',
      comment4: 'ducimus temporibus',
      comment5: 'Voluptatem optio',
      comment6: 'Voluptatem optio',
      comment7: 'ducimus temporibus',
      amount: 100,
    },
    {
      id: 2,
      category: 'gr',
      description: 'Velit laborum quam nisi',
      comment: 'commodi impedit',
      comment2: 'Voluptatem optio',
      comment3: 'Voluptatem optio',
      comment4: 'ducimus temporibus',
      comment5: 'Voluptatem optio',
      comment6: 'Voluptatem optio',
      comment7: 'ducimus temporibus',
      amount: 200,
    },
    {
      id: 3,
      category: 'me',
      description: 'perspiciatis neque',
      comment: 'laudantium aliquid',
      comment2: 'Voluptatem optio',
      comment3: 'Voluptatem optio',
      comment4: 'ducimus temporibus',
      comment5: 'Voluptatem optio',
      comment6: 'Voluptatem optio',
      comment7: 'ducimus temporibus',
      amount: 100,
    },
    {
      id: 4,
      category: 'me',
      description: 'Velit laborum quam nisi',
      comment: 'commodi impedit',
      comment2: 'Voluptatem optio',
      comment3: 'Voluptatem optio',
      comment4: 'ducimus temporibus',
      comment5: 'Voluptatem optio',
      comment6: 'Voluptatem optio',
      comment7: 'ducimus temporibus',
      amount: 200,
    },
    {
      id: 5,
      category: 'fr',
      description: 'repellendus rerum molestias perspiciatis neque',
      comment: 'laudantium aliquid',
      comment2: 'Voluptatem optio',
      comment3: 'Voluptatem optio',
      comment4: 'ducimus temporibus',
      comment5: 'Voluptatem optio',
      comment6: 'Voluptatem optio',
      comment7: 'ducimus temporibus',
      amount: 100,
    },
    {
      id: 6,
      category: 'gr',
      description: 'Velit laborum quam nisi',
      comment: 'commodi impedit',
      comment2: 'Voluptatem optio',
      comment3: 'Voluptatem optio',
      comment4: 'ducimus temporibus',
      comment5: 'Voluptatem optio',
      comment6: 'Voluptatem optio',
      comment7: 'ducimus temporibus',
      amount: 200,
    },
    {
      id: 7,
      category: 'fr',
      description: 'perspiciatis neque',
      comment: 'laudantium aliquid',
      comment2: 'Voluptatem optio',
      comment3: 'Voluptatem optio',
      comment4: 'ducimus temporibus',
      comment5: 'Voluptatem optio',
      comment6: 'Voluptatem optio',
      comment7: 'ducimus temporibus',
      amount: 100,
    },
    {
      id: 8,
      category: 'me',
      description: 'Velit laborum quam nisi',
      comment: 'commodi impedit',
      comment2: 'Voluptatem optio',
      comment3: 'Voluptatem optio',
      comment4: 'ducimus temporibus',
      comment5: 'Voluptatem optio',
      comment6: 'Voluptatem optio',
      comment7: 'ducimus temporibus',
      amount: 200,
    },
  ]);

  const addData = () => {
    setData([
      ...data,
      {
        id: newId(),
        category: 'fr',
        description: newId(),
        comment: 'laudantium aliquid',
        comment2: 'Voluptatem optio',
        comment3: 'Voluptatem optio',
        comment4: 'ducimus temporibus',
        comment5: 'Voluptatem optio',
        comment6: 'Voluptatem optio',
        comment7: 'ducimus temporibus',
        amount: 100,
      },
    ]);
  };
  const updateData = () => {
    const dataL = [...data];
    dataL[0].id = newId();
    setData(dataL);
  };

  const handleDataChange = (event: any) => {
    const { totalRows, filteredResults } = getPage(data, header, event.detail);
    setView(filteredResults);
    setTotalRows(totalRows);
    setPaginatePref({ ...paginatePref, ...event.detail });
  };

  useEffect(() => {
    const { totalRows, filteredResults } = getPage(data, header, paginatePref);
    setView(filteredResults);
    setTotalRows(totalRows);
  }, [data, paginatePref]);

  return (
    <>
      <OakTable
        header={header}
        data={view}
        paginatePref={paginatePref}
        fill="surface"
        formElementSize="xsmall"
        navPlacement="top"
        totalRows={totalRows}
        handleDataChange={handleDataChange}
      >
        <table>
          <thead>
            <tr>
              {header?.map((item) => (
                <th key={item.name}>
                  <span>{item.name}</span>
                </th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {view?.map((row: any, index: number) => (
              <tr key={index}>
                {header.map((item: TableHeader) => (
                  <td key={item.name}>
                    {item.datatype === TableCellDatatype.text && row[item.name]}
                    {item.datatype !== TableCellDatatype.text && (
                      <OakInput
                        name={item.name}
                        value={row[item.name]}
                        size="xsmall"
                      />
                    )}
                  </td>
                ))}
                <td>
                  <OakFormActionsContainer>
                    <OakButton
                      theme="primary"
                      variant="appear"
                      size="xsmall"
                      semitransparent
                    >
                      Edit
                    </OakButton>
                    <OakButton
                      theme="danger"
                      variant="appear"
                      size="xsmall"
                      semitransparent
                    >
                      Delete
                    </OakButton>
                  </OakFormActionsContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </OakTable>
      <br />
      <OakButton theme="primary" variant="regular" handleClick={addData}>
        Add
      </OakButton>
      <OakButton theme="primary" variant="regular" handleClick={updateData}>
        Update
      </OakButton>
    </>
  );
};

export default TableDemoCustom;
