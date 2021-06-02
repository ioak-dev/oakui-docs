import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakTab from '../../oakui/wc/OakTab';
import OakSection from '../../oakui/wc/OakSection';
import Overview from './overview';
import Playground from './playground';

interface Props {
  match: any;
  history: any;
}

const PlayDrawer = (props: Props) => {
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
          {activeTab === 0 && (
            <Overview match={props.match} history={props.history} />
          )}
          {activeTab === 1 && (
            <Playground match={props.match} history={props.history} />
          )}
          {activeTab === 3 && <div>examples</div>}
        </OakSection>
      </OakTab>
    </div>
  );
};

export default PlayDrawer;
