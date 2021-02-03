import React from 'react';
import OakContainer from '../../oakui/wc/OakContainer';
import OakCard from '../../oakui/wc/OakCard';
import ChartDemo from './ChartDemo';
import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';

interface Props {
  match: any;
  history: any;
}

const PlayChart = (props: Props) => {
  return (
    <OakContainer paddingHorizontal={2} paddingVertical={2} elevation={10}>
      <OakTypography variant="h2">Chart</OakTypography>
      <ChartDemo />
    </OakContainer>
  );
};

export default PlayChart;
