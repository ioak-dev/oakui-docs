import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';

interface Props {
  match: any;
  history: any;
}

const Overview = (props: Props) => {
  return (
    <div>
      <OakTypography variant="h5">Position</OakTypography>
      <OakTypography variant="body1" display="inline">
        You can position the drawer on top, bottom, left or right edges using
        <OakTypography variant="body1" display="inline" highlightColor="info">
          position
        </OakTypography>
        property.
      </OakTypography>
    </div>
  );
};

export default Overview;
