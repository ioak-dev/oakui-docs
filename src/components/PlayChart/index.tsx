import React from 'react';
import OakContainer from '../../oakui/wc/OakContainer';
import OakHeading from '../../oakui/OakHeading';
import OakCard from '../../oakui/wc/OakCard';
import ChartDemo from './ChartDemo';
import './style.scss';

interface Props {
  match: any;
  history: any;
}

const PlayChart = (props: Props) => {
  return (
    <OakContainer paddingHorizontal={2} paddingVertical={2} elevation={10}>
      <OakHeading title="Chart" />
      <ChartDemo />
    </OakContainer>
  );
};

export default PlayChart;
