import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { OakSectionStyleProps } from 'oakui/dist/styles/OakSectionStyles';
import './style.scss';
import OakTab from '../../oakui/wc/OakTab';
import OakTypography from '../../oakui/wc/OakTypography';
import OakSection from '../../oakui/wc/OakSection';
import OakSelect from '../../oakui/wc/OakSelect';
import OakCheckbox from '../../oakui/wc/OakCheckbox';
import OakButton from '../../oakui/wc/OakButton';
import OakCheckboxGroup from '../../oakui/wc/OakCheckboxGroup';
import OakInput from '../../oakui/wc/OakInput';
import OakForm from '../../oakui/wc/OakForm';
import Overview from './overview';
import Playground from './playground';

interface Props {
  match: any;
  history: any;
}

const PlaySection = (props: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (detail: any) => {
    console.log(detail);
    setActiveTab(detail.value);
  };

  return (
    <OakTab
      tabs={['Overview', 'Playground', 'API', 'Examples']}
      handleChange={changeTab}
    >
      <OakSection fillColor="none">
        {activeTab === 0 && (
          <Overview match={props.match} history={props.history} />
        )}
        {activeTab === 1 && (
          <Playground match={props.match} history={props.history} />
        )}
        {activeTab === 3 && (
          <div className="dash-grid">
            <OakSection fillColor="secondary">
              Voluptatem provident eveniet incidunt occaecati sed commodi a
              accusamus repellat in occaecati debitis. Aperiam iusto
            </OakSection>
            <OakSection
              fillColor="success"
              semitransparent
              outlineColor="success"
            >
              Voluptatem provident eveniet incidunt occaecati sed commodi a
              accusamus repellat in occaecati debitis. Aperiam iusto
            </OakSection>
            <OakSection fillColor="float" outlineColor="primary">
              Voluptatem provident eveniet incidunt occaecati sed commodi a
              accusamus repellat in occaecati debitis. Aperiam iusto
            </OakSection>
            <OakSection fillColor="none" outlineColor="danger">
              Voluptatem provident eveniet incidunt occaecati sed commodi a
              accusamus repellat in occaecati debitis. Aperiam iusto
            </OakSection>
            <OakSection elevation={6}>
              Voluptatem provident eveniet incidunt occaecati sed commodi a
              accusamus repellat in occaecati debitis. Aperiam iusto
            </OakSection>
            <OakSection
              fillColor="danger"
              outlineColor="danger"
              textColor="danger"
              semitransparent
            >
              Voluptatem provident eveniet incidunt occaecati sed commodi a
              accusamus repellat in occaecati debitis. Aperiam iusto odit quis
              sed quos deleniti unde dolor quis sunt nobis eveniet quas cumque
              quas suscipit. Fugiat doloribus repudiandae illum ut eaque
              adipisci dolor qui accusamus vel quibusdam accusantium expedita
              atque at. Temporibus aperiam molestias cum perspiciatis natus unde
              optio molestias at maxime earum sunt exercitationem Beatae vel
              accusamus unde numquam tempore natus cum deserunt accusamus
              repellendus provident placeat sit ipsam. Consequatur quis dolorem
              fugit natus dolorum sit soluta illum
            </OakSection>
            <OakSection
              fillColor="container"
              outlineColor="info"
              textColor="success"
              rounded
            >
              Voluptatem provident eveniet incidunt occaecati sed commodi a
              accusamus repellat in occaecati debitis. Aperiam iusto
            </OakSection>
            <OakSection fillColor="primary" elevation={6} rounded>
              Voluptatem provident eveniet incidunt occaecati sed commodi a
              accusamus repellat in occaecati debitis. Aperiam iusto
            </OakSection>
          </div>
        )}
      </OakSection>
    </OakTab>
  );
};

export default PlaySection;
