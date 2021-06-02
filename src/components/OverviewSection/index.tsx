import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';
import KeyDetails from './KeyDetails';
import OverviewType from './OverviewType';

type Props = {
  data: {
    title?: string;
    componentName: string;
    composerName: string;
    sections: {
      heading?: string;
      body: string;
    }[];
  };
};

const OverviewSection = (props: Props) => {
  return (
    <>
      <KeyDetails data={props.data} />
      <div className="overview-section">
        {props.data?.sections?.map((content, index) => (
          <div key={content.heading || index}>
            {content.heading && (
              <OakTypography variant="h3">{content.heading}</OakTypography>
            )}
            <OakTypography variant="body1">{content.body}</OakTypography>
          </div>
        ))}
      </div>
    </>
  );
};

export default OverviewSection;
