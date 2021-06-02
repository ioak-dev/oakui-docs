import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';
import PropertySection from './PropertySection';
import EventSection from './EventSection';

interface Props {
  data: {
    properties: {
      name: string;
      type: string;
      default?: string;
      description: string;
    }[];
    events: {
      name: string;
      description: string;
    }[];
  };
}

const ApiSection = (props: Props) => {
  return (
    <div className="api-section">
      <OakTypography variant="h3" gutterBottom>
        Properties
      </OakTypography>
      <PropertySection properties={props.data.properties} />
      <OakTypography variant="h3">Events</OakTypography>
      <EventSection events={props.data.events} />
    </div>
  );
};

export default ApiSection;
