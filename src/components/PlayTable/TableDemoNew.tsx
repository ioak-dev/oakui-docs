import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TableDemo.scss';
import OakTableNew from '../../oakui/wc/OakTableNew';
import OakButton from '../../oakui/wc/OakButton';
import { newId } from '../../events/MessageService';

const TableDemoNew = () => {
  const authorization = useSelector((state) => state.authorization);
  const header = [
    {
      name: 'category',
      label: 'Category',
      dtype: 'input_select',
      elements: [
        { key: 'gr', value: 'Grocery' },
        { key: 'me', value: 'Meat' },
        { key: 'fr', value: 'Fruits' },
      ],
    },
    {
      name: 'amount',
      label: 'Amount',
      dtype: 'input_number',
    },
    {
      name: 'description',
      label: 'Description',
      dtype: 'input',
    },
    {
      name: 'comment',
      label: 'Comment',
      dtype: 'text',
    },
    {
      name: 'comment2',
      label: 'Comment',
      dtype: 'input_text',
    },
    // {
    //   key: 'comment3',
    //   label: 'Comment',
    //   dtype: 'text',
    // },
    // {
    //   key: 'comment4',
    //   label: 'Comment',
    //   dtype: 'text',
    // },
    // {
    //   key: 'comment5',
    //   label: 'Comment',
    //   dtype: 'text',
    // },
    // {
    //   key: 'comment6',
    //   label: 'Comment',
    //   dtype: 'text',
    // },
    // {
    //   key: 'comment7',
    //   label: 'Comment',
    //   dtype: 'text',
    // },
  ];

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

  const handleDeleteRow = (actionName, row) => {
    console.log(actionName, row);
  };

  const actionColumn = {
    label: '',
    actions: [
      {
        label: 'Delete',
        icon: 'delete',
        actionHandler: handleDeleteRow,
        actionName: 'delete',
      },
      {
        label: 'Edit',
        theme: 'secondary',
        variant: 'regular',
        actionHandler: handleDeleteRow,
        actionName: 'edit',
      },
    ],
  };

  const handleCellDataChange = (row, column, value) => {
    console.log(row, column, value);
    const dataToUpdate = [...data];
    const matchData = dataToUpdate.find((item) => item.id === row.id);
    if (matchData) {
      matchData[column] = value;
    }
    setData(dataToUpdate);
  };

  const onChangePage = (
    pageNo,
    rowsPerPage,
    sortField,
    sortAsc,
    searchText
  ) => {
    console.log(pageNo, rowsPerPage, sortField, sortAsc, searchText);
  };

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

  return (
    <>
      <OakTableNew header={header} data={data} />
      <OakButton theme="primary" variant="regular" handleClick={addData}>
        Add
      </OakButton>
      <OakButton theme="primary" variant="regular" handleClick={updateData}>
        Update
      </OakButton>
    </>
  );
};

export default TableDemoNew;
