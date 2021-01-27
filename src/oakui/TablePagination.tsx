import React, { useState, useEffect, ReactElement } from 'react';
import './styles/TablePagination.scss';
import { Close, FilterList, Search } from '@material-ui/icons';
import OakText from './OakText';
import OakPagination from './OakPagination';
import OakButton from './wc/OakButton';
import OakCheckbox from './OakCheckbox';
import OakModal from './wc/OakModal';

interface Props {
  onChangePage: any;
  searchPref: any;
  handleSearchPrefChange: any;
  totalRows: any;
  doSearch: any;
  header: any;
  datagrid: any;
  handleGridChange: any;
}

const TablePagination = (props: Props) => {
  const [showChooseColumns, setShowChooseColumns] = useState(false);
  const search = (event: any) => {
    event.preventDefault();
    props.doSearch();
  };

  const clearSearch = () => {
    props.handleSearchPrefChange({
      currentTarget: {
        name: 'text',
        value: '',
      },
    });
  };

  return (
    <>
      <OakModal
        showModal={showChooseColumns}
        handleClose={() => setShowChooseColumns(!showChooseColumns)}
        heading="Choose columns"
      >
        <div slot="body">
          <div className="datagrid-list">
            {props.header &&
              props.header.map((item) => (
                <>
                  {props.datagrid[item.key] !== -1 && (
                    <OakCheckbox
                      data={props.datagrid}
                      id={item.key}
                      label={item.label}
                      handleChange={props.handleGridChange}
                      theme="primary"
                      variant="circle"
                    />
                  )}
                </>
              ))}
          </div>
        </div>
        <div slot="footer">
          <OakButton
            handleClick={() => setShowChooseColumns(false)}
            theme="default"
            variant="appear"
            align="left"
          >
            <Close />
            Close
          </OakButton>
        </div>
      </OakModal>
      <div className="table-pagination">
        <OakPagination
          onChangePage={props.onChangePage}
          totalRows={props.totalRows}
        >
          <div className="table-pagination--filter">
            {/* <FilterList onClick={props.openDatagrid} /> */}
            <OakButton
              handleClick={() => setShowChooseColumns(true)}
              theme="default"
              variant="appear"
              shape="icon"
              size="xsmall"
            >
              <FilterList />
            </OakButton>
            <form
              method="GET"
              onSubmit={search}
              noValidate
              className="table-pagination--filter--search"
            >
              <OakText
                data={props.searchPref}
                id="text"
                handleChange={props.handleSearchPrefChange}
                placeholder="Search"
              />
              <div className="table-pagination--filter--search--action">
                <OakButton
                  theme={props.searchPref.text ? 'primary' : 'default'}
                  variant="appear"
                  handleClick={search}
                  size="xsmall"
                  shape="icon"
                >
                  <Search />
                </OakButton>
                <OakButton
                  theme="default"
                  variant={props.searchPref.text ? 'appear' : 'disabled'}
                  handleClick={clearSearch}
                  size="xsmall"
                  shape="icon"
                >
                  <Close />
                </OakButton>
              </div>
            </form>
          </div>
        </OakPagination>
      </div>
    </>
  );
};

export default TablePagination;
