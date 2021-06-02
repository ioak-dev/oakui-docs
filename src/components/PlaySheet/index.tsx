import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakTab from '../../oakui/wc/OakTab';
import OakSection from '../../oakui/wc/OakSection';
import Playground from './playground';
import overviewContent from '../../assets/OakSheetOverview.json';
import apiContent from '../../assets/OakSheetApi.json';
import OverviewSection from '../OverviewSection';
import ApiSection from '../ApiSection';

interface Props {
  match: any;
  history: any;
}

const PlaySheet = (props: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (detail: any) => {
    console.log(detail);
    setActiveTab(detail.value);
  };

  return (
    <div className="section-container">
      <OakTab
        tabs={['Overview', 'Playground', 'API', 'Examples']}
        handleChange={changeTab}
        fill
        variant="fill"
      >
        <OakSection fillColor="none" paddingHorizontal={2} paddingVertical={4}>
          {activeTab === 0 && <OverviewSection data={overviewContent} />}
          {activeTab === 2 && <ApiSection data={apiContent} />}
          {activeTab === 1 && (
            <Playground match={props.match} history={props.history} />
          )}
          {activeTab === 3 && <div>examples</div>}
        </OakSection>
      </OakTab>
    </div>
  );
};

export default PlaySheet;
