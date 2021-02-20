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
      <OakTypography variant="h4">Control spacing</OakTypography>
      <OakTypography variant="h3" display="inline">
        Use
        <OakTypography variant="body1" display="inline" highlightColor="info">
          paddingHorizontal
        </OakTypography>
        to set horizontal spacing between the container and content.
      </OakTypography>
    </div>
  );
};

export default Overview;
