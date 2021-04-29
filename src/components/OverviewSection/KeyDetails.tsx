import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { compose as tableCompose } from '@oakui/core-stage/style-composer/OakTableComposer';

import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';
import OverviewType from './OverviewType';

interface Props {
  data: OverviewType;
}

const KeyDetails = (props: Props) => {
  return (
    <div className="key-details">
      <OakTypography variant="body2">{props.data.title}</OakTypography>
      <table className={tableCompose({ color: 'global' })}>
        <tbody>
          <tr>
            <td>Custom element name</td>
            <td>{props.data.componentName}</td>
          </tr>
          <tr>
            <td>Style composer path</td>
            <td>{props.data.composerName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KeyDetails;
