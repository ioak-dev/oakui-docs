import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { AccessAlarm } from '@material-ui/icons';

import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';
import OakSection from '../../oakui/wc/OakSection';
import OakSelect from '../../oakui/wc/OakSelect';
import OakButton from '../../oakui/wc/OakButton';
import OakInput from '../../oakui/wc/OakInput';
import OakSheet from '../../oakui/wc/OakSheet';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakDivider from '../../oakui/wc/OakDivider';
import OakCheckbox from '../../oakui/wc/OakCheckbox';
import OakExpansionPanel from '../../oakui/wc/OakExpansionPanel';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [state, setState] = useState<any>({
    color: 'global',
    colorMode: 'darker',
    marginHorizontal: 0,
    marginVertical: 0,
    matchBackground: true,
  });

  const [panelState, setPanelState] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handlePanelChange = (detail: any) => {
    setPanelState((prevState) => ({
      ...prevState,
      [detail.name]: detail.value,
    }));
  };

  return (
    <div className="expansion-panel-playground">
      <OakSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="none" outlineColor="none" rounded fullWidth>
          <OakSelect
            label="Color"
            value={state.color}
            options={[
              'none',
              'global',
              'container',
              'surface',
              'float',
              'primary',
              'secondary',
              'tertiary',
              'default',
              'info',
              'danger',
              'warning',
              'success',
              'invert',
            ]}
            name="color"
            handleChange={handleChange}
            gutterBottom
          />
          <OakSelect
            label="colorMode"
            value={state.colorMode}
            options={['darker', 'lighter']}
            name="colorMode"
            handleChange={handleChange}
            gutterBottom
          />
          <OakInput
            type="number"
            name="marginVertical"
            label="marginVertical"
            value={state.marginVertical}
            gutterBottom
            handleInput={handleChange}
          />
        </OakSection>
      </OakSheet>
      <div className="expansion-panel-container">
        <OakExpansionPanel
          groupName="expansion-panel-test-group"
          name="one"
          elevation={0}
          outlined
          handleChange={handlePanelChange}
          rounded
        >
          <div
            slot="header"
            className={`expansion-panel__header ${
              panelState.one ? 'panel-active' : ''
            }`}
          >
            <div>
              Expedita commodi sequi ut nobis magni hic ipsum at numquam at cum
              fuga ducimus
            </div>
            <div>
              <AccessAlarm />
            </div>
          </div>
          <div slot="main">
            <OakSection
              paddingVertical={1}
              paddingHorizontal={1}
              elevation={0}
              fillColor="secondary"
              semitransparent
            >
              At necessitatibus illum excepturi doloremque repellat ipsum nihil
              nam adipisci autem qui tempore vitae perferendis sunt. Ab
              laboriosam nam rem expedita a laboriosam facilis accusamus
              incidunt. Dolor veniam quis similique vel nam blanditiis dolore
              maxime magnam molestias. Explicabo tempore hic quas reprehenderit
              cum nam eos possimus facilis eos exercitationem nisi impedit sint
              assumenda laborum
            </OakSection>
          </div>
        </OakExpansionPanel>
        <OakExpansionPanel
          groupName="expansion-panel-test-group"
          name="two"
          rounded
          handleChange={handlePanelChange}
        >
          <div
            slot="header"
            className={`expansion-panel__header ${
              panelState.two ? 'panel-active' : ''
            }`}
          >
            <div>
              Expedita commodi sequi ut nobis magni hic ipsum at numquam at cum
              fuga ducimus
            </div>
            <div>
              <AccessAlarm />
            </div>
          </div>
          <div slot="main">
            <OakSection
              paddingVertical={1}
              paddingHorizontal={1}
              elevation={0}
              fillColor="secondary"
              semitransparent
            >
              At necessitatibus illum excepturi doloremque repellat ipsum nihil
              nam adipisci autem qui tempore vitae perferendis sunt. Ab
              laboriosam nam rem expedita a laboriosam facilis accusamus
              incidunt. Dolor veniam quis similique vel nam blanditiis dolore
              maxime magnam molestias. Explicabo tempore hic quas reprehenderit
              cum nam eos possimus facilis eos exercitationem nisi impedit sint
              assumenda laborum
            </OakSection>
          </div>
        </OakExpansionPanel>
        <OakExpansionPanel
          groupName="expansion-panel-test-group"
          name="three"
          handleChange={handlePanelChange}
        >
          <div
            slot="header"
            className={`expansion-panel__header ${
              panelState.three ? 'panel-active' : ''
            }`}
          >
            <div>
              Expedita commodi sequi ut nobis magni hic ipsum at numquam at cum
              fuga ducimus
            </div>
            <div>
              <AccessAlarm />
            </div>
          </div>
          <div slot="main">
            <OakSection
              paddingVertical={1}
              paddingHorizontal={1}
              elevation={0}
              fillColor="secondary"
              semitransparent
            >
              At necessitatibus illum excepturi doloremque repellat ipsum nihil
              nam adipisci autem qui tempore vitae perferendis sunt. Ab
              laboriosam nam rem expedita a laboriosam facilis accusamus
              incidunt. Dolor veniam quis similique vel nam blanditiis dolore
              maxime magnam molestias. Explicabo tempore hic quas reprehenderit
              cum nam eos possimus facilis eos exercitationem nisi impedit sint
              assumenda laborum
            </OakSection>
          </div>
        </OakExpansionPanel>
        <OakExpansionPanel
          groupName="expansion-panel-test-group"
          name="four"
          handleChange={handlePanelChange}
        >
          <div
            slot="header"
            className={`expansion-panel__header ${
              panelState.four ? 'panel-active' : ''
            }`}
          >
            <div>
              Modi asperiores a quasi aliquid explicabo molestias maiores
              accusantium laboriosam
            </div>
            <div>
              <AccessAlarm />
            </div>
          </div>
          <div slot="main">
            Ratione nam quidem vitae laudantium cumque ex autem optio aliquam
            blanditiis enim mollitia amet aut magni magni tempore. Eius ea
            consectetur eligendi porro dignissimos nemo quis itaque inventore ab
            enim. Iure repudiandae ipsam officia eveniet neque eligendi nostrum
            voluptatem eum nihil. Totam ad maiores ex totam unde ducimus labore
            consectetur perspiciatis. Similique dolorem provident nobis eligendi
            repellendus veniam distinctio dolorum facilis. Eius recusandae
            consequatur ratione ipsum ex nemo illo tempora cumque reprehenderit.
            Provident asperiores repudiandae id sequi culpa ipsam deleniti atque
            aliquam earum minima vero aspernatur
          </div>
        </OakExpansionPanel>
      </div>
      <br />
      <OakFormActionsContainer align="left">
        <OakButton
          theme="info"
          variant="appear"
          handleClick={() => setIsOpen(true)}
          size="xsmall"
        >
          Component settings
        </OakButton>
      </OakFormActionsContainer>
    </div>
  );
};

export default Playground;
