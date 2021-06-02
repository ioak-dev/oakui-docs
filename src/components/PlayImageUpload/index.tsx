import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakTab from '../../oakui/wc/OakTab';
import OakSection from '../../oakui/wc/OakSection';
import Playground from './playground';
import OakImageUploadOverview from '../../assets/OakImageUploadOverview.json';
import OakImageUploadApi from '../../assets/OakImageUploadApi.json';
import OverviewSection from '../OverviewSection';
import ApiSection from '../ApiSection';
import Example from './Example';

interface Props {
  match: any;
  history: any;
}

const PlayImageUpload = (props: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (detail: any) => {
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
          {activeTab === 0 && <OverviewSection data={OakImageUploadOverview} />}
          {activeTab === 2 && <ApiSection data={OakImageUploadApi} />}
          {activeTab === 1 && (
            <Playground match={props.match} history={props.history} />
          )}
          {activeTab === 3 && <Example />}
        </OakSection>
      </OakTab>
    </div>
  );
};

export default PlayImageUpload;
