import React from 'react';
import OakSection from '../../oakui/wc/OakSection';
import ChartDemo from './ChartDemo';
import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';

interface Props {
  match: any;
  history: any;
}

const PlayChart = (props: Props) => {
  return (
    <OakSection paddingHorizontal={2} paddingVertical={2} elevation={10}>
      <OakTypography variant="h2">Chart</OakTypography>
      <ChartDemo />
    </OakSection>
  );
};

export default PlayChart;
