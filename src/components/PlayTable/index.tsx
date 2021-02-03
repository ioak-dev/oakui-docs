import React from 'react';
import OakTypography from '../../oakui/wc/OakTypography';
import './style.scss';
import TableDemo from './TableDemo';

interface Props {
  match: any;
  history: any;
}

const PlayTable = (props: Props) => {
  return (
    // <div className="home full">
    //   <div className="space-bottom-4">
    //     Copy below token as Authorization key on the request header from postman
    //   </div>
    //   <div className="auth-token">{authorization.token}</div>
    // </div>
    <>
      <OakTypography variant="h2">Table</OakTypography>
      <div className="play-table--list">
        <div className="play-table--list--item">
          <TableDemo />
        </div>
        <div className="play-table--list--item">
          <TableDemo />
        </div>
      </div>
    </>
  );
};

export default PlayTable;
